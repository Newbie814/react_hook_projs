import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <div>
        <h2>{text || 'default'}</h2>
        {/*if text isn't there, display the default */}
        {/* || or operand is often used to setup a default value */}
        {/*  */}
        {text && (
          <div>
            <h2>whatever whatever</h2>
            <h2>{name}</h2>
          </div>
        )}
        {/* && and operand is often used to conditionally render elements */}
        {/*In above example, if text is there(true), the right of the operand will be returned(element)  */}
        {/* {!text && (
          <div>
            <h2>whatever whatever</h2>
            <h2>{name}</h2>
          </div>
        )} */}
        {/* ! makes it the opposite if text is not there(false), the right of the operand will be returned(element) */}
        {user && <SomeComponent name={user.name} />}
        <h2 style={{ margin: '1rem 0' }}>Ternary Operator</h2>
        {/* below is conditional rendering with ternary operator */}
        <button className='btn'>{isEditing ? 'edit' : 'add'}</button>
        {user ? (
          <TernaryTrue name={user.name} />
        ) : (
          <TernaryFalse name={user.name} />
        )}
      </div>
    </>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

const TernaryTrue = ({ name }) => {
  return (
    <div>
      <h2>Ternary condition was evelauted to true, {name}.</h2>
    </div>
  );
};

const TernaryFalse = ({ name }) => {
  return (
    <div>
      <h2>Ternary condition was evelauted to false, {name}.</h2>
    </div>
  );
};

export default ShortCircuitExamples;
