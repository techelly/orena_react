/**
 * JS for/of statement loops through the values of an iterable objects
 * 
 * for/of loop lets us loop over data structures that are iterable
 * such as Arrays, Strings, Maps, NodeLists and many more
 */
/**
for/of loop syntax as below:-
for(variable of iterable){
    //block---- code
} 
variable --- For every iteration the value of the next property is assigned to the variable
Variable can be declared with const,let or var

iterable --- An object that has iterable properties
*/

//Array of courses
const courses =["CSC","Mechanical","ECE","ISc"];

let text ="";
for(let course of courses){
    text+=course+" ";
}
console.log(text);

//looping an array of numbers
const numbers =[15,10,11,12,9,2];
let num ="";
for(let number of numbers){
    num+=number+" ";
}

console.log(num);

//looping over a String
let language = "JavaScript";
let str ="";

for(let x of language){
    str+=x+" ";
}
console.log(str);