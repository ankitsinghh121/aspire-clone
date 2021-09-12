export const commaSeparated = number =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
