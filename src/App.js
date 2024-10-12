import React,{useState} from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount =() =>{
    if(count==0)
    {
      ;
    } else {
      setCount(count -1);
    }
  };
  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className ="App">
      <h1>Counter App</h1>
      <div className="border">
        <span>{count}</span>
          <div className="counter">
            <button className="buttonA" onClick={decreaseCount} >-</button>
            <button onClick={increaseCount} >+</button>
          </div>
      </div>
      <button className="reset" onClick={resetCount} >Reset</button>

    </div>
    
  );
}

export default App;
