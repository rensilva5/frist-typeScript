let firstName: string = 'Renzo'
let age: number = 247
let active: boolean = true

// let names: string [] = [1, 2, 3, 4] // gives an error
let names: string [] = ['Charly', 'Topacio', 'Marlon']

enum studentTypes {
    pending,  // 0
    active,   // 1
    almostdone, // 2
    presenting, // 3
    graduated,  // 4
    tas,      // 5
    teachers, // 6
}

let mystatus = studentTypes.graduated

// switch (mystatus) {
//     case Number(studentTypes.active):
//         console.log('studnet is active')
//         break;
//     case Number(studentTypes.graduated):
//         break;
//     default:
//         console.log('happy face')
// }

// console.log('my status', mystatus)
// if (mystatus == studentTypes.graduated) {
// console.log(`the student is graduated`)
// }

// console.log(names)
// console.log(`My first name is ${firstName}`)

// let code: string | number = 11
// code = 'aa11'
// // code = false // error, no a string or number

// console.log(`my entry code is : ${code}`)

// function sum (arr: number[]) {
//     return arr.reduce((total: number, num: number ) => total + num)
//     return arr.reduce( (previousValue: number, currentValue: number)=> {return previousValue + currentValue})

// }
// let numbers: number[] = [1,2,3,4,5,6]

// console.log(sum(numbers))

let complexItem: any = { name: 'Renzo' }
complexItem = { title: 'proffesor'}

complexItem = 'it is a string'
complexItem = 22

// console.log('complexItem ', complexItem)

enum bloodType {
    aPositive,
    bPositive,
    oNegative,
    oPositive,
}

interface human {
    name: string,
    age: number,
    height: number,
    bloodType: bloodType,
}


const me: human = {
    name: 'Bobby',
    age: 29,
    height: 5.9,
    bloodType: bloodType.oPositive,
}