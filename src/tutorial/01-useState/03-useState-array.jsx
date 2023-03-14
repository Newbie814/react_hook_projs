import React, { useState } from 'react';
import { data } from '../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const handleRemoveItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      <h1>UseState Array Example</h1>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button
              type='button'
              className='btn'
              onClick={() => handleRemoveItem(id)}
            >
              Remove item
            </button>
          </div>
        );
      })}
      <button
        className='btn'
        type='button'
        onClick={() => setPeople([])}
        style={{ marginTop: '2rem' }}
      >
        Remove all
      </button>
      ;
    </>
  );
};

export default UseStateArray;
