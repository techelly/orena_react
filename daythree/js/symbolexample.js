/**
 * The Symbol Type
 * A JS Symbol is a primitive datatype just like Number,String or Boolean
 * It represents a unique hidden identfier  that no other code can accidentally access.
 * 
 * For instanct, if different coders want to add a person.id property
 * to a person object belonging to a 3rd party code , they could mix each 
 * others values.
 * 
 */

//Using Symbol() to create a  unique identifiers.

const person ={
    fName:"Raj",
    lName:"Patel",
    age:23,
    eyeColor:"blue"
};

let id = Symbol("id");
person[id]=111111;

console.log(person.fName);
console.log(person.id);//undefined
console.log(person[id]);