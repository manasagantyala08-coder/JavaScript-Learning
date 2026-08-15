// undefined: variable declared but not assigned
let a;
console.log(a); // undefined

function foo() {}
console.log(foo()); // undefined (no return)

const obj = {};
console.log(obj.x); // undefined (property doesn't exist)

// null: explicitly assigned "no value"
let b = null;
console.log(b); // null

// null vs undefined comparison
console.log(null == undefined);  // true  (loose equality)
console.log(null === undefined); // false (strict equality)

// typeof
console.log(typeof null);      // "object"
console.log(typeof undefined); // "undefined"
