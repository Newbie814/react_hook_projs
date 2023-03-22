import React, { useState } from 'react';
import { data } from '../../data';

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    // normally we would submit the form to a server/database
    console.log('name: ', name);

    if (!name) return;

    const fakeId = Date.now();
    const newUser = { id: fakeId, name };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
  };
  const handleRemoveUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {/* render users below */}

      {users.map((user) => {
        const { id, name } = user;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button type='button' onClick={() => handleRemoveUser(id)}>
              Remove User
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
