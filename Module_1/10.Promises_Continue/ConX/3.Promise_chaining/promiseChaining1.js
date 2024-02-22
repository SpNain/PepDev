const fs = require("fs");

let f1KaPromise = fs.promises.readFile("./f1.txt");


f1KaPromise.then(function (data) {
    console.log(data + "");
})
    .then(function () {
        console.log("I ran after first scb !!");
})


// Output :
// hey i am f1
// I ran after first scb !!



// Note
// agr hum koi value return nhi karte to thenKaPromise ki state undefined hogi
// lekin agr hum koi value return karte hai to uski state me wo value/data aa jaayega