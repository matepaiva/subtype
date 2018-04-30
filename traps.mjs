import { updateSchema, isValid } from './schema';
import { hasSymbols, NOT_NULLABLE } from './symbols.mjs';
import { getTypeFromValue } from './types';

export const set = (schema, target, key, value, receiver) => {
  try {
    const nextObj = _previewNextState(target, key, value);

    if (!(key in schema)) {
      updateSchema(nextObj, schema, key);
    }

    const _value = _getNormalizedValue(value, schema[key]);

    if (!isValid(schema[key], _value, key)) {
      throw new Error('::SUBTYPE> NOT VALID.');
    }

    return Reflect.set(target, key, _value, receiver);
  } catch (error) {
    throw error;
  }
}

const _previewNextState = (target, key, value) => ({ ...target, [key]: value });

const _getNormalizedValue = (value, schema) => {
  const _value = hasSymbols(value) ? value.value : value;

  console.log('value', _value);

  if (typeof _value === 'symbol') return undefined;
  return _value;
}