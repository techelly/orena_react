/**
 * The const keyword allows you to declare a constant 
 * (a JavaScript variable with a constant value).
 * Constants are similar to let variables, except that the value cannot be changed.
 */
const pi =3.14;
//Value cannot be changed for a const variable
//pi=11;//TypeError: Assignment to constant variable.
console.log(pi);


//Variables defined with const must be declared before use.
//g=9.8;//Error : SyntaxError: Missing initializer in const declaration
const g=9.8;
//g=9.8;
console.log(g);

//Variables defined with const can not be redeclared.
const x = 5;
//SyntaxError: Identifier 'x' has already been declared
//const x=6;

//Variables defined with let have block scope.
{
    const y = 15;
    console.log(y);
}
//console.log("Not accessible outside the block--- "+y);//ReferenceError: y is not defined

const p = 2;
function multiplyByTwo(){
    //p=15;//We are trying modify the const p with new value which is not allowed
    const q = 4;//Block scope means accessible within the function only
    console.log("Value of q ---"+q);
    return p*2*q;
}
//console.log("Value of q outside the function multiplyByTwo ---"+q);
console.log(multiplyByTwo());

const qtr1 =["Jan","Feb","Mar"]; //Array 1
const qtr2 =["Apr","May","Jun"]; //Array 2
const qtr3 =["Jul","Aug","Sept"]; //Array 3
const qtr4 =["Oct","Nov","Dec"]; //Array 4
/**
 * The Spread(...) operator
 * ... operator is used to expand iterable like an array into more elements
 * Destructing of an array using ... operator or Spread operator
 */
const year = [...qtr1, ...qtr2, ...qtr3,...qtr4];
console.log(year);

//Another example of ... operator
const numbers = [17,20,23,11,16];
let maxValue = Math.max(...numbers);
console.log(maxValue)