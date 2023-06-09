/**
 * ES6 added 2 new global number methods:
 * 
 * isFinite() //returns false if the arguments is Infinity or NaN
 * isNaN()// returns true if the argument is NaN otherwise false
 */

//isFinite()
console.log(isFinite(11/0));
console.log(isFinite(11/2));

console.log("***************************************")
//isNan()

let f = isNaN("Hi");
console.log(f);
console.log(isNaN("Hi"));

let b = new Boolean(false);
b=isNaN("Hello");
console.log(b);

console.log(isNaN(10));