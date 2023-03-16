import { useState } from 'react';

const UseStateGotcha = () => {
  const [gotcha, setGotcha] = useState(0);

  const gotchaHandler = () => {
    setGotcha(gotcha + 1);
    console.log(gotcha); // won't be gotcha + 1, will be gotcha value when function was called
  };

  return (
    <>
      <h1>UseState Gotcha</h1>
      <h2>{gotcha}</h2>
      <button onClick={gotchaHandler} className='btn'>
        gotcha plus one
      </button>
    </>
  );
};

export default UseStateGotcha;
