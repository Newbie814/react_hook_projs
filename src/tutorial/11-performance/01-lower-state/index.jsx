import { useState } from 'react';
import { data } from '../../../data';
import Button from './Button';
import List from './List';
const LowerState = () => {
  const [people, setPeople] = useState(data);
  // const [count, setCount] = useState(0);

  return (
    <section>
      <Button />
      {/* <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button> */}
      <List people={people} />
    </section>
  );
};
export default LowerState;
