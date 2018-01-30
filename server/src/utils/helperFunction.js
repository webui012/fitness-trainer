export const imagePath = (reqSessionId, mimetype) => {
  const pathArray = __dirname.split('fitness-trainer');
  const pathToAssetsFolder = `${pathArray[0]}/fitness-trainer/assets`;
  const imageTypeArray = mimetype.split('/');
  const imageType = imageTypeArray[imageTypeArray.length - 1];
  return `${pathToAssetsFolder}/${reqSessionId}.${imageType}`;
};
