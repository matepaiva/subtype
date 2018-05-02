# subtype

**Subtype** is a JavaScript package to control variable type inside a tiny context (in this case, right now, an object). 
This avoids the overkill that is to use type transpilers in cases you just need to be sure of variable type 
in a really small part of your project.

## motivation
**Subtype**'s main motivation is to get a type checking ready to go package, without the need to mess with webpack
configurations. Just import the package and call it, wrapping the object that you want to control the types.

## how does it work
**subtype**, when instantiated, creates a schema from your object and returns the object-to-be-controlled wrapped by a 
Proxy. Whenever a value changed inside of the proxied object, the validation compares the value with the schema. 
Even if you, after instantiation, add new key to the object, it will create a schema for that key and validated it.
If you pass a value with a different type from what is expected from the key schema, it will throw an error.

## usage

Very basic usage:
```javascript
import subtype from 'subtype';

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
```
