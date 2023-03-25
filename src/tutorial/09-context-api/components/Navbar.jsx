import { useState } from 'react';
import NavLinks from './NavLinks';

const Navbar = () => {
  const [name, setName] = useState({ name: 'Matthew' });

  const handleLogout = () => {
    setName(null);
  };

  const ButtonComponent = () => {
    return (
      <button onClick={handleLogout} className='btn'>
        Logout
      </button>
    );
  };
  return (
    <nav className='navbar'>
      <h5>Navbar</h5>
      <NavLinks name={name} logout={ButtonComponent} />
    </nav>
  );
};
export default Navbar;
