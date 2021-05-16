export const pickRandomly = (options) => {
  const random = Math.floor(Math.random() * options.length);
  return options[random];
};
