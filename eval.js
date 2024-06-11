const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const maxNumber = arr => Math.max(...arr);