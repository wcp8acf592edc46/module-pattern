const updated = numbers.filter(element => element > 6);
var regexp  = new RegExp('{{([^}]+)}}', 'g');
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));