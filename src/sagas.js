import { put, takeEvery, all, call } from 'redux-saga/effects';

function* helloSagas() {
  yield console.log('Hello Sagas!');
}

export const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  // Instead of calling `yield sleep(1000)` directly, use the call Effect
  yield call(sleep, 1000);
  yield put({ type: 'INCREMENT' });
}

// Our worker Saga: will perform the async decrement task
export function* decrementAsync() {
  // Instead of calling `yield sleep(1000)` directly, use the call Effect
  yield call(sleep, 1000);
  yield put({ type: 'DECREMENT' });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

// Our watcher Saga: spawn a new decrementAsync task on each INCREMENT_ASYNC
function* watchDecrementAsync() {
  yield takeEvery('DECREMENT_ASYNC', decrementAsync);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSagas(), watchIncrementAsync(), watchDecrementAsync()]);
}
