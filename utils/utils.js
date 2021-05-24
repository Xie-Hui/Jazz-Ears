export const pickRandomly = (options) => {
  if (Array.isArray(options)) {
    const random = Math.floor(Math.random() * options.length);
    return options[random];
  } else if (Number.isInteger(options)) {
    // return 1..n randomly
    return Math.floor(Math.random() * options);
  }
};
