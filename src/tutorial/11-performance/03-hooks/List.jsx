import Item from './Person';
// import React from 'react';
import { memo } from 'react';

const List = ({ people, removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        {
          /* even though component is memoized, this will still trigger re-render, as a new removePerson instance is created by parent component. Therefore, javascript sees it as the props changing. */
        }
        return <Item key={person.id} {...person} removePerson={removePerson} />;
      })}
    </div>
  );
};

export default memo(List);

// export const MemoizedList = React.memo(List);
// export default List;
