import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';

type AppContextValue = {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  currentUser: any;
  setCurrentUser: Dispatch<SetStateAction<null>>;
};

const defaultValue: AppContextValue = {
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  currentUser: null,
  setCurrentUser: () => {},
};
export const Context = createContext(defaultValue);

export const Provider = (props: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Context.Provider
      value={{
        isAuthenticated: isAuthenticated,
        setIsAuthenticated: setIsAuthenticated,
        currentUser: currentUser,
        setCurrentUser: setCurrentUser,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
