const fs = require("fs");

let f1KaPromise = fs.promises.readFile("./f1.txt");


f1KaPromise.then(function (data) {
    console.log(data + "");
})
    .then(function (returnValueOfScb1) {
        console.log(returnValueOfScb1);
        console.log("I ran after first scb !!");
})


// Output :
// hey i am f1
// undefined  -- because humne thenKaPromise1 se data pass nhi kra using return keyword
// I ran after first scb !!