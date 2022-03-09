import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const BASE_URL = `https://divii-server.herokuapp.com`;

export const register = async (user: any) => {
  try {
    const { data, status } = await axios.post(`${BASE_URL}/register`, {
      name: user.name,
      password: user.password,
      birthdate: user.birthdate,
      email: user.email,
      sign: user.sign,
      dateJoined: user.dateJoined,
      personalCard: user.personalCard,
      personalNumber: user.personalNumber,
      personalCardBack: user.personalCardBack,
    });

    const successResponse = {
      status: status,
      user: data.user,
      token: data.authToken,
    };

    return successResponse;
  } catch (error: any) {
    const { response } = error;

    const errorResponse = {
      status: response.status,
      message: response.data,
    };
    return errorResponse;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const { data, status } = await axios.post(`${BASE_URL}/login`, {
      email,
      password,
    });

    const successResponse = {
      status: status,
      user: data.user,
      token: data.authToken,
    };

    return successResponse;
  } catch (error: any) {
    const { response } = error;

    const errorResponse = {
      status: response.status,
      message: response.data,
    };

    return errorResponse;
  }
};

export const getUserByToken = async (token: string) => {
  try {
    const { data, status } = await axios.post(`${BASE_URL}/getuserbytoken`, {
      token,
    });

    const successResponse = {
      status: status,
      user: data.user,
      token: data.authToken,
    };

    return successResponse;
  } catch (error: any) {
    const { response } = error;

    const errorResponse = {
      status: response.status,
      message: response.data,
    };

    return errorResponse;
  }
};

export const logout = async (key: string) => {
  const result = await SecureStore.deleteItemAsync('DIVII_TOKEN_AUTH');
  return result;
};
