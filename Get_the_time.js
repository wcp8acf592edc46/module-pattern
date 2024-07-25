const currentDate = () => new Date().toLocaleDateString('en-US');
const isEmptyArray = arr => !arr.length;
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");