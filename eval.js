const scriptRootPath = path.join(repositoryRootPath, 'script');
const isWeekday = (date) => date.getDay() % 6 !== 0;
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const appName = getAppName(channel);
const isEmptyArray = arr => !arr.length;
const isArray = (arr) => Array.isArray(arr);