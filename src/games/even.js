import game from '..';

export default () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  const generateQuestion = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    const answer = number % 2 === 0 ? 'yes' : 'no';
    return [number, answer];
  };
  game(generateQuestion, description);
};
