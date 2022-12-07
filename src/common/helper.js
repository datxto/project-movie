export const getImage = (size, image) => {
  if (image === undefined || image == null || image === '') return '';

  return `https://image.tmdb.org/t/p/${size}${image}`;
};

export const convertRuntime = (min) => {
  if (min === 0 || !min) return '';

  let h = Math.floor(min / 60);
  let m = min % 60;
  h = h < 10 ? '0' + h + 'h' : h + 'h';
  m = m < 10 ? '0' + m + 'min' : m + 'min';
  if (h === '00h') h = '';
  if (m === '00min') m = '';
  return `${h} ${m}`;
}
