/*********************
 * TypeScript basics *
 *********************/


// show message in console
console.log("Hello TypeScript World from .ts file");


// boolean
var isActive: boolean = true;
console.log(`The value of the variable 'isActive' of type ${typeof isActive} is: ${isActive}`);


// number
let qty: number = 12;
let exp: number = 2.43e-5;
let hex: number = 0xf00d;
let binary: number = 0b00000101;
let octal: number = 0o744;
console.log(`The value of the variable 'qty' of type ${typeof qty} is: ${qty}`);
console.log(`The value of the variable 'exp' of type ${typeof exp} is: ${exp}`);
console.log(`The value of the variable 'hex' of type ${typeof hex} is: ${hex}`);
console.log(`The value of the variable 'binary' of type ${typeof binary} is: ${binary}`);
console.log(`The value of the variable 'octal' of type ${typeof octal} is: ${octal}`);

const numberPi: number = 3.14;
console.log(`The value of the variable 'numberPi' of type ${typeof numberPi} is: ${numberPi}`);


// string
let message: string;
message = "Hi, this is a message";
console.log(`The value of the variable 'message' of type ${typeof message} is: '${message}'`);


// function 
console.log(`The type of the function 'printName()' is: ${typeof printName}`);

function printName(name: string) {
    console.log(name);
}


// dialog window and read input
let myVar: string | null = prompt("What is your name?");
console.info(`info: My name is ${myVar}`);
console.warn(`warning: My name is ${myVar}`);
console.error(`error: My name is ${myVar}`);


// confirm box and alert
let isCorrect: boolean = confirm(`Is ${myVar} your name?`);
if (isCorrect) {
    alert(`Confirmed, ${myVar} is your name`);
} else {
    alert(`Confirmed, ${myVar} is NOT your name`);
}