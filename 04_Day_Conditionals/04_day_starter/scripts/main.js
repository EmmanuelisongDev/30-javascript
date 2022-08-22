// this is your main.js script

alert('Open the browser console whenever you work on JavaScript')


let van = parseInt(prompt("Enter your Age:"));
let d = new Date;

let yearLeft = Math.abs(18-van);

if(van >= 18 ){
    console.log("You are old enough to drive");
}else{
    console.log(`You are left with ${yearLeft}years to drive`)
}



let myAge = parseInt(prompt("My Age:"));
let yourAge = parseInt(prompt("Your Age:"));

let ageDiffer = Math.abs(myAge-yourAge);

if( myAge > yourAge){
    console.log(`I am ${ageDiffer}years older than you.`);
}else{
    console.log(`You are ${ageDiffer}years older than me.`);
};


let a = 4;
let b = 7;

a > b ? console.log("a is greater than b"): console.log("a is less than b");

if (a > b){
    console.log("a is greater than b");
}else if(a < b){
    console.log("a is less than b");
}else{
    console.log("NIL")
}




let evenEnter = parseInt(prompt("Enter Number:"));
 if(evenEnter%2 == 0){
    console.log(`${evenEnter} is an even number`)
 }else if (evenEnter%3 == 0) {
    console.log(`${evenEnter} is an odd number`)
 } else {
    console.log(`NAN`)
 }

 let num = prompt('Enter number')
 switch(num){
    case num >= 90 && num == 100:
      console.log("A")
      break
      case num >= 70 && num == 89:
        console.log("B")
     break
     case num >= 60 && num == 69:
        console.log("C")
     break
     case num >= 50 && num == 59:
        console.log("D")
     break
     case num <= 49 :
        console.log("F")
     break
    default:
     console.log(`Entered value was not a number`)
  }

  let monthUserInput = prompt('What month is today ?')
  switch (monthUserInput) {
    case monthUserInput == 'September','October','November':
      console.log('The season is Autumn.')
      break
    case monthUserInput == 'December','January','February':
      console.log('The season is Winter.')
      break
    case monthUserInput == 'March','April','May':
      console.log('The season is Spring.')
      break
    case monthUserInput == 'June','July','August':
      console.log('The season is Summer.')
      break
 
    default:
      console.log('It is not a Month day.')
  }


  let dayUser = prompt('What day is today ?')
  switch (dayUser) {
    case 'monday':
      console.log('Monday is a working day.')
      break
    case 'tuesday':
      console.log('Tuesday is a working day.')
      break
    case 'wednesday':
      console.log(' Wednesday is a working day.')
      break
    case 'thursday':
      console.log(' Thursday is a working day.')
      break
    case 'friday':
      console.log('Friday is a working day.')
      break
    case 'saturday':
      console.log('Saturday is a Weekend.')
      break
    case 'sunday':
      console.log('Sunday is a Weekend .')
      break
    default:
      console.log('It is not a week day.')
  }

   


//  const monthNames=["January","February","March","April","May", "June","July","August","September","October","November","December"]

 let dayInAMonth = prompt("Enter Month:")
let io = dayInAMonth.toLowerCase();
  switch (dayInAMonth) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
      console.log(`${dayInAMonth} has 31 days`)
      break
    case 'april':
    case 'june':
    case 'september':
    case 'november':
      console.log(`${dayInAMonth} has 30 days`)
      break
    case 'February':
      console.log(`${dayInAMonth} has 28/29 days`)
      break
    default:
      console.log('NONNN')
  }

