export const number = Symbol('number');
export const string = Symbol('string');
export const boolean = Symbol('boolean');
export const array = Symbol('array');
export const object = Symbol('object');
export const func = Symbol('func');
export const undef = Symbol('undefined');
export const nll = Symbol('null');

export const LET_BE_FREE = Symbol('LET_BE_FREE');
export const NOT_NULLABLE = Symbol('NOT_NULLABLE');

const allSymbols = [
  number,
  string,
  boolean,
  array,
  object,
  func,
  undef,
  nll,
  LET_BE_FREE,
  NOT_NULLABLE,
];


export const stripSymbols = (obj) => {
  console.log(obj);
  const objectSymbols = Object.getOwnPropertySymbols(obj);

  console.log(objectSymbols);

  objectSymbols.forEach((symbol) => {
    console.log(symbol, 'symbol');
    if (allSymbols.includes(symbol)) {
      console.log('dasdasdadad');
      delete obj[symbol];
    }
  });
};

export const hasSymbols = (value) => {
  if (value === null || typeof value !== 'object') return false;

  const valueSymbols = Object.getOwnPropertySymbols(value);
  return valueSymbols.some((symbol) => allSymbols.includes(symbol));
};