const fs = require("fs");

let f1KaPromise = fs.promises.readFile("./f1.txt");  //f1KaPromise bnega with initial state pending

let thenKaPromise = f1KaPromise.then(function(data){
    console.log(data+"");
    console.log(f1KaPromise);
    return 5;  // agr hum koi value return nhi karte to thenKaPromise ki state undefined hogi lekin agr hum koi value return karte hai to uski state me wo value/data aa jaayega
})
thenKaPromise.then(function(returnValueOfScb1){ //jo value pichle wale ke promise se mili hai wo hume scb2 me get hogi
    console.log(returnValueOfScb1);
    console.log(thenKaPromise);
    console.log("i ran after first scb !!");
})



// Output :
// hey i am f1
// Promise { <Buffer 68 65 79 20 69 20 61 6d 20 66 31> }
// 5
// Promise { 5 }
// i ran after first scb !!