import { useState, useContext } from 'react';
import NavLinksContext from './NavLinksContext';

import { NavbarContextProv } from './contexts/navbarConProv';

const NavbarContext = () => {
  const [user, setUser] = useState({ name: 'Matthew' });

  const handleLogout = () => {
    setUser(null);
  };

  const ButtonComponent = () => {
    return (
      <button onClick={handleLogout} className='btn'>
        Logout
      </button>
    );
  };
  return (
    <NavbarContextProv.Provider value={{ user, ButtonComponent }}>
      <nav className='navbar'>
        <h5>Navbar</h5>
        <NavLinksContext />
      </nav>
    </NavbarContextProv.Provider>
  );
};
export default NavbarContext;
