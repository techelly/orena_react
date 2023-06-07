/**
 * JS Maps
 * 
 * A Map holds key-value pairs where the keys can be any datatype.
 * A Map remembers the original insertion order of the keys.
 * A Map has a property that represents the size of the map.
 * 
 * new Map() -- creates a new Map object
 * set() -- sets the value for a key in Map
 * get() -- Gets the value for a key in Map
 */

//Create a Map
//Passing an Array to new Map()
const books = new Map([
    ["Let us C","Yeshwant Kanetkar"],
    ["Fundamentals of Java Programming","E Balaguruswamy"],
    ["DS using Java","Robert Lafore"]]
);
console.log(books);
console.log(books.get("Let us C"));

//Create a Map and use Map.set()

const boks = new Map();
boks.set("Let us C","Yeshwant Kanetkar");
boks.set("Fundamentals of Java Programming","E Balaguruswamy");
console.log(boks.get("Fundamentals of Java Programming"));

//size
console.log(books.size);
console.log(boks.size);

//delete -- method removes a Map element
books.delete('Fundamentals of Java Programming');
console.log(books.size);
console.log(books);
//clear -- method removes all the elements from a Map
//books.clear();
//console.log(books.size);
//console.log(books);
//has -- method returns true if a key exists in a Map
console.log(books.has('Fundamentals of Java Programming'));

//Maps are object
//typeof returns object

console.log(typeof books);
console.log(books instanceof Map);

console.log(books);
//Map.forEach() -- method invokes a callback for each key/value pair in a Map
books.forEach((x,y)=>console.log(x+" "+y));
//Map.entries   method returns an iterator object with the [key,values] in a Map
let z="";
for(const y of books.entries()){
    z+=y+" ";
}
console.log(z);
console.log("****************************************")
//Map.keys
for(let m of books.keys()){
console.log(m)
}
//Map.values
for(let m of books.values()){
    console.log(m)
}

console.log("*************Objects as keys***************************")
//Create objects
const  iPhone = {brand: 'Apple'};
const  galaxy = {brand: 'Samsung'};
const  redmi = {brand: 'MI'};

//create a map
const phones = new Map();
//Add new elements to the Map
phones.set(iPhone,100000);
console.log("************"+phones.size);
phones.set(galaxy,200000);
phones.set(redmi,10000);
console.log("******Size******"+phones.size);
//In above lines key is an object like iPhone,galaxy,redmi

console.log(phones.get("redmi"));
console.log(phones.get(redmi));