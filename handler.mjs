import { createSchema } from './schema';
import * as traps from './traps';
import { stripSymbols } from './symbols';

export default function createHandler (obj) {
  const initialHandler = {};
  const schema = createSchema(obj);

  stripSymbols(obj);

  return Object
    .keys(traps)
    .reduce((handler, key) => (
      {
        ...handler,
        [key]: traps[key].bind(null, schema)
      }
    ), initialHandler);
};