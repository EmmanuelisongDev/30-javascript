// console.log(countries)
// alert('Open the console and check if the countries has been loaded')







// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     job: 'Instructor and Developer',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Redux',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     languages: ['Amharic', 'English', 'Suomi(Finnish)']
//   }
//   // Let us create a function which give information about the person object without destructuring
  
//   const getPersonInfo = obj => {
//     const skills = obj.skills
//     const formattedSkills = skills.slice(0, -1).join(', ')
//     const languages = obj.languages
//     const formattedLanguages = languages.slice(0, -1).join(', ')
  
//     personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
//       obj.age
//     } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
//       skills[skills.length - 1]
//     }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
  
//     return personInfo
//   }
  
//   console.log(getPersonInfo(person))


// for(const {population,languages} of countries){

//     console.log(population,languages)

// }

const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

console.log(e,pi,gravity, bodyTemp, boilingTemp)




const names = ['Asabeneh', 'Brook', 'David', 'John'];
let [fin ,est, sw, den] = names;
console.log(fin ,est, sw, den);

const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
  }


let {wid, hei, area, perimeter} = rectangle
  console.log(rectangle)











  const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]


// for(const {name,scores,skills,ages} of users){
//     console.log(name,scores,skills,ages)
// }

for(const {name,scores,skills,ages} of users){
    if(skills.length > 2){
        console.log(name,scores,skills,ages)
    }
}




for(const{name,capital,population,languages} of countries){
    console.log(name,capital,population,languages)
}

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];


let [name, skills, scores] = student
console.log(name , skills, scores)


// ```js
// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200
// }
// let { width: w, height: h, area: a, perimeter: p } = rectangle

// console.log(w, h, a, p)
// ```


const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]
const convertArrayToObject = (students = []) =>{
    const res = {};
    for( [name,skills,scores] of students){
        let students = [name,skills,scores];
        res = students
    }
    return res
}
console.log(convertArrayToObject(students))