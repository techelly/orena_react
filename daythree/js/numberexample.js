/**
 * New Number methods 
 * Number.isInteger()
 * Number.isSafeInteger()
 */

console.log(Number.isInteger(11));
console.log(Number.isInteger(11.11));

//Number.isSafeInteger()
/**
 * A safe integer is an integer that can be exactly represented as a double precision number
 * 
 */
console.log("*********************************");
console.log(Number.isSafeInteger(10));

console.log(Number.isSafeInteger(9007199254740992));
console.log(Number.isSafeInteger(9007199254740991));
