import game from '..';

export default () => {
  const description = 'Is given number prime? Answer yes or no';
  const getQuestion = () => {
    const number = Math.floor(Math.random() * 49) + 1;
    const isPrime = (num) => {
      for (let counter = 2; counter <= Math.floor(Math.sqrt(num + 1)); counter += 1) {
        if (num % counter === 0) {
          return false;
        }
      }
      return true;
    };
    const answer = isPrime(number) ? 'yes' : 'no';
    return [number, answer];
  };
  return game(getQuestion, description);
};
