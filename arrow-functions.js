/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a,b) {
    return a + b;
}

let sum = addTwoNumbers(3,5);
console.log(sum)

// Arrow Function With Parameters

const addTwoNumbersii = (a,b) => {
    return a + b;
}

let sum2 = addTwoNumbersii(3,5);
console.log(sum2)

// Single Line Arrow Function With Parameters
const addTwoNumbersiii = (a,b) => a + b;

let sum3 = addTwoNumbersiii(3,5);
console.log(sum3)

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello World!')

const sayHello = () => console.log('Hello');
sayHello();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
    This is a multiline string
    </p>`
)

console.log(returnMultipleLines())