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
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

const defaultValue: AppContextValue = {
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  currentUser: null,
  setCurrentUser: () => {},
  isLoading: false,
  setIsLoading: () => {},
};
export const Context = createContext(defaultValue);

export const Provider = (props: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Context.Provider
      value={{
        isAuthenticated: isAuthenticated,
        setIsAuthenticated: setIsAuthenticated,
        currentUser: currentUser,
        setCurrentUser: setCurrentUser,
        isLoading: isLoading,
        setIsLoading: setIsLoading,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
