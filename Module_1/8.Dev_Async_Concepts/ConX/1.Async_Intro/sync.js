const fs = require("fs");


console.log("start");

let f1KaContent = fs.readFileSync("../Files/f1.txt"); // 100gb file
console.log(f1KaContent+"");

console.log("end");