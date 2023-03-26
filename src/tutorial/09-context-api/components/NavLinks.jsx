import UserContainer from './UserContainer';

const NavLinks = ({ name, logout }) => {
  return (
    <div className='nav-container'>
      <ul className='nav-links'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
      </ul>
      <UserContainer name={name} logout={logout} />
    </div>
  );
};
export default NavLinks;
