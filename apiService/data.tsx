import axios from 'axios';

const BASE_URL = `http://192.168.1.148:3002`;

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
