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
      </div>
    </>
  );
};

export default ShortCircuitExamples;
