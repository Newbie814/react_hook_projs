import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'batmanning',
  });

  const changePerson = () => {
    if (person.name === 'peter') {
      setPerson({ name: 'john', age: 30, hobby: 'scream at computer' });
    } else {
      return setPerson({ name: 'peter', age: 24, hobby: 'batmanning' });
    }
  };
  return (
    <div>
      <h1>Use State Object Example</h1>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.hobby}</h3>
      <button className='btn' onClick={changePerson}>
        Change Person
      </button>
    </div>
  );
};

export default UseStateObject;
