const getPageRole = (from, rotes) => {
  const currentPath = from.pathname;
  rotes.forEach(({ path: pagePath, role: pageRole }) => {
    if (pagePath === currentPath){
      return pageRole;
    }
  });
  return null;
}

export default getPageRole;
