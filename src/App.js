import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Counter from './Counter';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <Counter
          value={counter}
          onIncrement={() => dispatch({ type: 'INCREMENT' })}
          onDecrement={() => dispatch({ type: 'DECREMENT' })}
          onIncrementAsync={() => dispatch({ type: 'INCREMENT_ASYNC' })}
          onDecrementAsync={() => dispatch({ type: 'DECREMENT_ASYNC' })}
        />
      </header>
    </div>
  );
}

export default App;
