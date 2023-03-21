import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const userName = {
    name: 'Sandra',
  };

  const login = () => {
    setUser(userName);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <>
      <h2 style={{ marginTop: '3rem' }}>user challenge</h2>
      <h4>{user ? `welcome ${user.name}` : 'please login'}</h4>
      <button
        type='button'
        className='btn'
        onClick={() => {
          user ? logout() : login();
        }}
      >
        {user ? 'logout' : 'login'}
      </button>
    </>
  );
};

export default UserChallenge;

//   const userName = {
//     name: 'Sandra',
//   }
// const login = () => {
//     setUser(userName);
//       }

//       const logout = () => {
//     setUser(null);
// }
// }

//   return (
//     <>
//

//     <button type='button' onClick={!setUser}></button>
//     </>
//   );
