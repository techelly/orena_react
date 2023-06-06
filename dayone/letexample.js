/**
 * The let keyword was introduced in ES6 (2015).
 * Variables defined with let can not be redeclared.
 * Variables defined with let must be declared before use.
 *  Variables defined with let have block scope.
 */

//Variables defined with let can not be redeclared.
let x = "Bill Gates";
console.log(x);
//let x =5;//Redecalration of variable is Not allowed. 
let num = 0;
console.log(num);
num=15;//Reassigning is allowed
console.log(num);

//With var you can:
var y = "Melinda Gates";

var y = 10;
console.log(y);

//Variables defined with let must be declared before use.
/**
gender="Female";//ReferenceError: Cannot access 'gender' before initialization
let gender;
console.log(gender);
 */
let gender;
gender="Female";
console.log(gender);

/**
 * Block Scope
 * Before ES6 (2015), JavaScript had Global Scope and Function Scope.
 * ES6 introduced two important new JavaScript keywords: let and const.
 * These two keywords provide Block Scope in JavaScript.
 * Variables declared inside a { } block cannot be accessed from outside the block:
 */
{
    let name="Najir";//variable declared using the let keyword has a block scope
    console.log(name);    
    var firstName="Megh"; //variable declared using the var keyword has a global scope
    console.log(firstName);
}
console.log("Outside block variable is accessible --- "+firstName);
//name variable is not accessible outside the block
//console.log(name);//ReferenceError: name is not defined
lastName="Patel";//Assign values to a variable lastName
var lastName; // Decalare a variable lastName using var keyword
console.log(lastName);

let z;
z=5;
console.log(z);
/**
z=6;
let z;
console.log(z);
 */