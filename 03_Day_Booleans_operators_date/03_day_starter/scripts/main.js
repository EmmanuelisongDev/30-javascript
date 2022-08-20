// this is your main.js scrip
// Level 1
let firstName = "Kate";
let lastName = "James";
let country = "Nigeria";
let city = "Lagos";
let age = 22;
let isMarried = false;
let year = 2022;



console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));


 let lana = parseInt('9.8');
 let lana2 = 10;


 console.log(lana === lana2);


 console.log(1>2);
 console.log(100>=2);
 console.log(1>2);




console.log( 4 > 3);
console.log(4 >= 3);
console.log( 4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log( 4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');



console.log ('python'.length > 'jargon'.length);


console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
 console.log(!(4 > 3));
 console.log(!(4 < 3));
 console.log(!(false));
 console.log(!(4 > 3 && 10 < 12));
 console.log(!(4 > 3 && 10 > 12));
 console.log(!(4 === '4'));




 
 let nn =  "dragon";
 let yy =  "python";
  
"dragon".includes("on")? console.log(`Yes,there is "on"`):console.log(`Facts`);
"python".includes("on")? console.log(`Yes,there is "on"`):console.log(`Facts`);



const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());



let sec = Date.now();
console.log(sec);

//Level 2

//Area of a Triangle
const base = prompt("Enter Base:");
const height = prompt("Enter Height:");

const area = 0.5 * base * height;

console.log(`The Area of the triangle is:${area}`);


//Perimeter of Triangle
const sideA = parseInt(prompt("Enter A:"));
const sideB = parseInt(prompt("Enter B:"));
const sideC = parseInt(prompt("Enter C:"));

const perimeterTri = sideA + sideB + sideC;

console.log(`The perimeter of the triangle is ${perimeterTri}`);


//Area of a Rectangle
const lengthe = parseInt(prompt("Enter Length:"));
const heightt = parseInt(prompt("Enter Height:"));

const areaRec = lengthe * heightt;
console.log(`Area:${areaRec}`)

//Perimeter of Rectangle
const lengther = parseInt(prompt("Enter Length:"));
const width = parseInt(prompt("Enter Width:"));

const perimeterRect = 2 * (lengther + width);
console.log(`result rect:${perimeterRect}`);


//A Slope
const xi = parseFloat(prompt("Enter X:"));
const yi = 2*xi - 2;

console.log(`Result y:${yi}`);



//Slope of M
const x1 =  parseFloat(prompt("Enter x1:"));
const y1 =  parseFloat(prompt("Enter y1:"));

const X2=  parseFloat(prompt("Enter x2:"));
const y2 =  parseFloat(prompt("Enter y2:"));

const m = (y2 - y1) / (X2 - x1);

console.log(`slp is:${m}`);

///////////////////////////////////////////////////////////

const x = parseFloat(prompt("Enter X:"));
const y = x^2 + 6*x + 9;

console.log(`Result y:${y}`);


//Working Hours
const hours = parseInt(prompt("Enter Hours:"));
const ratePerHour = parseInt(prompt("Enter Rate Per Hour:"));

const paymentPerWeek = (hours * ratePerHour) * 5;
 console.log(`Your weekly earning is:${paymentPerWeek}`)



 const myName = "Emmanuel";

 myName.length > 7 ? console.log(`${myName} is long`):console.log(`${myName} is short`);

//To get age by year
 const userYear = parseInt(prompt("Enter Year:"));
 var d = new Date();
 var birth = d.getFullYear();

 const yourAge = Math.abs(userYear - birth);
 const yearsToDrive = 18 - yourAge;

 console.log(`Your Age is:${yourAge}`);

yourAge >= 18 ? console.log(`You are ${yourAge}.You are old enough to drive`):console.log(`You are ${yourAge}. You will be allowed to drive after ${yearsToDrive}years.`);

//Number of seconds lived
 const inputAge = parseInt(prompt("Enter number of years you have lived:"));
 
let z = Date.now() * inputAge;


console.log(z);





const nows = new Date()
const years = nows.getFullYear()
const month = nows.getMonth() + 1 
const date = nows.getDate() 
const hourss = nows.getHours() 
const minutes = nows.getMinutes() 

 console.log(`${year}-${month}-${date} ${hourss}:${minutes}`);
 console.log(`${date}-${month}-${year} ${hourss}:${minutes}`);
 console.log(`${date}/${month}/${year} ${hourss}:${minutes}`);




hours && minutes <= 9 ? console.log(`${year}-${month}-${date} 0${hourss}: 0${minutes}`): console.log(`${year}-${month}-${date} ${hourss}:${minutes}`);
