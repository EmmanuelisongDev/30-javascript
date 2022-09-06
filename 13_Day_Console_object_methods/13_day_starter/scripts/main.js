// console.log(countries)
// alert('Open the console and check if the countries has been loaded')


//Level 1

  console.table(countries)

  const countrie = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  console.table(countrie)




//Level 2

//assertion message
console.assert(10 > 2 * 10, "incorrect")

//warning message
console.warn("i'm warning you")

//error message
console.error("this is an error")




//Level 3

  const food = ["beans", "rice", "plantain", "egg"]

  //while
  console.time("while loop")
  let i = 0
  while (i < food.length) {
      console.log(food[i])
      i++
  }
  console.timeEnd("while loop")
  //for
  console.time('Regular for loop')
  for (let i = 0; i < food.length; i++) {
      console.log(food[i])
  }
  console.timeEnd('Regular for loop')
  //for of
  console.time("for of")
  for (const meal of food) {
      console.log(meal)
  }
  console.timeEnd("for of")
  //forEach
  console.time("forEach")
  food.forEach(meal => console.log(meal))
  console.timeEnd("forEach")
  
  
  