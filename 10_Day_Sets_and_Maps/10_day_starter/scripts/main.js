// console.log(countries)
// alert('Open the console and check if the countries has been loaded')



const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
// seft = new Set()
// for( company of compainies){
//     seft.add(company)
// }
// console.log(companies)

const langSet = new Set(languages)
console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size) // 4



const counts = []
const count = {}
for (const l of langSet) {
    const filteredLang = languages.filter((lng) => lng === l)
    console.log(filteredLang) // ["English", "English", "English"]
    counts.push({ lang: l, count: filteredLang.length })
  }
  console.log(counts)

  //Level 1

  let fisrtSet = new Set();

  for(let i = 0;i <= 10; i++){
    fisrtSet.add(i)
}
console.log(fisrtSet)
fisrtSet.delete(7)
console.log(fisrtSet)
fisrtSet.clear()
console.log(fisrtSet)


let lass = ["fate","fact","llll","godu","luffy"]
let lassSet = new Set(lass)
console.log(lassSet)


countris = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
let mapp = new Map(countris)
console.log(mapp)
console.log(mapp.size)


//Level 2

// let c = [...a,...b]

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let A = new Set(a)
let B = new Set(b)




let c = a.filter((num) => B.has(num))
let C = new Set(c)

console.log(C)


let union = [...a, ...b]
console.log(union);



const coun = new Set(countries)
 console.log(coun.size)

const coo = []
const pp = {}
 for (const languages of coun){
    const filMe = countries.filter((mmm) => mmm === languages)
    console.log(filMe)
    coo.push({Lang: languages, pp:filMe.length})
 }

 console.log(coo)
