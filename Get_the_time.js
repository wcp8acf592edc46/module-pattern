const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const fullName = name || 'buddy';
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);