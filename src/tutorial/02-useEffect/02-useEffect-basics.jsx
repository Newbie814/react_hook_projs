// useEffect is a hook in React that allows you to perform side effects in function components.
// Basically, any work outside of the component. Some examples of side effects are: subscriptions,
// fectching data, manual DOM manipulation, event listeners or timeouts and intervals.

// useEffect hook
// accepts two arguments (second optional)
// first argument = callback function
// second argument = dependency array
// by default, useEffect runs on every render - initial and re-render
// callback can't return promise (can't be async)
// if dependency array is empty, useEffect will only run on initial render

import React, { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log('hello there');
  };

  useEffect(() => {
    sayHello();
    console.log('call useEffect');
  }, [value]);

  // can't return promise. async returns promise, therefore:
  // useEffect(async() => {
  // await ....                  WON'T WORK!!!!!!
  // }, [])

  // invoking the async function, however, will work:
  // useEffect(() => {
  // const someFunc = async() => {
  // await fetch....
  // }
  // someFunc();
  // }, [])

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
      <button className='btn' onClick={() => setValue(0)}>
        reset
      </button>
    </div>
  );
};
export default UseEffectBasics;
