import readlineSync from 'readline-sync';

// flow common for all games
const flow = (gameCondition, question, answer) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameCondition);
  const getName = () => {
    const username = readlineSync.question('\nMay I have your name?');
    console.log(`Hello, ${username}!\n`);
    return username;
  };
  const name = getName();
  for (let counter = 0; counter < 3; counter += 1) {
    const expr = question();
    const userAnswer = readlineSync.question(`Question: ${expr}\nYour answer:`);
    const correctAnswer = answer(expr);
    if (String(userAnswer) !== String(correctAnswer)) {
      return `${userAnswer} is wrong answer :( correct answer is ${correctAnswer}\nLet's try again, ${name}!`;
    }
    console.log('Correct!');
  }
  return `Congratulations, ${name}!`;
};
export default flow;
