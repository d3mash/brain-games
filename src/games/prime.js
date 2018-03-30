import game from '..';

export default () => {
  const gameCondition = 'Is given number prime? Answer yes or no';
  const getQuestion = () => {
    const number = Math.floor(Math.random() * 49) + 1;
    const isPrime = (num) => {
      for (let counter = 2; counter <= Math.sqrt(num); counter += 1) {
        if (num % counter === 0) {
          return 'no';
        }
      }
      return 'yes';
    };
    return [number, isPrime(number)];
  };
  return game(getQuestion, gameCondition);
};
