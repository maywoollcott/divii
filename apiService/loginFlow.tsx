import axios from 'axios';

const BASE_URL = `http://192.168.1.148:3002`;

export const register = (user: any) => {
  return axios.post(`${BASE_URL}/register`, {
    name: user.name,
    password: user.password,
    birthdate: user.birthdate,
    email: user.email,
    sign: user.sign,
    dateJoined: user.dateJoined,
  });
};

export const login = (email: string, password: string) => {
  return axios.post(`${BASE_URL}/login`, {
    email,
    password,
  });
};
