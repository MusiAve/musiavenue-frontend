export const GetDateTime = (date) => {
  if (!date) {
    return '';
  }
  const utcDate = new Date(date);
  return `${utcDate.toISOString().slice(0, 10)} ${utcDate.toLocaleTimeString()}`;
};

export const GetDate = (date) => {
  if (!date) {
    return '';
  }
  const utcDate = new Date(date);
  return utcDate.toISOString().slice(0, 10);
};

export const GetImage = (img) => {
  if (!img) {
    return '';
  }
  return img;
};
