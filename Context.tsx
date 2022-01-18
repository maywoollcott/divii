import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';
import { Reading } from './types';

type AppContextValue = {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  currentUser: any;
  setCurrentUser: Dispatch<SetStateAction<null>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  readings: any;
  setReadings: Dispatch<SetStateAction<any>>;
};

const defaultValue: AppContextValue = {
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  currentUser: null,
  setCurrentUser: () => {},
  isLoading: false,
  setIsLoading: () => {},
  readings: null,
  setReadings: () => {},
};
export const Context = createContext(defaultValue);

export const Provider = (props: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [readings, setReadings] = useState(null);

  return (
    <Context.Provider
      value={{
        isAuthenticated: isAuthenticated,
        setIsAuthenticated: setIsAuthenticated,
        currentUser: currentUser,
        setCurrentUser: setCurrentUser,
        isLoading: isLoading,
        setIsLoading: setIsLoading,
        readings: readings,
        setReadings: setReadings,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
