// parallely read contents of f1 f2 and f3 using promisified function
const fs = require("fs");

let f1KaPromise = fs.promises.readFile("./f1.txt");//FOCL:1. isse ek f1KaPromise bnega jiski state initially pending hogi
f1KaPromise.then(function(data){ // FOCL:4 ->1 2 3 inke chalne ke baad kisi bhi then ka scb chal skta hai. Jiske pass data pahle aa jaayega wo pahle execute ho jaayega
    console.log(data+"");
});

let f2KaPromise = fs.promises.readFile("./f2.txt");//FOCL:2. isse ek f2KaPromise bnega jiski state initially pending hogi
f2KaPromise.then(function(data){  //FOCL:4
    console.log(data+"");
});

let f3KaPromise = fs.promises.readFile("./f3.txt");//FOCL:3. isse ek f3KaPromise bnega jiski state initially pending hogi
f3KaPromise.then(function(data){  //FOCL:4
    console.log(data+"");
});