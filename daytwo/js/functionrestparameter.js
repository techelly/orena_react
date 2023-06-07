/**
 * Function Rest Parameter
 * The rest parameter (...) allows a function to treat an indefinite number of arguments
 * as an array.
 */

function sum(...args){
    console.log("Values in args --- "+args);
   
    let result=0;

    for(let arg of args){
        //console.log("Value of arg  "+arg);
        result += arg;
        //console.log("Result ---- "+result);
    }
    return result;
     /**
    let r =0;
    for(let i =0; i<args.length;i++){
        r += args[i];

    }
    console.log(r);
     */
}

let x = sum(2,4,5,6,7,8,10,"F",12,15,16,18,20,"Hi");
console.log(x);
