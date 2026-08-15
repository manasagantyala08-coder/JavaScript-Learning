# JavaScript Learning Labs

## Chapter 01 — Basics
First steps in JavaScript — `console.log`, environment info, and basic expressions.

| File | Topic | Example |
|------|-------|---------|
| `Basic.js` | `console.log`, `process.platform`, `NaN` comparison | `console.log("hello");` → prints `hello` / `console.log(NaN==NaN);` → `false` (NaN is never equal to itself) |
| `Basic_1.js` | First JS program | `console.log("hello")` — the simplest JS program |

## Chapter 02 — JavaScript Basics
Understanding the anatomy of a JS statement.

| File | Topic | Example |
|------|-------|---------|
| `Javascript_Basics_03.js` | `var` keyword, identifiers, operators, literals | `var v = 10;` where `var` = keyword, `v` = identifier, `=` = operator, `10` = literal. Also shows `var` can be redeclared: `var v = 30;` |

## Chapter 03 — Identifier
Rules for naming variables and naming conventions used in JavaScript.

| File | Topic | Example |
|------|-------|---------|
| `04_Identifier.js` | Identifier rules | Valid: `$name`, `_name`, `café`, `\u0041`. Invalid: `1name` (starts with digit), `first name` (space), `let` (reserved keyword). Case-sensitive: `name` ≠ `Name` |
| `05_Identifiers_part2.js` | Naming conventions | `camelCase` (`myVariableName`), `PascalCase` (`UserProfile`), `snake_case` (`user_name`), `UPPER_SNAKE_CASE` (`MAX_LIMIT`), Hungarian notation (`strName`, `bActive`) |
| `06_Comments.js` | Single-line & multi-line comments | `// single line` and `/* multi line */` |
| `VS_Code_keyboard_shortcut.md` | VS Code shortcuts | Keyboard shortcuts for efficient editing |

## Chapter 04 — JavaScript Concepts
Variables, scoping, hoisting, functions, and control flow — the core building blocks of JavaScript.

### Variable Declarations
| File | Topic | Example |
|------|-------|---------|
| `07_variable__Concept.js` | `var`, `let`, `const` declarations | `var v = 12; let l = 2; const c = 3.878;` — demonstrates all three declaration keywords |
| `09_var_hoisting.js` | `var` hoisting (global vs local) | `var a = 10;` (global), inside `function cakes()` → `var a = 20;` (local). Shows that `var` is function-scoped — inner `a` doesn't affect outer `a` |
| `10_let.js` | `let` keyword, block scope | `let a = 10;` outside block, `let a = 20;` inside `if(true){}` — they are separate variables. `let` **cannot** be redeclared in the same scope |
| `11_Const_concept.js` | `const` keyword, immutability | `const URL = "https://...";` — cannot be reassigned or redeclared. Block-scoped like `let` |
| `12_var_functionedscope.js` | `var` function scope | Inside a function, `var` is local to that function. Inside a block (`if`), `var` leaks out — `var a = 30` inside `if` changes the function-level `a` |
| `13_let_scope.js` | `let` block scope | Same variable name at global → local → block levels are all independent. `let a = 30` inside `if` does **not** affect `let a = 20` inside the function |

### Functions
| File | Topic | Example |
|------|-------|---------|
| `08_Function.js` | Function declaration & calling | `function greet() { ... }` then `greet();` — declares and invokes a function |

### Hoisting
| File | Topic | Example |
|------|-------|---------|
| `14_hoisting_var.js` | `var` hoisting | `console.log(first); var first = "manasa";` — prints `undefined` (declaration hoisted, not assignment). Shows the difference between `var` (hoisted as `undefined`) and `let` (ReferenceError in TDZ) |
| `15_hoisting_function.js` | Function hoisting | `status();` called **before** `function status() { ... }` — works because function declarations are hoisted entirely |
| `16_hoisting_let.js` | `let` hoisting (TDZ) | Accessing `let name` before its declaration line throws `ReferenceError` — it is hoisted but in the **Temporal Dead Zone** until initialized |
| `17_hoisting_block.js` | Block scope TDZ | `let score = 256;` outside block. Inside block, `console.log(score)` before `let score = 250;` throws ReferenceError because the block-scoped `let` creates a TDZ |
| `18_const_hoisting.js` | `const` hoisting (TDZ) | `const x = 10;` behaves like `let` — hoisted but in TDZ until the declaration line is reached |
| `19_qa_api_hpisting.js` | API keys with `const` | `const API_WEB_NAME = "My API";` — best practice for constants/configuration values |

### Control Flow
| File | Topic | Example |
|------|-------|---------|
| `if.js` | `if-else` condition | `if (num % 2 === 0) { ... } else { ... }` — checks if a number is even or odd |
| `another.js` | `if-else-if` ladder | Grading system — `if (marks >= 90) → A`, `else if (marks >= 80) → B`, etc. |

## Chapter 05 — Literals & Values
Different kinds of values you can write directly in JavaScript code.

| File | Topic | Example |
|------|-------|---------|
| `20_Literal.js` | String, number, boolean, null, undefined literals | `"Manasa"` (string), `25` (number), `true` (boolean), `null`, `undefined` |
| `21_null_undefined.js` | `null` vs `undefined` basics | `let username;` → `undefined` (declared but not assigned). `let x = null;` → `null` (explicitly set to "no value"). `typeof null` returns `"object"` |
| `22_null_vs_undef.js` | `null` vs `undefined` comparison | `null == undefined` → `true` (loose equality). `null === undefined` → `false` (strict equality) |
| `23_null.js` | `null` assignment and `typeof` | `let no_of_car = null;` + `let no_of_bike;` — logs both, then `typeof` each |
| `24_Literal_Number_all.js` | All number types | **Decimal** `42`, **Binary** `0b1010`, **Octal** `0o52`, **Hex** `0x2A`, **Float** `3.14`, **Scientific** `1.5e3`, **Infinity**, **NaN**, **BigInt** `9007199254740991n` |


