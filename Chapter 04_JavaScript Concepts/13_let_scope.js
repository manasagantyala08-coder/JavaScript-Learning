let a = 10;//global scope
console.log(a); // Output: 10

function name() {
    let a = 20;//local scope
    console.log(a); // Output: 20
    if (true) {
        let a = 30;//block scope
        console.log(a); // Output: 30
    }
    console.log(a); // Output: 20
}

console.log(a); // Output: 10
name();
console.log(a); // Output: 10
//Here we can see that the value of a inside the function is different from the value of a outside the function because let has block scope.
//And the value of a inside the if block is different from the value of a inside the function because let has block scope.  

