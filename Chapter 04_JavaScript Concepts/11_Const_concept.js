let URL = "hhtps.thetsetingacademy.com";
//URL = "https://www.google.com"; // This will throw an error because we cannot reassign a value to a const variable
//const URL = "https://www.google.com"; // This will throw an error because we cannot redeclare a const variable
console.log(URL); // Output: "hhtps.thetsetingacademy.com"

//block
let name = "gantyala";//outside the block

{
    let name = "manasa";
    console.log(name); // Output: "manasa"
    //inside the block
}
console.log(name);
