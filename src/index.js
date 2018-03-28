import readlineSync from 'readline-sync';

// flow common for all games
const greet = () => {
  console.log('Welcome to the Brain Games');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  return 'Type brain-even, brain-calc or brain-gcd to try games';
};
export default greet;
