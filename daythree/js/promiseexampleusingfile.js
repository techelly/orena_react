const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
//let XMLHttpRequest = require('xhr2');
//let  = new XMLHttpRequest();

function getFile(myCallback){
    let req = new XMLHttpRequest();
    req.open('GET',"abc.html");
    req.onload = function(){
        if(req.status == 200){
            myCallback(req.responseText);
        }else{
            myCallback("Error: " +req.status);
        }
    }
    req.send();
}

getFile(myDisplayer);

function myDisplayer(some){
    console.log(some+" "+"I am my displayer");
}