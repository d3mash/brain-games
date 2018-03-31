import game from '..';

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };
  const generateQuestion = () => {
    const a = Math.floor(Math.random() * 99) + 1;
    const b = Math.floor(Math.random() * 99) + 1;
    const expr = `${a} ${b}`;
    const getAnswer = (expression) => {
      const ae = Number(expression[0] + expression[1]);
      const be = Number(expression[expression.length - 2] + expression[expression.length - 1]);
      return gcd(ae, be);
    };
    return [expr, getAnswer(expr)];
  };
  return game(generateQuestion, description);
};
