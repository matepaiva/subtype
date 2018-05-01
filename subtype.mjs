import createHandler from './handler';
import { createSchema, getValuesFromSchema } from './schema';

export default function subtype (obj) {
  const schema = createSchema(obj);
  const valueObject = getValuesFromSchema(schema);

  return new Proxy(valueObject, createHandler(schema));
};

