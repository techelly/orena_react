//Create an Array iterator and then iterate over the key/value pairs

const names=["Raj","Raju","Rajni","Rajesh","Rajkumar"];
//entries method returns an Array iterator object with key/value pairs
const n = names.entries();
console.log(n);
console.log("*******************************");
for(let x of n){
    console.log(x);
}

console.log("*******************************");
for(let y of names){
    console.log(y)
}