// // exercicio: 1
// let string = ''
// let n= 5
// for (let i = 0; i < n; i++) {
//     string += '*' 
// }
// for (let i = 0; i < n; i++) {
//     console.log(string)
// }



// // exercicio:2
// let string = ''
// let n= 5
// let linhasY=5
// for (let i = 0; i < linhasY; i++) {
//     string += '*'
//     console.log(string);
// }



// exercicio: 3
let string = ''
let espaco = ' '
let n= 5
let linhasY=5

for (let i = 0; i < linhasY; i++) {
    string += '*'
    for (let i2 = 0; i2 < n; i2++) {
        espaco += string
    }
    console.log(string)
}