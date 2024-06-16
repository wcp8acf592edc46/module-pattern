const result = await makeHttpRequest(url);
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const results = await Promise.all(resultingPromises);