export const getImage = (size, image) => {
  if (image === undefined || image == null || image === "") return '';

  return `https://image.tmdb.org/t/p/${size}${image}`;
};
