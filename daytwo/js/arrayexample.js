/**
 * Array.from()
 * Array keys()
 * Array find()
 * Array findIndex()
 */
//Array.from() returns an Array object from any object with a length property or any iterable object

let arr = Array.from("ABCDEFGH");//Creating an array from a string
console.log(arr)

//Array.keys() returns an Array iterator object with the keys of an array

const fruits =["Kiwi","Strawberry","Orange","Guava"];
//create an array iterator object containing the keys of the array
const keys = fruits.keys();

for(let x of keys){
    console.log(x + " ");
}

//Array.find() returns the value of the first array element that passes a test function

const numbers = [4,9,16,25,29,9];

let first = numbers.find(x=>x>18);
console.log(first);

//Array.findIndex() returns index of the first array element that passes a test function
let f = numbers.findIndex(x=>x>18);
console.log(f);