export const imagePath = (reqSessionId, mimetype) => {
  const pathToAssetsFolder = pathToAssets();
  const imageType = getFileExtension(mimetype);
  return `${pathToAssetsFolder}/${reqSessionId}${imageType}`;
};

export const pathToAssets = () => {
  const pathArray = __dirname.split('fitness-trainer');
  return `${pathArray[0]}/fitness-trainer/assets`;
};

export const getFileExtension = mimetype => {
  const fileTypeArray = mimetype.split('/');
  return `.${fileTypeArray[fileTypeArray.length - 1]}`;
};
