//divisible by 5
let nums = [1,2,3,4,5,6,7,8,9,10]

let index = -1

let divNums = 0

nums.forEach((num,i) => {
    if (num,i % 5 === 0) {
        divNums = i - 1
    }
})

console.log(`${index}`)

console.log(`The index number of the first number divisible by 5 is ${divNums}`)

//Farenheit to Celcius

let temps = [60,75,90]

let squared = temps.map(temp => {
    return (temp - 32) / 1.8
})

console.log(`The temperatures in Celcius are ${squared}`)

//Zoo Animals

let index = -1

let pets = [1,2,3,4]

pets.forEach((pet, index) => {
    console.log(pet, index)
    favPet = index
    if (pets[i] % 2 === 0)
    console.log('The favorite animal is not in the zoo')
    if (pets[i] % 2 === 1) 
    console.log('The favorite animal is in the zoo')
})