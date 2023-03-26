const UserContainer = ({ name, logout }) => {
  return (
    <div className='user-container'>
      {name ? (
        <>
          <p>{name.name}</p>
          {logout()}
        </>
      ) : (
        <h3>please login</h3>
      )}
    </div>
  );
};
export default UserContainer;
