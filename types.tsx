export type Card = {
  name: string;
  suit: string;
  image: string;
  generalDescription: string;
  uprightDescription: string;
  reversedDescription: string;
  id: string;
  uprightKeyTerms: string[];
  reversedKeyTerms: string[];
  arcana: string;
  deckNumber: number;
  number?: number;
};

export type Reading = {
  date: string;
  userId: string;
  spread: string;
  cards: any;
};
