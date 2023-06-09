/**
 * Promise:
 * A promise is a JS object that links "Producing Code" and "Consuming code"
 * 
 * Producing Code can take some time and 
 * Consuming Code must wait for the result
 */
const myPromise = new Promise(function(myResolve,myReject){
    //Producing code
    setTimeout(() => {
        myResolve("Hi everyone");//when successful
    },3000);
      myReject();//when error
});

//Consuming code(Must wait for a fulfilled Promise)
myPromise.then(
    function(value){console.log("Successful "+value)},
    function(error){console.log("Got Error")}
);