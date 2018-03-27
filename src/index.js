import readlineSync from 'readline-sync';

export const getName = () => readlineSync.question('May I have your name?');
export const greet = username => `Hello, ${username}!\n`;

const generateNumber = () => Math.floor(Math.random() * 100) + 1;
export const getQuestion = (name, counter) => {
  const number = generateNumber();
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  const answer = readlineSync.question(`Question: ${number}\nYour answer:`);
  if (answer !== correctAnswer) {
    return `${answer} is wrong answer :( correct answer is ${correctAnswer}\nLet's try again, ${name}!`;
  }
  if (counter === 2) {
    return `Congratulations, ${name}!`;
  }
  console.log('Correct!');
  return getQuestion(name, counter + 1);
};
