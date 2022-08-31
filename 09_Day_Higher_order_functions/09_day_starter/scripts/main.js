// // console.log(countries)



// // const callback = (n) => {
// //     return n**2
// // }

// // function cube (callback,n){
// //     return callback(n) * n
// // }

// // console.log(cube(callback,3));


// // const higherOrder = n => {
// //     const doSomething = m => {
// //         const doWhatEver = t => {
// //             return 2 * n + 3 * m + t;
// //         }
// //         return doWhatEver
// //     }
// //     return doSomething
// // } 
// // console.log(higherOrder(2)(3)(10));



// const numbers = [1,2,3,4,5]

// const sumArray = arr => {
//     let sum = 0
//     const callback = function(element){
//         sum += element
//     }
//     arr.forEach(callback)
//     return sum
// }

// console.log(sumArray(numbers))




// function sayHello(){
//     console.log('HEllo')
// }
// setInterval(sayHello,10000)




// const number = [1, 2, 3, 4, 5];
// number.forEach(num => console.log(num));


// let sum = 0;
// number.forEach(num => sum += num);
// console.log(sum);




// let countries2 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
// countries2.forEach((element) => console.log(element.toUpperCase()))




// const numbersSquare =  number.map((num) => num * num)
// console.log(numbersSquare)


// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// const Upp = names.map((name) => name.toUpperCase())
// console.log(Upp)

// const countrie = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya',
//   ]


//   const counToUpperCase = countrie.map((count) => count.toUpperCase())
//   console.log(counToUpperCase)


//   const  countriesFirstThreeLetters = countrie.map((cut) => cut.toUpperCase().slice(0,3))
// console.log(countriesFirstThreeLetters)



// const filterL = countrie.filter((lik)=> lik.includes('land'))
// console.log(filterL)


// const endsWith = countrie.filter((lik)=> lik.endsWith('ia'))
// console.log(endsWith)


// const  jj =  countrie.filter((me) => me.length === 5)
// console.log(jj)


// const scores = [
//     { name: 'Asabeneh', score: 95 },
//      { name: 'Lidiya', score: 98 },
//     { name: 'Mathias', score: 80 },
//     { name: 'Elias', score: 50 },
//     { name: 'Martha', score: 85 },
//     { name: 'John', score: 100 },
//   ]

//   const scoresi = scores.filter((score) => score.score > 80 )
//   console.log(scoresi)



//   const sumx = number.reduce((acc,cur) => acc + cur,0)
//   console.log(sumx)


//   const areAA = names.every((name) => typeof name === 'string')

//   console.log(areAA)


//   const ages = [24, 22, 25, 32, 35,14, 18]
//   const age = ages.find((men) => men < 20);
//   console.log(age)


//   const nemes = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
//   const result = names.find((name) => name.length > 7)
//   console.log(result)




// const resultl = names.findIndex((name) => name.length > 7)
// console.log (resultl)






//LEVEL 1
const countries2 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]



const consLog = countries2.forEach((country) => console.log(country))
const consLo = names.forEach((name) => console.log(name))
const consL = numbers.forEach((number) => console.log(number))


const toCaps = countries2.map((cc) => cc.toUpperCase())
console.log(toCaps)
const toSquare = numbers.map((cc) => cc * cc)
console.log(toSquare)

const countLength = countries2.map((go) => go.length)
console.log(countLength)

const toNameCaps = names.map((cc) => cc.toUpperCase())
console.log(toNameCaps)

const fliterCount = countries2.filter((cc) => cc.includes('land'))
console.log(fliterCount)

const fliterCount2 = countries2.filter((cc) => cc.length >= 6)
console.log(fliterCount2)

const fliterCount3 = countries2.filter((cc) => cc.includes('E'))
console.log(fliterCount3)

const fliterCount4 = products.filter( cc => typeof cc.price === 'number')
console.log(fliterCount4)
 
// let pricesWithValues = products.filter(product => {
//     return product.price > 0;
// })
// console.log(pricesWithValues);


const getStringLists = (arr) => {
    let nn = arr.filter(item => typeof item === 'string')
    return nn
}

let nn = getStringLists(["victor", 3, 5, "kenneth"]);
console.log(nn);



const sum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum)


let concatCount = countries2.join(",")
console.log(`${concatCount}`)



// let joinCountries = countries2.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// })
// console.log(joinCountries);


let greaterThan = names.some((man) => man.length > 7)
console.log(greaterThan)


let isCountryIncludesLand = countries2.every(country => {
    return country.toLowerCase().includes("land")
})
console.log(isCountryIncludesLand);


let firstCountry6Chars = countries2.find(country => {
    return country.length === 6
});
console.log(firstCountry6Chars);

let firstIndexPosCountry6Chars = countries2.findIndex(country => {
    return country.length === 6
});
console.log(firstIndexPosCountry6Chars);

let firstIndexPosNorwayExist = countries2.findIndex(country => {
    return country.includes("Norway")
});
console.log(firstIndexPosNorwayExist);

let firstIndexPosRussiaExist = countries2.findIndex(country => {
    return country.includes("Russia")
});
console.log(firstIndexPosRussiaExist);



// let totalPrice = products.map(product => {
//     return product.price;
// }).filter(price => {
//     return price > 0;
// }).reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// })
// console.log(totalPrice);

 

let totalPrice = products.map(product => {
    return product.price; 
}).filter(price =>{
    return price > 0;
}).reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
})
console.log(totalPrice)

const categorizeCountries = (countries2) => {
    let coun = countries2.filter(country => {
        return country.toLowerCase().includes("ia") || country.toLowerCase().includes("island") || country.toLowerCase().includes("land") || country.toLowerCase().includes("stan");
    })
    return coun;
}
console.log(categorizeCountries(countries2))

const getFirstTenCountries = (countries) => {
    let firstTen = [];
    firstTen = countries.map(country => {
        return country;
        })
    return firstTen;
}

console.log(getFirstTenCountries(countries));










// countries.sort((a,b) => {
//     return a.population - b.population
// })


countries.forEach((e) => {
    console.log(`${e.name},${e.capital},${e.population}`)
})




let mostSpokenLanguages = (countries,fr) => {

    let arr2 = []

    countries.forEach((x) =>{
        if(arr2.some(val) => {
            return val[key] == x[key] }
        })
    })

}