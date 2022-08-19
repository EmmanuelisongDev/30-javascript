// this is your main.js script


let challenge = "30 days of Javascript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(7));
console.log(challenge.substring(0,2));
console.log(challenge.includes(3));


console.log(challenge.split(""));
console.log(challenge.split());

let company = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon ";
console.log(company.split(","))

console.log(challenge.replace('Javascript','Python'));

console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));


let cheat = 'You cannot end a sentence with because because because is a conjunction';

console.log(cheat.indexOf("because"));
console.log(cheat.lastIndexOf("because"));
console.log(cheat.search("because"));


console.log(challenge.trim());

console.log(challenge.startsWith("3"));
console.log(challenge.endsWith("t"));


console.log(challenge.match("a"));
console.log(challenge.concat("y","f","y"));
console.log(challenge.repeat(20));



//Level 2

let gun = 'There is no exercise better for the heart than reaching down and lifting people up.';
console.log(gun);

let ii = "10";
let iii = parseInt(ii);

console.log(iii === 10);

let mathh = Math.random();
let gl = mathh*11;
console.log(gl);

let rg = Math.floor(gl);
console.log(rg);


































let jake ='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';


let salary = jake.match(/\d+/g)[0];
let bonus = jake.match(/\d+/g)[1];
let onlineCourses = jake.match(/\d+/g)[2];

let sL = parseInt(salary);
let bs = parseInt(bonus);
let oC = parseInt(onlineCourses);


let sLM = sL * 12;
let ocM = oC * 12;

let totalAnnual = sLM + bs + ocM;

console.log(totalAnnual)


