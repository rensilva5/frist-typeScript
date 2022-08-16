var firstName = 'Renzo';
var age = 41;
var active = true;
// let names: string [] = [1, 2, 3, 4] // gives an error
var names = ['Charly', 'Topacio', 'Marlon'];
var studentTypes;
(function (studentTypes) {
    studentTypes[studentTypes["pending"] = 0] = "pending";
    studentTypes[studentTypes["active"] = 1] = "active";
    studentTypes[studentTypes["almostdone"] = 2] = "almostdone";
    studentTypes[studentTypes["presenting"] = 3] = "presenting";
    studentTypes[studentTypes["graduated"] = 4] = "graduated";
    studentTypes[studentTypes["tas"] = 5] = "tas";
    studentTypes[studentTypes["teachers"] = 6] = "teachers";
})(studentTypes || (studentTypes = {}));
var mystatus = studentTypes.graduated;
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
var complexItem = { name: 'Renzo' };
complexItem = { title: 'proffesor' };
complexItem = 'it is a string';
complexItem = 22;
// console.log('complexItem ', complexItem)
var bloodType;
(function (bloodType) {
    bloodType[bloodType["aPositive"] = 0] = "aPositive";
    bloodType[bloodType["bPositive"] = 1] = "bPositive";
    bloodType[bloodType["oNegative"] = 2] = "oNegative";
    bloodType[bloodType["oPositive"] = 3] = "oPositive";
})(bloodType || (bloodType = {}));
var me = {
    name: 'Bobby',
    age: 29,
    height: 5.9,
    bloodType: bloodType.oPositive
};
