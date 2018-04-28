import subtype, { types } from '../subtype';

console.log(subtype);
console.log(types);
// import subtype, { notNullable, types, letBeFree, oneOf } from '../subtype';

// const obj = {
//     // will initialize with key a1 having value 1. It will alolow only numbers and nullable values.
//     a1: 1,
//     // will not initialize object with this key, but if key exists it will allow only numbers and nullable values (null or undefined)
//     a2: types.Number,
//     // will initialize object with this key and its value will be 0. It will allow only numbers
//     a3: notNullable(types.Number),
//     // will initialize object with this key and its value will be 0. It will allow only numbers
//     a4: notNullable(1),
//     // only accept values (or nothing) and that key will not be controlled
//     a5: letBeFree(1),
//     // throw error
//     a6: notNullable(),
//     a7: oneOf(types.String, types.Array),
//     a8: oneOf('value', types.Array),
//     a9: notNullable(oneOf('value', types.Array)),

//     // will initialize object with key b1 having value 'hello'
//     b1: 'hello',
//     b2: types.String,
//     c: notNullable(types.Bool),


//     d: notNullable('value'),
//     e: oneOf(types.String, types.Array),
//     f: oneOf('fValue', types.Array),
//     g: NotNullable(oneOf(types.String, types.Array)('fValue')),
//     h: letBeFree('I can change my type'),
// }