import axios from 'axios';
import { updateUserObject } from '../types';

const BASE_URL = `https://divii-server.herokuapp.com`;
// const BASE_URL = `http://192.168.1.76:3002`;

export const getCardByNumber = async (deckNumber: any) => {
  const { data } = await axios.get(`${BASE_URL}/cardbynumber${deckNumber}`);
  return data.card;
};

export const getAllCards = async () => {
  const { data } = await axios.get(`${BASE_URL}/cards`);
  return data.cards;
};

export const getSpreadByNumber = async (spreadNumber: any) => {
  const { data } = await axios.get(`${BASE_URL}/spreadbynumber${spreadNumber}`);
  return data.spread;
};

export const getAllSpreads = async () => {
  const { data } = await axios.get(`${BASE_URL}/spreads`);
  return data.spreads;
};

export const getReadingsByUser = async (id: string) => {
  const { data } = await axios.get(`${BASE_URL}/readingbyid${id}`);
  return data.readings;
};

export const saveReading = (reading: any) => {
  return axios.post(`${BASE_URL}/reading`, {
    date: reading.date,
    userId: reading.userId,
    spread: reading.spread,
    cards: reading.cards,
    spreadNumber: reading.spreadNumber,
  });
};

export const updateUser = async (email: string, updateObject: updateUserObject) => {
  console.log('updating');
  console.log(email);
  console.log(updateObject);
  try {
    const { data, status } = await axios.post(`${BASE_URL}/updateuser`, {
      email: email,
      updateObject: updateObject,
    });

    console.log(data);
    console.log(status);

    const successResponse = {
      status: status,
      updatedUser: data.updatedUser,
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
