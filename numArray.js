console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;