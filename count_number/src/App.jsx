import { useState } from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0);

  // Add Value Up To 20
  const addValue = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  // Remove Value Down To 0
  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>Remove</button>
    </div>
  );
}

export default App;