const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const timeFromDate = date => date.toTimeString().slice(0, 8);
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
var arr1 = "john".split('');
const uniqueArray = arr => [...new Set(arr)];
const average = arr => arr.reduce((a, b) => a + b) / arr.length;