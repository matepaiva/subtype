import subtype, { types, letBeFree, notNullable } from '../subtype';

const example = {
    a: notNullable(1),
    c: types.string
}

const typedExample = subtype(example)

console.log(typedExample);

typedExample.b = letBeFree(true);
console.log(typedExample);
typedExample.b = 3;
console.log(typedExample);

typedExample.c = 'a'
console.log(typedExample);
typedExample.c = undefined
console.log(typedExample);
