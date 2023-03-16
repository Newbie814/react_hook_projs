import React, { useState } from 'react';

//If you want to update the state immdeiately and synchronously, you can pass a function to setState that receives the previous state as an argument and returns the new state. This is useful when you want to update the state based on the previous state. For example:

// setState((prevState) => {
//  return {...prevState, value: newValue}
// })

const UseStateGotcha1 = () => {
  const [gotcha, setGotcha] = useState(0);

  const gotchaHandler = () => {
    setGotcha((currentState) => {
      const newState = currentState + 1;
      console.log(newState);
      return newState;
    });
  };

  return (
    <>
      <h1>UseState Gotcha 1</h1>
      <h2>{gotcha}</h2>
      <button onClick={gotchaHandler} className='btn'>
        gotcha plus one
      </button>
    </>
  );
};

export default UseStateGotcha1;
