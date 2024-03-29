import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';

type AppContextValue = {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  isSubscribed: boolean;
  setIsSubscribed: Dispatch<SetStateAction<boolean>>;
  currentUser: any;
  setCurrentUser: Dispatch<SetStateAction<null>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  readings: any;
  setReadings: Dispatch<SetStateAction<any>>;
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  modalText: string;
  setModalText: Dispatch<SetStateAction<string>>;
};

const defaultValue: AppContextValue = {
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  isSubscribed: false,
  setIsSubscribed: () => {},
  currentUser: null,
  setCurrentUser: () => {},
  isLoading: false,
  setIsLoading: () => {},
  readings: null,
  setReadings: () => {},
  modalOpen: false,
  setModalOpen: () => {},
  modalText: '',
  setModalText: () => {},
};
export const Context = createContext(defaultValue);

export const Provider = (props: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [readings, setReadings] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');

  return (
    <Context.Provider
      value={{
        isAuthenticated: isAuthenticated,
        setIsAuthenticated: setIsAuthenticated,
        isSubscribed: isSubscribed,
        setIsSubscribed: setIsSubscribed,
        currentUser: currentUser,
        setCurrentUser: setCurrentUser,
        isLoading: isLoading,
        setIsLoading: setIsLoading,
        readings: readings,
        setReadings: setReadings,
        modalOpen: modalOpen,
        setModalOpen: setModalOpen,
        modalText: modalText,
        setModalText: setModalText,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
