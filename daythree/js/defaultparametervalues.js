//ES6 allows function paramaters to have default

function checkAge(x,y=18){
    if(x == 0){
        return x+y;
    }else{
        return x+y;
    }
}

let x = checkAge(20);
console.log(x)

let y = checkAge(20,15);
console.log(y)