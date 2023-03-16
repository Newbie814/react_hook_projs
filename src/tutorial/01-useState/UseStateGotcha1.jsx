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

  //
  // const handleClickWithTimeout = () => {
  //   setTimeout(() => {
  //     console.log('clicked');
  //     setGotcha(gotcha + 1);
  //   }, 3000);
  // };  result will still be 1 with multple clicks, because state isn't updated immediately, it is referencing initial state everytime you click

  // will work because we are passing a function to setState that receives the previous state as an argument and returns the new state
  const handleClickWithTimeout = () => {
    setTimeout(() => {
      console.log('clicked');
      return setGotcha((currentState) => {
        const newState = currentState + 1;
        console.log(newState);
        return newState;
      });
    }, 3000);
  };

  return (
    <>
      <h1>UseState Gotcha 1</h1>
      <h2>{gotcha}</h2>
      <button onClick={gotchaHandler} className='btn'>
        gotcha plus one
      </button>
      <br />
      <button onClick={handleClickWithTimeout} className='btn'>
        set timeout
      </button>
    </>
  );
};

export default UseStateGotcha1;
