//here variable a is used multiple times but it is not giving any error because of var hoisting in JavaScript.
var a = 10;//global variable or scope

console.log(a);

function cakes() {
    console.log("I like cakes");
    var a = 20;//local variable or scope
    console.log(a);
    var a = 30;
    console.log(a);
    function icecream() {
        console.log("I like icecream");
        var a = 40;
        console.log(a);
    }
    icecream();

}
cakes();

console.log(a);
