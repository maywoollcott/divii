import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const BASE_URL = `https://divii-server.herokuapp.com`;

export const register = async (user: any) => {
  const { data } = await axios.post(`${BASE_URL}/register`, {
    name: user.name,
    password: user.password,
    birthdate: user.birthdate,
    email: user.email,
    sign: user.sign,
    dateJoined: user.dateJoined,
  });

  await SecureStore.setItemAsync('DIVII_TOKEN_AUTH', data.authToken);

  return data;
};

export const login = async (email: string, password: string) => {
  const { data } = await axios.post(`${BASE_URL}/login`, {
    email,
    password,
  });

  await SecureStore.setItemAsync('DIVII_TOKEN_AUTH', data.authToken);

  return data;
};

export const logout = async (key: string) => {
  await SecureStore.deleteItemAsync(key);
};
