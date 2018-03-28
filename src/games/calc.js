import flow from '../flow';

const game = () => {
  const gameCondition = 'What is the result of the expression?';
  const generateQuestion = () => {
    const a = Math.floor(Math.random() * 99) + 1;
    const b = Math.floor(Math.random() * 99) + 1;
    const gen = Math.floor(Math.random() * 3) + 1;
    const sign = (ran) => {
      switch (ran) {
        case 1:
          return '+';
        case 2:
          return '-';
        default:
          return '*';
      }
    };
    return `${a} ${sign(gen)} ${b}`;
  };
  const getAnswer = (expression) => {
    const a = Number(expression[0] + expression[1]);
    const b = Number(expression[expression.length - 2] + expression[expression.length - 1]);
    if (expression.indexOf('+') !== -1) {
      return a + b;
    } else if (expression.indexOf('-') !== -1) {
      return a - b;
    }
    return a * b;
  };
  return flow(gameCondition, generateQuestion, getAnswer);
};
export default game;
