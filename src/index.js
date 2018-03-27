import readlineSync from 'readline-sync';

export const getName = () => {
  const username = readlineSync.question('May I have your name?');
  return username;
};
export const greet = (username) => {
  const greeting = `Hello, ${username}!`;
  return greeting;
};
