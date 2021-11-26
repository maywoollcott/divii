export const pickRandomCard = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  console.log(randomNumber);
  return randomNumber;
};
