let score = 256;

if (true) {
    //TDZ of score starts here
    //console.log(score); // ReferenceError: Cannot access 'score' before initialization
    let score = 250;
    console.log(score);
}
console.log(score);