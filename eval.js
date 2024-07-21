const fullName = name || 'buddy';
const result = await makeHttpRequest(url);
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};