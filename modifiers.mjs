import * as symbols from './symbols.mjs';

export const letBeFree = (value) => addModifier(value, symbols.LET_BE_FREE)

export const notNullable = (value) => addModifier(value, symbols.NOT_NULLABLE)

const addModifier = (value, modifier) => ({
  ...(
    (symbols.hasSymbols(value))
      ? { ...value, value: value.value }
      : { value }
  ),
  [modifier]: true,
})

export const getModifiers = (value) => symbols.hasSymbols(value)
  ? Object.getOwnPropertySymbols(value)
  : [];