var v = 12;
let l = 2;
const c = 3.878;


var browser = "chrome";
var browser = "firefox"; // reassigning var variable
browser = "edge"; // redeclaring var variable
console.log(browser); // Output: "edge"

var testcase = ["login", "signup", "checkout"];
//var testcase = ["profile", "settings"]; // redeclaring var variable with a new array
console.log(testcase); // Output: ["profile", "settings"]

for (var i = 0; i < testcase.length; i++) {
    console.log(testcase[i]);
}

console.log(i);