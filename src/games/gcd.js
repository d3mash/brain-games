import flow from '../flow';

const game = () => {
  const gameCondition = 'Find the greatest common divisor of given numbers.';
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };
  const generateQuestion = () => {
    const a = Math.floor(Math.random() * 99) + 1;
    const b = Math.floor(Math.random() * 99) + 1;
    return `${a} ${b}`;
  };
  const getAnswer = (expression) => {
    const a = Number(expression[0] + expression[1]);
    const b = Number(expression[expression.length - 2] + expression[expression.length - 1]);
    return gcd(a, b);
  };
  return flow(gameCondition, generateQuestion, getAnswer);
};

export default game;
