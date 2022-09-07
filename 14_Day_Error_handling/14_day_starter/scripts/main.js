// console.log(countries)
// alert('Open the console and check if the countries has been loaded')




try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.log(err)
  }


  const throwErrorExampleFun = () => {
    let message
    let x = prompt('Enter a number: ')
    try {
      if (x == '') throw 'empty'
      if (isNaN(x)) throw 'not a number'
      x = Number(x)
      if (x < 5) throw 'too low'
      if (x > 10) throw 'too high'
    } catch (err) {
      console.log(err)
    }
  }
  throwErrorExampleFun()





  let firstName = 'Asabeneh'
let fullName = firstName + ' ' + lastName

console.log(fullName)



let square = 2 x 2
console.log(square)

console.log('Hello, world")



let num = 10
console.log(num.toLowerCase())