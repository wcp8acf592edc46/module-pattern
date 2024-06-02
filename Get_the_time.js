const resultingPromises = urls.map((url) => makHttpRequest(url));
const allResults = await Promise.all(items.map(async (item) => {}));
[foo, bar] = [bar, foo];