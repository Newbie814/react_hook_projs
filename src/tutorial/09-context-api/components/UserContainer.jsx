const UserContainer = ({ name, logout }) => {
  return (
    <div className='user-container'>
      {name ? (
        <>
          <p>Hello There, {name.name.toUpperCase()}</p>
          <button type='button' className='btn' onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};
export default UserContainer;
