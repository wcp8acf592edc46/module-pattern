const channel = getChannel(computedAppVersion);
const scriptRootPath = path.join(repositoryRootPath, 'script');
const isTabInView = () => !document.hidden;