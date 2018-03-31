import game from '..';

export default () => {
  const description = 'What is the result of the expression?';
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
    const question = `${a} ${sign(gen)} ${b}`;
    const getAnswer = (expression) => {
      const ae = Number(expression[0] + expression[1]);
      const be = Number(expression[expression.length - 2] + expression[expression.length - 1]);
      if (expression.indexOf('+') !== -1) {
        return ae + be;
      } else if (expression.indexOf('-') !== -1) {
        return ae - be;
      }
      return ae * be;
    };
    return [question, getAnswer(question)];
  };
  return game(generateQuestion, description);
};
