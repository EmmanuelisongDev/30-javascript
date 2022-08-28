// console.log(countries)
// alert('Open the console and check if the countries has been loaded')
//Level 1
// function fullName (){
//     console.log("Emmanuel")
// }
// fullName()
////
function fullName (firstName,lastName){
 return `${firstName} ${lastName}`
    
}
console.log(fullName('Emmanuel','ISong'))

////
function addNumbers (numOne,numTwo){
    return sum = numOne + numTwo;
}
console.log(addNumbers(22,99))

////
function areaOfRectangle (length,width){
    let area =  length * width;
    
    return area;
}

console.log(areaOfRectangle(4,7))


////
function perimeterOfRectangle (length,width){
    let perimeter =  2*(length + width);
    
    return perimeter;
}

console.log(perimeterOfRectangle(4,7))


////
function volumeOfRectPrism (length,width,heigth){
    let volume =  heigth*length*width;
    
    return volume;
}

console.log(volumeOfRectPrism(4,7,8))

////
function areaOfCircle (r){
    let pi = 3.14;
    area = pi*r*r;
    return area;
}

console.log(areaOfCircle(4))

////
function circumOfCircle (r){
    let pi = 3.14;
    circumference = 2*pi*r;
    return circumference;
}

console.log(circumOfCircle(4));
////
function density (mass,volume) {
    let density = mass/volume;
    return density
}

console.log(density(22,44));

////
function speed (distance,time){
    speedC = distance/time;
    return speedC
}
console.log(speed(4000,34));

////
function weightOfSubstance (mass,gravity) { 
    weight = mass * gravity;
    return weight;
 }
 console.log(weightOfSubstance(33,88))
////
function convertCelsiusToFahrenheit (oC) {
    oF = (oC * 9/5) + 32
    return oF
  }
  console.log(convertCelsiusToFahrenheit(744))

function BMI (weight,height){
    bmi = weight*(height*height) 

    if(bmi < 18.5){
        console.log(`You are underweight`)
    }else if(bmi >= 18.5 || BMI <= 24.9){
        console.log(`You are normal`)
    }else if(bmi >= 25 || BMI <= 29.9){
        console.log(`You are overweight`)
    }else if(bmi >= 30){
        console.log(`You are Obese`)
    }else{
        console.log('Pray')
    }
    return bmi
}




   


checkSeasons = (month) => {
    switch (month) {
        case "september":
        case "october":
        case "November":
            console.log("the season is Autumn");
            break;
        case "december":
        case "january":
        case "febuary":
            console.log("the season is Winter");
            break;
        case "march":
        case "april":
        case "may":
            console.log("the season is Spring");
            break;
        case "june":
        case "july":
        case "august":
            console.log("the season is Summer");
            break;
        default:
            console.log("invalid Month")
    }
}
checkSeasons("january");


function maxNumber (a,b,c){
    if(a > b && a > c){
        console.log(`${a} is the maximum value`)
    }else if (b > a && b > c){
        console.log(`${b} is the maximum value`)
    }else if(c > a && c > b){
        console.log(`${c} is the maximum value`)
    }else{
        console.log(`no max`)
    }
    return a,b,c
}

console.log(maxNumber(0,0,0))



//Level 2

function solve(a,b,c){
    var result = (((-1*b) + Math.sqrt(Math.pow(b,2)) - (4*a*c))/(2*a));
    var result2 = (((-1*b) - Math.sqrt(Math.pow(b,2)) - (4*a*c))/(2*a));
    
    return result + "<br>" + result2;
}

console.log( solve(1,1,-1) );



let arr = (["Hello", "World", "This", "Is", "My", "String"]);
//  required for of
for (let element of arr) {
    console.log(element.toString())
}
 



// required function
// let myFunction = (element) => element.charAt(0);

//  myFunction(arr)
 

// // required charAt
// var str = new String( "This is string" );

        
//          console.log( arr.toString().charAt(0));
//          console.log(  arr.toString().charAt(6));
//          console.log(  arr.toString().charAt(12));
//          console.log(  arr.toString().charAt(17));
//          console.log(  arr.toString().charAt(20));
//          console.log( arr.toString().charAt(23));








//          var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// var today  = new Date();

// console.log(today.toLocaleDateString("en-US")); // 9/17/2016
// console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
// console.log(today.toLocaleDateString("hi-IN", options)); // शनिवार, 17 सितंबर





function swapValues (a,b){
    
    [a,b] = [b,a];
    return [a,b]

}


console.log(swapValues(200,66))



function reverseArray (arr){
    var output = [];
    while (arr.length) {
        output.push(arr.pop());
    }
    return output;
}
console.log(reverseArray([4,5,8,7,0,8,7,8]));



function capArray(arr){
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i].toUpperCase());
    }
      return newArr;
}
console.log(capArray(["ricja"]));

 sumOfNumbers = (...args) => {
    let sumNum = 0;
    args.forEach(function(arg){
            sumNum += arg;
    })
    return sumNum
 }
 sumOfNumbers(1,2,3,4,9)



 evenSum = (...args) => {
    let evenSumNum = 0
    args.forEach(function(arg){
        if(arg%2 === 0){
            evenSumNum += arg
        }
    })
    return evenSumNum
 }
evenSum(1,2,3,4,5,6,67,7,8)

