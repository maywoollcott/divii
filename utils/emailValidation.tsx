export const validateEmail = (email: string) => {
  const validFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  if (email.match(validFormat)) {
    return true;
  } else {
    return false;
  }
};
