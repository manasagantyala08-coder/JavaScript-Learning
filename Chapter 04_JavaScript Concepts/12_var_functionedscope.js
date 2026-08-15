var a = 10;//global variable or scope

function fun() {
    var a = 20;//local variable or scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a);
    }
    console.log(a);

}

console.log(a);
fun();
console.log(a);
//Here we can see that the value of a inside the function is different from the value of a outside the function because var has function scope.
//But the value of a inside the if block is same as the value of a inside the function because var does not have block scope.