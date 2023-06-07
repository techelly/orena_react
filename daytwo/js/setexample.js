/**
 * A JS Set is a collection of unique values.
 * Each value can only occur once in a Set
 * A Set can hold any value of any data type
 */

//new Set() -- passing an array to the constructor
const letters = new Set(["d","e","f","d"]);
console.log(letters);

//Create new Set and use add() to add values

const names = new Set();
names.add("Raju");
names.add("Raj");
names.add("Rajesh");
names.add("Ranjit");
names.add("Raj");
console.log(names);

const banana ="banana";
const apple ="apple";
const orange ="orange";

//Create a set
const fruits = new Set();
//Add variables to the Set
fruits.add(banana);
fruits.add(apple);
fruits.add(orange);

console.log(fruits);

//forEach() method
fruits.forEach(f=>console.log(f));
console.log("**************************");
fruits.forEach(
    function(val){
        console.log(val);
    }
);

console.log("**************************");
console.log(fruits.values());//method returns an iterator object containing all the values in a Set
console.log(fruits.keys());
console.log(fruits.entries());//A set has no keys. entries() returns [value,value] pairs instead of [key,value] pairs
console.log("**************************");
const myIterator = fruits.entries();
for(const entry of myIterator){
    console.log(entry);
}

console.log("**************************");
//Sets are objects
console.log(typeof fruits);//Returns object
console.log(fruits instanceof Set);

