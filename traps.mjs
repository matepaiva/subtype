import { updateSchema } from './schema';

export const set = (schema, target, key, value, receiver) => {
  try {

    const obj = { [key]: value };

    updateSchema(obj, schema, key);

    const _value = schema[key].value;

    return Reflect.set(target, key, _value, receiver);
  } catch (error) {
    throw error;
  }
}