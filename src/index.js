import readlineSync from 'readline-sync';

export const getName = () => readlineSync.question('May I have your name?');
export const greet = username => `Hello, ${username}!\n`;

const generateNumber = () => Math.floor(Math.random() * 100) + 1;
export const getQuestion = (name) => {
  for (let counter = 0; counter < 3; counter + 1) {
    const number = generateNumber();
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    const answer = readlineSync.question(`Question: ${number}\nYour answer:`);
    if (answer !== correctAnswer) {
      return `${answer} is wrong answer :( correct answer is ${correctAnswer}\nLet's try again, ${name}!`;
    }
    console.log('Correct!\n');
  }
  return `Congratulations, ${name}`;
};
