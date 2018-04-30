import { LET_BE_FREE, NOT_NULLABLE } from './symbols.mjs';
import { getTypeFromValue } from './types.mjs';
import { getModifiers } from './modifiers.mjs';

const getInitialSchema = () => ({});

export const updateSchema = (obj, schema, key) => {
  if (!(key in schema)) {
    schema[key] = getSchemaFromValue(obj[key]);
  }

  return schema
};

export const createSchema = (obj) => Object
  .keys(obj)
  .reduce(
    updateSchema.bind(null, obj),
    getInitialSchema()
  );

const getSchemaFromValue = (value) => ({
  type: getTypeFromValue(value),
  modifiers: getModifiers(value),
});

export const isValid = (schema, value, key) => {
  if (schema.modifiers.includes(LET_BE_FREE)) {
    return true;
  }

  if (getTypeFromValue(value) === schema.type) {
    return true;
  }

  if (value === null || value === undefined) {
    if (schema.modifiers.includes(NOT_NULLABLE)) {
      return false
    }

    return true
  }

  return false
}

// Schema:
/*
  a: {
    type: [Array, String],
    nullable: true,
    initializeValue: true
  }
*/