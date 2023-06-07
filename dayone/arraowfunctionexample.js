//By writing function we want to re use the division across the program
function division(num1,num2){
    //Body of the function
    return num1/num2; // return statement which optional 
}
let divResult = division(10,5);
console.log(divResult);

//Below function not returning anything
function display(){
    console.log("I am a display function not returning anything");
}
display();
//Arrow Functions -- allows a short syntax for writing function expressions
//Create arrow function
const x = (x,y)=> x*y;

let m = (m,n)=>m+n;

let p = (p,q)=>{return p-q};
console.log("****************Calling arrow function x**********************")
let mulResult = x(5,5);
console.log(mulResult);
console.log("*************Calling arrow function m*************************")
let addResult = m(10,2);
console.log(addResult);
console.log("************Calling arrow function p**************************")
let subResult=p(4,3);
console.log(subResult)

let l =()=>{return 2*2};
console.log(l());

