console.log(1 +  "2" + "2");
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);