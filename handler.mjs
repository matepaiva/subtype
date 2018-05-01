import * as traps from './traps';

export default function createHandler (schema) {
  const initialHandler = {};
  
  return Object
    .keys(traps)
    .reduce((handler, key) => (
      {
        ...handler,
        [key]: traps[key].bind(null, schema)
      }
    ), initialHandler);
};