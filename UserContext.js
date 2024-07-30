import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');

  const addUser = (name) => {
    setUser(name);
  };

  const getUser = (callback) => {
    callback(user);
  };


  return (
    <UserContext.Provider value={{ addUser, getUser }}>
      {children}
    </UserContext.Provider>
  );
};
