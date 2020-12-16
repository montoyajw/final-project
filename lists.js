
// index      0       1     2       3       4
let names = ['Sam','Nick','Jake']
// length -> 5

names[1] = 'Nik'
// [Sam, Nick, Jake]

names.push('Emily')
// [Sam, Nick, Jake, Emily]

names.push('Frank')

//for (let i = 0; i < names.length; i= i++) {
    //console.log(names[i])
//}

let nums = [1,2,3,4,5,6,7,8,9]

// what is the sum of the even #s in the list?

//modulus -> %
// 7 % 2 -> 1
// 6 % 2 -> 0

//accumulation
let total = 0
for (let i= 0; i < nums.length; i++) {
    if(nums[i] % 2 === 0)
    total = total + nums[i]
}

console.log(`The sum is ${total}`)

names.forEach((name) => {
    console.log('name')
}

)

//what is the index of the first even number?
let index = -1
nums.forEach((num) => {
    if (num % 2 === 0 && index === -1) {

    }
})

nums.forEach((num) => {
    if (num % 2 === 1 ){

    }
})

let oddNums = 0

nums.forEach((num) => {
    if (num % 2 === 1 )
    oddNums = oddNums + 1
})

console.log(`The amount of odd numbers is ${oddNums}`)

let newNames = names.filter((name) => {
    return name!== 'Jake'
})

console.log(newNames)

let doubleNums = nums.map((num) => {
    return num * 2
})

console.log(`The first even is at spot ${index}`)