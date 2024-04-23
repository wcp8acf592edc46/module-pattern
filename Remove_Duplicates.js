const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const buildOutputPath = path.join(repositoryRootPath, 'out');
const getRandomBoolean = () => Math.random() >= 0.5;
const minNumber = arr => Math.min(...arr);
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const intermediateAppPath = path.join(buildOutputPath, 'app');