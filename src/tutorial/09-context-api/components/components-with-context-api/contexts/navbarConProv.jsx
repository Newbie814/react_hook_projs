import { createContext, useContext } from 'react';

export const useAppContext = () => {
  return useContext(NavbarContextProv);
};

export const NavbarContextProv = createContext();
