import { useState } from 'react';
import { data } from '../../../data';
import Form from './Form';
import List from './List';
const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);

  return (
    <section>
      <Form setPeople={setPeople} people={people} />
      <List people={people} />
    </section>
  );
};
export default LowerStateChallenge;
