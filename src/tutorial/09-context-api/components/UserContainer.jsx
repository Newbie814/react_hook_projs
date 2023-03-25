const UserContainer = ({ name, logout }) => {
  return (
    <>
      <h2>UserContainer</h2>
      <h3>{name.name}</h3>
      {name ? logout() : <h3>please login</h3>}
    </>
  );
};
export default UserContainer;
