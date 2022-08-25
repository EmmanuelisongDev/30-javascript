// // console.log(countries)
// // // alert('Open the console and check if the countries has been loaded')


// // const numbers = [1, 2, 3, 4, 5]
// // let sum = 0
// // for(let i = 0; i < numbers.length; i++){
// //   sum  = sum + numbers[i]  // can be shorten, sum += numbers[i]

// // }

// // console.log(sum)  // 15



// // // const number = [1, 2, 3, 4, 5]

// // // for (const eee of numbers) {
// // //     sum =sum +  eee
// // }
// // console.log(sum)



// // for(let i = 0;i <=10;i++){
// //     console.log(i)
// // }
// // for(let i = 10;i >= 0;i--){
// //     console.log(i)
// // }



// // for(let i = 0;i >= 0 ;i++){
// //     console.log(i)
// // }


// let n = 100
// for (let i = 0;i <= n ;i++){
//       console.log(i)
//    }
  

// for( x = 0;x <= 6; x++)
// {
//   for(y = 0; y <= x; y++){
    
//     console.log("#")
//   }
//   console.log("</br>")
// }



// for( i= 0; i <= 10; i++){
//   console.log(`${i} x ${i} = ${i * i}`)
// }


// for( i= 0; i <= 10; i++){
//   console.log(`${i}  ${i*i}   ${i*i*i}`)
  
// }


// for(i = 0; i < 100; i++){
//    if(i % 2 == 0){
//     console.log(i)
//    }
//   }

// for(i = 0; i < 100; i++){
//    if(i % 2 != 0){
//     console.log(i)
//    }
//   }
  



  // for(i = 2; i < 100; i++){
  //   let isPrime = true;
  //   for(j = 2 ; j <= i-1;j++){
  //    if(i % j == 0){
  //     isPrime = false;
  //     break
  //    }
  //   }
  //   if(isPrime) console.log(i);
  //   }

  let sumM = 0;
  
    
   for(p = 0; p <= 100; p++){
    sumM += p;

  }
  console.log(`The sum of all numbers from 0 to 100 is ${sumM}`)

let i;
let sumE = 0;
let sumO = 0;

 for (i = 0;i  <= 100; i++){
  i % 2===0 ? (sumE += i) : (sumO += i);
 }

 console.log([sumE,sumO]);





//  var arr = [];
//  while(arr. length < 5){
//  var r = Math. floor(Math. random() * 100) + 1;
//  if(arr. indexOf(r) === -1) arr. push(r);
//  console. log(arr);
//  }

console.log(Array(5).fill().map(() => Math.round(Math.random() * 100)))



var arr = [];
while (arr.length <= 5){
  var r = Math.floor(Math.random()*100)
  if(arr.indexOf(r) ===-1)arr.push(r);
  console.log(arr)
}




// let id = '';
// let character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// let characterLength = character.length;

// for (i=0 ;i < length;i++){
//   id += character(Math.floor(Math.random() * 
//   charactersLength));
// }
// console.log(id)





// function randomString() {  
//   //initialize a variable having alpha-numeric characters  
// var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";  

//   //specify the length for the new string to be generated  
// var string_length = 8;  
// var randomstring = '';  

//   //put a loop to select a character randomly in each iteration  
// for (var i=0; i<string_length; i++) {  
// var rnum = Math.floor(Math.random() * chars.length);  
// randomstring += chars.substring(rnum,rnum+1);  
// }  
//    //display the generated string   
// console.log(randomString)
// }  


// function makeid() {
//   var text = "";
//   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//   for (var i = 0; i < 5; i++)
//     text += possible.charAt(Math.floor(Math.random() * possible.length));

//   return text;
// }

// console.log(makeid());



function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  

  for (var i = 0; i < 7; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

console.log(makeid());



// function makeColour() {
//   var text = "";
//   var possible2 = "0123456789ABCDEF";

//   for (var i = 0; i < 6; i++)
//     color += possible2[Math.floor(Math.random() * 16)];

//   return color;
// }

// console.log(makeColour());



var randomColor = '#'+Math.floor(Math.random()*12777215).toString(16);
console.log(randomColor)



var countries1 = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
  "Iceland",
];

// countries1=countries1.map(function(x){
// return x.toUpperCase();
// })
// console.log(countries1)

// countries1=countries1.map(function(R){
// return R.length;
// })
// console.log(countries1)


 
// for (const conts of countries1) {
//   console.log(tech.toUpperCase());
// }

// for (let i = 0; i < countries1.length; i++) {
//   console.log
  
// }

// for (let i = 0; i <= 5; i++) {
//   console.log(`${i} * ${i} = ${i * i}`);
// }



for ( i = 0; i < countries1.length; i++){
  if (countries1[i].indexOf("land") != -1){
    console.log([countries1[i]])
  }
}