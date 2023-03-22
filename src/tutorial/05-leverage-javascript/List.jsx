import { people } from '../../data';

import React from 'react';

const List = () => {
  return (
    <div>
      <ul>
        {people.map((person) => {
          // const { id, name } = person;
          return (
            <li key={person?.id}>
              <h2>{person?.name}</h2>
              <h4>{person?.nickName}</h4>
              <h5>{person?.sister}</h5>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
