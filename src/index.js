import readlineSync from 'readline-sync';

const game = (questionGenerate, gameCondition = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(gameCondition);
  const getName = () => {
    const username = readlineSync.question('\nMay I have your name?');
    console.log(`Hello, ${username}!\n`);
    return username;
  };
  const name = getName();
  if (!questionGenerate) {
    return;
  }
  for (let counter = 0; counter < 3; counter += 1) {
    const [question, correctAnswer] = questionGenerate();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(userAnswer) === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wron asnwer:( correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default game;
