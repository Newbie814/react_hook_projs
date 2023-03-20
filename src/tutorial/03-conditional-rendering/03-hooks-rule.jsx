import { useState, useEffect } from 'react';

const Example = () => {
  const [condition, setCondition] = useState(true);
  if (condition) {
    // won't work
    const [state, setState] = useState(false);
  }

  // if (condition) {
  //   return <h2>Hello There</h2>;
  // }
  // // this will also fail -- it's after conditional return
  // useEffect(() => {
  //   console.log('hello there');
  // }, []);
  return <h2>example</h2>;
};

export default Example;
