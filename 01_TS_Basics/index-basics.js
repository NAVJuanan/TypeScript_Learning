/*********************
 * TypeScript basics *
 *********************/
// show message in console
console.log("Hello TypeScript World from .ts file");
// boolean
var isActive = true;
console.log("The value of the variable 'isActive' of type " + typeof isActive + " is: " + isActive);
// number
var qty = 12;
var exp = 2.43e-5;
var hex = 0xf00d;
var binary = 5;
var octal = 484;
console.log("The value of the variable 'qty' of type " + typeof qty + " is: " + qty);
console.log("The value of the variable 'exp' of type " + typeof exp + " is: " + exp);
console.log("The value of the variable 'hex' of type " + typeof hex + " is: " + hex);
console.log("The value of the variable 'binary' of type " + typeof binary + " is: " + binary);
console.log("The value of the variable 'octal' of type " + typeof octal + " is: " + octal);
var numberPi = 3.14;
console.log("The value of the variable 'numberPi' of type " + typeof numberPi + " is: " + numberPi);
// string
var message;
message = "Hi, this is a message";
console.log("The value of the variable 'message' of type " + typeof message + " is: '" + message + "'");
// function 
console.log("The type of the function 'printName()' is: " + typeof printName);
function printName(name) {
    console.log(name);
}
// dialog window and read input
var myVar = prompt("What is your name?");
console.info("info: My name is " + myVar);
console.warn("warning: My name is " + myVar);
console.error("error: My name is " + myVar);
// confirm box and alert
var isCorrect = confirm("Is " + myVar + " your name?");
if (isCorrect) {
    alert("Confirmed, " + myVar + " is your name");
}
else {
    alert("Confirmed, " + myVar + " is NOT your name");
}
