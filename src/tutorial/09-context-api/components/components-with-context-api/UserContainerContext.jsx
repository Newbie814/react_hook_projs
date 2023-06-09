import { useAppContext } from './contexts/navbarConProv';

const UserContainerContext = () => {
  const { user, ButtonComponent } = useAppContext();
  // return <h4>placeholder user container</h4>;
  return (
    <div className='user-container'>
      {user ? (
        <>
          <p>{user.name}</p>
          {<ButtonComponent />}
        </>
      ) : (
        <>
          <h3>please login</h3>
        </>
      )}
    </div>
  );
};
export default UserContainerContext;
