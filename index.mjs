import * as types from './types'
import subtype from './subtype'

export default subtype;

export {
    types,
    // notNullable,
    // letBeFree,
    // oneOf
};


// const _initialSchema = {};

// const set = (target, key, value, receiver) => {
//     if ((target[key] === undefined) || (this._schema[key] === typeof value)) {
//         Reflect.set(target, key, value, receiver);
//         this._schema = _updatedSchema(receiver, this._schema, key)
//     } else {
//         throw new Error(`Type of value \`${value}\` is ${typeof value}, but the key \`${key}\` can only store value typed as ${this._schema[key]}.`)
//     }
// }

// const _createHandler = (obj) => {
//     this._schema = _createSchema(obj);

//     return {
//         'set': set.bind(this),
//     }
// };

// const _createSchema = (obj) => Object
//     .keys(obj)
//     .reduce(
//         _updatedSchema.bind(null, obj),
//         _initialSchema
//     );

// const _updatedSchema = (obj, schema, key) => ({
//     [key]: typeof obj[key],
//     ...schema
// });

// const nullable = (type) => `${type}_NULLABLE`

// const subType = (obj) => new Proxy(obj, _createHandler(obj));

// const example = subType({ a: 1 });

// example.b = 2;
// example.c = true;
// example.d = 'true';
// example.c = false;
// example.c = null;
// console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');