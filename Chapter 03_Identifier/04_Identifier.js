//Must start with a letter, _, or $
//After the first character, may include letters, digits, _, or $
//Cannot be a reserved keyword
//Case-sensitive
//Cannot start with a digit
// NO spaces allowed in identifiers

var $= 10;
var _name= "name"
var $name= "name2"
var Name= "name3"
var man_sa= 345678;


// Identifier rules in JavaScript with examples:
// 1. Must start with a letter, _, or $
var name = "Alice";
var _name = "Bob";
var $name = "Carol";
// 2. After the first character, may include letters, digits, _, or $
var name123 = 123;
var snake_case = "snake";
var $value1 = 10;
// 3. Cannot be a reserved keyword
//    Invalid example: var let = 5; // reserved keyword
// 4. Cannot contain spaces
//    Invalid example: var first name = "invalid";
// 5. Case-sensitive
var name = "Alice"; 
var Name = "Bob"; // different identifiers
//6. Uncicode letters and unicode escape sequences are allowed
var \u0041 = 1; // same as var A = 1;
var café = 2;

// Valid identifiers:
var name = "Alice";
var _name = "Bob";
var $name = "Carol";
var name123 = 123;
var camelCase = true;
var PascalCase = false;
var snake_case = "snake";
var $value1 = 10;
var _ = "underscore";
var $ = "dollar";

// Invalid identifiers (examples shown as comments):
// var 1name = "invalid";   // starts with a digit
// var first-name = "invalid"; // hyphen not allowed
// var let = 5;             // reserved keyword
// var first name = "invalid"; // spaces not allowed

