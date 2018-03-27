import readlineSync from 'readline-sync';

const generateNumber = () => Math.floor(Math.random() * 100) + 1;
const getQuestion = (name, counter) => {
  const number = generateNumber();
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  const answer = readlineSync.question(`Question: ${number}\nYour answer:`);
  if (answer !== correctAnswer) {
    return `${answer} is wrong answer :( correct answer is ${correctAnswer}\nLet's try again, ${name}!`;
  }
  console.log('Correct!');
  if (counter === 2) {
    return `Congratulations, ${name}!`;
  }
  return getQuestion(name, counter + 1);
};
export default getQuestion;
