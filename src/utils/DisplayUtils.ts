export const numberWithCommas = (x: Number) => {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};

export const tryNumberFromStringWithCommas = (s: string) => {
  const nbr: number = +s;
  if (isNaN(nbr)) return s;
  return numberWithCommas(nbr);
};
