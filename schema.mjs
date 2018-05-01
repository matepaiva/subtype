import { LET_BE_FREE, NOT_NULLABLE } from './symbols.mjs';
import { KeySchema } from './keySchema.mjs';

const _getEmptyObject = () => ({});
const _mapObjToNewObj = (obj, reducerFn) => Object
  .keys(obj)
  .reduce(
    reducerFn,
    _getEmptyObject()
  )

export const updateSchema = (obj, schema, key) => {
  const value = obj[key];

  if (key in schema) {
    schema[key].value = (value instanceof KeySchema) ? value.value : value;
  } else if (value instanceof KeySchema) {
    schema[key] = value;
  } else {
    schema[key] = new KeySchema(value);
  }

  return schema
};

export const createSchema = (obj) => _mapObjToNewObj(
  obj,
  updateSchema.bind(null, obj),
);

export const getValuesFromSchema = (schema) => _mapObjToNewObj(
  schema,
  (obj, key) => ({
    ...obj,
    [key]: schema[key].value
  })
);
