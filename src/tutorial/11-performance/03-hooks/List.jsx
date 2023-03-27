import Item from './Person';
// import React from 'react';
import { memo } from 'react';

const List = ({ people, removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} removePerson={removePerson} />;
      })}
    </div>
  );
};

export default memo(List);

// export const MemoizedList = React.memo(List);
// export default List;
