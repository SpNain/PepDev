// npm init -y : for package-lock.json file 
// npm install cheerio to install cheerio

const fs = require("fs");
const cheerio = require("cheerio");  // basically html file ke data ko scrap krne k kaam aata h ye

// html ki file ka data read krke var me save kr liya
let htmlKaData = fs.readFileSync("./index.html" , "utf8"); // we have stringified html file !!!
// console.log(htmlKaData); 

// html file is loaded in cheerio
let myDocument = cheerio.load(htmlKaData);  // loaded data assigned in myDocument
// console.log(myDocument);

// how to target h1 tag in DOM manipulation
document.querySelector("h1");

// how to target h1 tag using cheerio
let h1Element = myDocument("h1");
// console.log(h1Element);

// cheerio hume object ki form me data deta hai means ki h1 ka data to hume mil jaayega lekin wo data object ki form me hoga 

let h1KaData = myDocument("h1").text();  // we stringify the data using .text() | How ? = Check Notion Notes
// console.log(h1KaData);

let PTag = myDocument("p");
let secondPTag = myDocument("p")["1"];  //jab ek se jyada element present hoto hum obj me se jo data chahiye hota hai use index daalkar nikal lete hai 

console.log(secondPTag.text());// ye nhi chalega kyonki cheerio ke fxn sirf direct wale obj pe hi laagu hote hai
console.log(myDocument(secondPTag).text());// isiliye hum us small obj ko bde wale obj me pass kar dete hai jisse ki uspe bhi fxn laagu ho ske