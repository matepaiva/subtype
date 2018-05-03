# subtype

**Subtype** is a JavaScript package to control variable type inside a tiny context (in this case, an object). 
This avoids the overkill that is to use transpilers above JavaScript in cases you just need to be sure of variable type 
in a really small part of your project.

## motivation
**Subtype**'s main motivation is to get a ready-to-go package type checking, without the need to mess with webpack
configurations. Just import the package and call it passing the object that you want to control the types.

Also, I hate to do: `Array.isArray(val) && val.every...`.

And, also, I wanted to do something with Proxy :)

## warning!
This is an under development module. It's not tested yet and there are a lot of fix/features to be done yet. At this moment, this is only a proof of concept. Be warned.

## how does it work
**subtype**, when instantiated, creates a schema from your object and returns the object-to-be-controlled wrapped by a 
Proxy. Whenever a value changed inside of the proxied object, the validation compares the value with the schema. 
Even if you, after instantiation, add new property to the object, it will create a schema for that property and validated it.
If the property already exists and you pass a value with a different type from what is expected from that property schema, **subtype** will throw an error.

By default, besides their type, every property will allow null or undefined. This can be change with the `schema modifiers`.

## usage

Very basic usage:
```javascript
import subtype from 'subtype'

const person = {
    name: 'Matheus',
    age: 32,
    isDev: true
}

// This will create a schema with a fixed infered type for every key, based on initial value.
const typedPerson = subtype(person)

// This will throw an error, because type expected is string.
person.name = true

// This works fine :)
person.name = 'Another name'

// This will create the schema for the property on the fly.
person.newProperty = 'A new property'
```

But you also can be more specific. You don't have to initialize your object with values: you can inform just the type of the variable. And you can add schema modifiers to your value:

```javascript
import subtype, { types, letBeFree, notNullable } from 'subtype'

const person = {
    name: notNullable('Matheus'),
    age: types.number,
    isDev: types.boolean
}

// This will create a schema with a fixed type for every key, based on informed type.
const typedPerson = subtype(person)

console.log(typedPerson)
// { name: undefined, age: undefined, isDev: undefined }

// These two will throw an error, because of wrong type
typedPerson.name = 42
typedPerson.number = 'Matheus'

// This will throw an error, because of the schema modifier "notNullable"
typedPerson.name = undefined

// These two will work fine
typedPerson.number = undefined
typedPerson.isDev = true

// This will create a not controlled property. It means its value can any type, any time.
typedPerson.anotherProperty = letBeFree('iiiiihaaaaaaa')

// Everything will work fine
typedPerson.anotherProperty = 42
typedPerson.anotherProperty = undefined
```

## types
- `number`: number; 
- `string`: string;
- `boolean`: boolean;
- `array`: array;
- `object`: object;
- `func`: function;
- `undef`: undefined;
- `nll`: null;

## schema modifiers
- `letBeFree`: property value can have any type, any value;
- `notNullable`: property value cannot be neither null or undefined;

## Next steps
- Add bundler (it's working right now with files `.mjs`)
- Add tests
- Add more validations
- Add proper error messages
- Add feature: schema modifiers `oneOf`, to pass more than one type to create validation schema.
