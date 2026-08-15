let username;//undefined global variable
console.log(username);

function kuch_bi() {

    let username;//null local variable
    console.log(username);
}

kuch_bi();


let x = null;
console.log(x);
console.log(typeof x); //object