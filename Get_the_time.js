console.log("1 && 2 = "+(1 && 2));
const scriptRootPath = path.join(repositoryRootPath, 'script');
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);