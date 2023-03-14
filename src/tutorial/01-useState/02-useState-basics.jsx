import React, { useState } from 'react';

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const handleClickIncrement = () => {
    setCount(count + 1);
  };
  const handleClickDecrement = () => {
    setCount(count - 1);
  };
  const handleClickReset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>useState Basics</h1>
      <h2>{count}</h2>
      <button className='btn' onClick={handleClickIncrement}>
        Increment
      </button>
      <button className='btn' onClick={handleClickDecrement}>
        Decrement
      </button>
      <button className='btn' onClick={handleClickReset}>
        Reset
      </button>
    </div>
  );
};

export default UseStateBasics;
