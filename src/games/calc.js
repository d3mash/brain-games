import readlineSync from 'readline-sync';

const getQuestion = (name, counter) => {
  const a = Math.floor(Math.random() * 100) + 1;
  const b = Math.floor(Math.random() * 100) + 1;
  const gen = Math.floor(Math.random() * 3) + 1;
  let sign = '';
  let correctAnswer = 0;
  switch (gen) {
    case 1: {
      sign += '+';
      correctAnswer += a + b;
      break; }
    case 2: {
      sign += '-';
      correctAnswer += a - b;
      break; }
    default: {
      sign += '*';
      correctAnswer += a * b; }
  }
  const answer = readlineSync.question(`Question: ${a} ${sign} ${b}\nYour answer:`);
  if (String(answer) === String(correctAnswer)) {
    console.log('Correct!');
    if (counter === 2) {
      return `Congratulations, ${name}!`;
    }
    return getQuestion(name, counter + 1);
  }
  return `${answer} is wrong answer :( correct answer is ${correctAnswer}\nLet's try again, ${name}!`;
};
export default getQuestion;
