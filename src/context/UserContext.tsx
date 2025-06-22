
import React, { createContext, useContext } from 'react';

type User = {
  id: int;
  name: string;
  db_id: int
};

const dummyUser: User = {
  id: 12345,
  name: 'Demo User',
  db_id: 12345
};

const UserContext = createContext<User>(dummyUser);

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <UserContext.Provider value={dummyUser}>
      {children}
    </UserContext.Provider>
  );
};
