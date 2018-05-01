import { number, string, boolean, array, object, func, undef, nll } from './symbols';

const _types = [number, string, boolean, array, object, func, undef, nll];

export const mappedTypesToSymbols = {
  'number': number,
  'string': string,
  'boolean': boolean,
  'array': array,
  'object': object,
  'function': func,
  'undefined': undef,
};

export default { number, string, boolean, array, object, func, undef, nll };

export const isType = (value) =>
  Array.isArray(value)
    ? value.some((item) => _types.includes(item))
    : _types.includes(value);

export const inferType = (value) => (isType(value))
  ? value
  : mappedTypesToSymbols[
    Array.isArray(value) ? 'array' : typeof value
  ];