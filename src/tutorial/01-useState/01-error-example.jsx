import React from 'react';
// doesn't trigger re-render
const ErrorExample = () => {
  let count = 0;
  const handleClickIncrement = () => {
    count += 1;
  };
  const handleClickDecrement = () => {
    count -= 1;
  };
  const handleClickReset = () => {
    count = 0;
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

export default ErrorExample;
