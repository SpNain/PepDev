const fs = require("fs");

let f1KaPromise = fs.promises.readFile("./f1.txt");  //f1KaPromise bnega with initial state pending

f1KaPromise.then(function(f1KaData){ // f1KaPromise pe then ne scb1 attach kar diya jo state change hote hi chlega
    console.log(f1KaData+"");
    let f2KaPromise = fs.promises.readFile("./f2.txt");//f2KaPromise bnega with initial state pending
    return f2KaPromise; // [#1] 
})
 .then(function (f2KaData) {
    console.log(f2KaData+"");
    let f3KaPromise = fs.promises.readFile("./f3.txt");//f3KaPromise bnega with initial state pending
    return f3KaPromise;
})
.then(function(f3KaData){
    console.log(f3KaData+"");
})


/*
#1.
ye returned value scb1 ki jagah chali jaayegi aur kyonki next then ka promise iss scb1 ko point kar rha tha 
ab wo f2KaPromise ko point karne lag jaayega.To indirectly next ka scb yani scb2 current wale scb yani scb1 pe dependent ho gya
aur jaise hi f2KaPromise ki state change hogi wo apni state next thenKePromise ko transfer kar dega 
aur wo thenKePromise ko state change hoke data aaya ki nhi usi hisab se scb/fcb ko call lga dega   
*/


// Output
// hey i am f1
// hey i am f2
// hey i am f3