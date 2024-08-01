const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const intermediateAppPath = path.join(buildOutputPath, 'app');
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;