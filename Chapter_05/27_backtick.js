// Backticks in JavaScript are used to create template literals.
// Template literals allow us to write strings in a cleaner and more powerful way.

// 1. Basic string writing using backticks
let city = 'Hyderabad';
let country = 'India';

let message = `I live in ${city}, ${country}.`;
console.log(message);

// 2. String interpolation with ${}
let firstName = 'Manasa';
let lastName = 'Gantyala';
let fullName = `${firstName} ${lastName}`;
console.log('Full Name:', fullName);

// 3. We can also write expressions inside backticks
let price = 120;
let quantity = 3;
let total = `Total cost is ${price * quantity} rupees.`;
console.log(total);

// 4. Multi-line strings are easy with backticks
let paragraph = `This is a string
written using backticks.
It can span multiple lines.`;
console.log(paragraph);

// 5. Backticks are useful for HTML/template building
let user = 'Asha';
let greeting = `Hello ${user},
Welcome to JavaScript Learning!`;
console.log(greeting);

// Summary:
// - Backticks are used for template literals.
// - Use ${} to insert variables or expressions.
// - They allow multi-line strings.
// - They make string building easier and readable.
