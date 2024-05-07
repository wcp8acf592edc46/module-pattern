const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;