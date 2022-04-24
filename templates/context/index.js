import React, { useState, createContext } from 'react';
import MainUser from '../../classes/MainUser';

export const UserContext = createContext({});

const ContextProvider = ({children}) => {
  const [user, setUser] = useState(new MainUser());

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export default ContextProvider;
