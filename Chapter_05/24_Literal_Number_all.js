// 1. Decimal (base 10)
let decimal = 42;
console.log("Decimal:", decimal);

// 2. Binary (base 2) - prefix 0b
let binary = 0b1010; // 10 in decimal
console.log("Binary (0b1010):", binary);

// 3. Octal (base 8) - prefix 0o
let octal = 0o52; // 42 in decimal
console.log("Octal (0o52):", octal);

// 4. Hexadecimal (base 16) - prefix 0x
let hex = 0x2A; // 42 in decimal
console.log("Hexadecimal (0x2A):", hex);

// 5. Floating-point
let float = 3.14;
console.log("Float:", float);

// 6. Scientific (exponential) notation
let sci = 1.5e3; // 1500
console.log("Scientific (1.5e3):", sci);

let sciSmall = 1e-3; // 0.001
console.log("Scientific (1e-3):", sciSmall);

// 7. Special numeric values
let inf = Infinity;
let negInf = -Infinity;
let notANum = NaN;

console.log("Infinity:", inf);
console.log("-Infinity:", negInf);
console.log("NaN:", notANum);

// 8. BigInt (arbitrary precision, ES2020)
let bigInt = 9007199254740991n;
let bigHex = 0xFFFFFFFFFFFFFFFn;

console.log("BigInt:", bigInt);
console.log("BigInt hex:", bigHex);
console.log("Type of bigInt:", typeof bigInt);

// typeof Number
console.log("Type of decimal:", typeof decimal);
