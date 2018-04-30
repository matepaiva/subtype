import * as symbols from './symbols';

export const number = symbols.number;
export const string = symbols.string;
export const boolean = symbols.boolean;
export const array = symbols.array;
export const object = symbols.object;
export const func = symbols.func;
export const undef = symbols.undef;
export const nll = symbols.nll;

export const getTypeFromValue = (value) => {
  const _value = symbols.hasSymbols(value) ? value.value : value
  const type = Array.isArray(_value) ? 'array' : typeof _value;
  if (type === 'symbol') {
    return _value;
  } else {
    return {
      'number': symbols.number,
      'string': symbols.string,
      'boolean': symbols.boolean,
      'array': symbols.array,
      'object': symbols.object,
      'function': symbols.func,
      'undefined': symbols.undef,
    }[type]
  }
}