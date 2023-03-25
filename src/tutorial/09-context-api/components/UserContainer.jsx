const UserContainer = ({ name, logout }) => {
  return (
    <>
      <h2>UserContainer</h2>

      {name ? (
        <>
          <h3>{name.name}</h3>
          {logout()}
        </>
      ) : (
        <h3>please login</h3>
      )}
    </>
  );
};
export default UserContainer;
