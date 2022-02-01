const defaults = {
  symbol: '$',
  separator: ',',
  decimal: '.',
  formatWithSymbol: false,
  errorOnInvalid: false,
  precision: 2,
  pattern: '!#',
  negativePattern: '-!#'
};

const round = (v:number) => Math.round(v);
const pow = (p:number) => Math.pow(10, p);
const rounding = (value:number, increment:number) => round(value / increment) * increment;
const groupRegex = /(\d)(?=(\d{3})+\b)/g;
const vedicRegex = /(\d)(?=(\d\d)+\d\b)/g;

