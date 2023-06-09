let myPromise = new Promise(function(myResolve,myReject){
     let x =0;
     
     if(x==1){
        myResolve("OK");
     }else{
        myReject("Error");
     }
}
);

function myDisplayer(some){
    console.log(some+" "+"I am my displayer");
}
//then function takes two arguments one callback for success and another for failure
myPromise.then(function(value){myDisplayer(value);},function(error){myDisplayer(error);}
);