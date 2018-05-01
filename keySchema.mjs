import { LET_BE_FREE, NOT_NULLABLE } from './symbols.mjs';

import { isType, inferType, mappedTypesToSymbols } from './types';

export class KeySchema {
  constructor(value, constraints = []) {
    const _isType = isType(value);
    this.type = _isType ? value : inferType(value);
    this._constraints = Array.isArray(constraints) ? constraints : [constraints];
    this._value = _isType ? undefined : value;
  }

  get constraints() {
    return this._constraints;
  }

  set constraints(constraints = []) {
    if (Array.isArray(constraints)) {
      this._constraints.concat(constraints);
    } else {
      this._constraints.push(constraints);
    }
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._validate(value);
    this._value = value;
  }

  _validate(value){
    // dont validate if LET BE FREE CONSTRAINT
    if (this.constraints.includes(LET_BE_FREE)) return;

    if ((value === undefined || value === null) && !(this.constraints.includes(NOT_NULLABLE))) return;

    // throw err if types are differents
    if (mappedTypesToSymbols[typeof value] !== this.type) {
      throw new Error('DIFFERENT TYPES')
    }
  }
}

const createOrUpdateKeySchema = (value, constraints) => {
  if (value instanceof KeySchema) {
    value.constraints = constraints;
    return value;
  } else {
    return new KeySchema(value, constraints);
  }
}

export const letBeFree = (value) => createOrUpdateKeySchema(value, LET_BE_FREE);

export const notNullable = (value) => createOrUpdateKeySchema(value, NOT_NULLABLE);

export const oneOf = (value) => createOrUpdateKeySchema(value);