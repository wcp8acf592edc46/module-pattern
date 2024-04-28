const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const minNumber = arr => Math.min(...arr);
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());