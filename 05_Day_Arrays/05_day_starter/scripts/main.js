// console.log(countries)
// alert('Open the browser console whenever you work on JavaScript')
// alert('Open the console and check if the countries has been loaded') 



const countries2 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];

  
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];

const arr = Array();
console.log(arr);



const arr2 = Array(6);
console.log(arr2);

console.log(webTechs.length);
const ap = ["Man","Woman","Children","Love","Cat"];
console.log(ap[4]);
console.log(ap[0]);
console.log(ap[2]);

const mixedDataTypes = [3,"you",10,"cutie",18,"boy","heat",50,40];
console.log(mixedDataTypes.length);



const itCompanies = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
console.log(itCompanies)
console.log(itCompanies.length)
const vv = itCompanies.length-1;
console.log(vv)

console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())

console.log(`${itCompanies[0]}, ${itCompanies[1]},${itCompanies[2]},${itCompanies[3]},${itCompanies[4]},${itCompanies[5]} and ${itCompanies[6]} are big IT companies. `)


console.log(itCompanies.includes('Facebook'))

// const oo = prompt("Enter Company")

// itCompanies.includes(oo) ? console.log(`${oo}`) : console.log(`${oo} not found`);

// const RE = itCompanies.splice(4)
// console.log(RE)

const tt = itCompanies.sort()
console.log(tt)
console.log(tt.reverse())

console.log(itCompanies.slice(0,3))
console.log(itCompanies.slice(3))
console.log(itCompanies.slice(1,6))

console.log(itCompanies.pop())
console.log(itCompanies.shift())

console.log(itCompanies.splice())





const Wo = count.split(',')
console.log(Wo.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.push('Meat')
shoppingCart.unshift('Sugar')
shoppingCart[3] = 'Green Tea'
console.log(shoppingCart)


countries.includes("Ethiopia")?console.log("ETHIOPIA"):console.log("nope")
wet.includes("Sass")?console.log("Sass is a CSS proo"):console.log("nope")



const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']
  const fullstack = frontEnd.concat(backEnd)
  console.log(fullstack)


  const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]



// let sum = 0;
// for (let i=1; i < ages.length; i++){
//   sum += ages[i];
// }
// console.log(sum/ages.length)




// //sort the array
// ages.sort((a, b) => a - b)

// //declare median variable
// let median;

// //if else block to check for even or odd
// if(arr.length%2 != 0){
//     //odd case

//     //find middle index
//     let middleIndex = Math.floor(arr.length/2)

//     //find median
//     median = ages[middleIndex]
// }else{
//     //even case

//     //find middle index
//     let middleIndex = Math.floor(arr.length/2)

//     //find median
//     median = ages[middleIndex] + ages[middleIndex + 1]
// }

// //print median
// console.log(median)
//given even number of elements


//sort the array
ages.sort((a, b) => a - b)

//declare median variable
let median;

//if else block to check for even or odd
if(ages.length%2 != 0){
    //odd case

    //find middle index
    let middleIndex = Math.floor(ages.length/2)

    //find median
    median = ages[middleIndex]
}else{
    //even case

    //find middle index
    let middleIndex = Math.floor(ages.length/2)

    //find median
    median = (ages[middleIndex] + ages[middleIndex - 1])/2
}

//print median
console.log(median)



    // Javascript implementation to find
    // Range and coefficient of range
     
    // Function to return the minimum
    // element from the array
    function getMin(ages, n)
    {
        let res = ages[0];
        for (let i = 1; i < n; i++)
            res = Math.min(res, ages[i]);
        return res;
    }
 
    // Function to return the maximum
    // element from the array
    function getMax(ages, n)
    {
        let res = ages[0];
        for (let i = 1; i < n; i++)
            res = Math.max(res, ages[i]);
        return res;
    }
 
    // Function to print the Range and
    // Coefficient of Range in the given array
    function findRangeAndCoefficient(ages, n)
    {
        let max = getMax(ages, n);
        let min = getMin(ages, n);
        let range = max - min;
        let coeffOfRange = range / (max + min);
        console.log("Range : " + range + "</br>");
        console.log("Coefficient of Range : " +
        coeffOfRange + "</br>");
    }
   
    let n = ages.length;
    findRangeAndCoefficient(ages, n);
     



    //sort the array
countries.sort((a, b) => a - b)

//declare median variable
let media;

//if else block to check for even or odd
if(countries.length%2 != 0){
    //odd case

    //find middle index
    let middleIndex = Math.floor(countries.length/2)

    //find median
    media = countries[middleIndex]
}else{
    //even case

    //find middle index
    let middleIndex = Math.floor(countries.length/2)

    //find median
    media = (countries[middleIndex] + countries[middleIndex - 1])/2
}

//print median
console.log(media)