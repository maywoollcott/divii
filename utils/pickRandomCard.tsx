export const getCardNumbers = (numberCards: number) => {
  let deck = Array.from(Array(78).keys());
  let shuffledDeck = shuffle(deck);
  let returnDeck = [];

  for (let i = 0; i < numberCards; i++) {
    returnDeck.push(shuffledDeck[i]);
  }

  return returnDeck;
};

function shuffle(array: number[]) {
  var i = array.length,
    j = 0,
    temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));

    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}
