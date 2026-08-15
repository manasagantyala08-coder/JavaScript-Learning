var recount = 10;

var recount = 1;
recount = recount + 1;
recount = recount + 1;
console.log(recount);

var recount = 20;
console.log(recount);
//Here by using var we can reassign the value of variable 
//and also we can redeclare the variable but it is not a good practice
//to use var because it can lead to bugs in our code.
// So, it is recommended to use let or const instead of var.

let a = 10;

if (true) {
    let a = 20;
    console.log(a); // Output: 20
}
console.log(a); // Output: 10
//Here we can see that the value of a inside the if block is different from the value of a outside the if block because let has block scope.
let testcase = "pending";

if (testcase === "pending") {
    let testcase = "completed";
    console.log(testcase); // Output: "completed"
}