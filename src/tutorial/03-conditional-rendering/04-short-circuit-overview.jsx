import { useState } from 'react';

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('Matthew');

  return (
    <>
      <div>
        <h1>Short-Circuit Overview</h1>
      </div>
      <h4>Falsy OR : {text || 'Hello World'}</h4>
      {/*  // returns second value, because first value is falsy */}
      <h4>Falsy AND : {text && 'Hello World'}</h4>
      {/* // returns first value, because first value is falsy */}
      <h4>Truthy OR : {name || 'Hello World'}</h4>
      {/* // returns first value, because first value is truthy */}
      <h4>Truthy AND : {name && 'Hello World'}</h4>
    </>
  );
};
export default ShortCircuitOverview;