oddSum = (...args) => {
   let oddSumNum = 0
   args.forEach(function(arg){
       if(arg%2 !== 0){
           oddSumNum += arg
       }
   })
   return oddSumNum
}
oddSum(1,2,3,4,5,6,67,7,8)


 
evenAndOdds = (num) => {
    let odd = 0;
    let even = 0;
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            even++
        } else if (i % 2 !== 0) {
            odd++
        }
    }
    return `the number of odds are ${odd} \n the number of even are ${even}`
}
evenAndOdds(100)


sum = (...args) => {
    let sum = 0;
    args.forEach(function (num) {
        sum += num;
    })
}
sum(1, 2, 3)



generateRandomIp = () => {
    let one = Math.floor(Math.random() * 255);
    let two = Math.floor(Math.random() * 255);
    let three = Math.floor(Math.random() * 255);
    let four = Math.floor(Math.random() * 255);
    return `IP: ${one}:${two}:${three}:${four}`
}
generateRandomIp();


generateRandomHex = () => {
    let chars = "0123456789ABCDEF";
    let hex = ""
    for(let i = 0;i <= 6; i++){
        hex += chars[Math.floor(Math.random()*chars.length)];
    }
    return `#${hex}`
}

generateRandomHex()


generateUserId = () => {
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let userId = "";
    for (let i = 0; i <= 7; i++) {
        userId += chars[Math.floor(Math.random() * chars.length)];
    }
    return userId;
}
generateUserId();





userIdGeneratedByUser = () => {
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let noId = Number(prompt("how many id do you want to generate"));
    let noChars = Number(prompt("in how many chars"));
    let ids = [];
    for(i = 0; i < noId; i++){
        ids[i] = "";
        for (k=0;k < noChars;k++){
            ids[i] += chars[Math.floor(Math.random()*chars.length)]
        }
    }
    console.log(ids)
    ids.forEach(function(id){
        console.log(id)
    })
}
userIdGeneratedByUser()

rgbColorGnerator = () => {
    let one = Math.floor(Math.random() * 255);
    let two = Math.floor(Math.random() * 255);
    let three = Math.floor(Math.random() * 255);
    return `rgb(${one},${two},${three})`;
}
rgbColorGnerator();


arrayOfHexaColors = () => {
    let chars = "0123456789ABCDEF";
    let hex = [];
    for (let k = 0; k < 3; k++) {
        hex[k] = "#";
        for (let i = 0; i < 6; i++) {
            hex[k] += chars[Math.floor(Math.random() * chars.length)];
        }
    }

    return hex;
}
arrayOfHexaColors();



generateColors = (type, arrLength) => {
    let chars = "0123456789ABCDEF";
    let colors = [];
    if (type === "rgb") {
        for (i = 0; i < arrLength; i++) {
            colors[i] = "rgb";
            colors[i] += `(${ Math.floor(Math.random() * 255) },`;
            colors[i] += `${ Math.floor(Math.random() * 255) },`
            colors[i] += `${ Math.floor(Math.random() * 255) },)`
        }
    } else if (type === "hex") {
        for (let i = 0; i < arrLength; i++) {
            colors[i] = "#";
            for (k = 0; k < 6; k++) {
                colors[i] += chars[Math.floor(Math.random() * chars.length)];
            }
        }
    }
    return colors;
}
generateColors("rgb", 3);


shuffleArray = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let rand = Math.floor(Math.random() * arr.length - 1);
        if (arr.indexOf(rand) !== -1 && !newArr.includes(arr[rand])) {
            newArr.push(arr[rand]);
        }
    }
    return newArr
}
shuffleArray([1, 2, 3]);


factorial = (num) => {
    let factorial = 1;
    for (let i = num; i > 0; i--) {
        // if (i === 0) {
        //     break;
        // }

        factorial *= i;
    }
    return factorial;
}
factorial(5);





isEmpty = (val) => {
    if (val === undefined) {
        return `it's empty`
    } else {
        return `not empty`
    }
}
isEmpty()



sum = (...args) => {
    let sum = 0;
    args.forEach(function (arg) {
        sum += arg
    })
    return sum;
}
sum(1, 2, 3, 4);


sumOfArrayItems = (arr) => {
    let sum = 0;
    arr.forEach(function (ar) {
        if (typeof ar === "number") {
            sum += ar
        } else {
            sum = `it's a string`
        }
    })
    return sum;
}

sumOfArrayItems([1, 2, 3])



average = (arr) => {
    let sum = 0;
    arr.forEach(function (ar) {
        if (typeof ar === "number") {
            sum += ar;
            sum = arr.length / sum;
        } else {
            sum = `it's a string`;
        }
    })
    return sum;
}
average([1, 2, 3]);



modifyArray = (arr) => {
    if (arr.length >= 6) {
        for (let i = 0; i < arr.length; i++) {
            if (i = 5) {
                arr.splice(5)
            }
        }
        return arr
    } else {
        return `item not found`
    }
}
modifyArray([1, 2, 3]);


isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0 && num > 1) {
            return `${num} is a prime number`;
        } else {
            return `not prime`
        }
    }
}
isPrime(5);





reverseCountries = () => {
    let countries = ["nigeria", "U.S.A", "italy", "canada", "lebanon"];
    return countries.reverse();
}
reverseCountries();




randomSevenNumber = () => {
    let num = "0123456789";
    let numArray = [];
    for(let i = 0; i <= 6; i++){
        numArray += num[Math.floor(Math.random()*num.length)] 
    }

    return numArray
}
 console.log(randomSevenNumber())