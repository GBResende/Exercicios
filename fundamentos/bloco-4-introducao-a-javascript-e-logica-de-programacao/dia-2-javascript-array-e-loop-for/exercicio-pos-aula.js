let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercicio: 1
// for (let index = 0; index < numbers.length; index++) {
//     console.log(numbers[index])
// }



// Exercicio:2
// let somaNumbers= 0;
// for (let index = 0; index < numbers.length; index++) {    
//     somaNumbers += numbers[index];
//     //somaNumbers= somaNumbers + numbers[index]
// }
// console.log(somaNumbers);



// Exercicio : 3/4
// let mediaAritmetica = somaNumbers/numbers.length;
// console.log(mediaAritmetica);
// if (mediaAritmetica>20) {
//     console.log('valor maior que 20');
// } else {
//     console.log('valor menor ou igual a 20');
// }



// Exercicio : 5
// let maiorNumero = 0;
// for (let i = 1; i < numbers.length; i += 1) {
//     for (let iaux = 0; maiorNumero < numbers[i]; iaux +=1) {
//     maiorNumero = numbers[i]       
//     }
// }
// console.log(maiorNumero);



//  Exercicio :6   
// let numbersImpar = 0;
// for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] % 2 == 1) {
//         numbersImpar = numbers[i]
//         console.log(numbersImpar)
//     }else{
//         console.log('nenhum valor ímpar encontrado')
//     }
// }
// console.log(numbersImpar.length)



// Exercicio :7
// let menorNumero = 100;

// for (let i = 0; i < numbers.length; i += 1) {
//     for (let iaux = 0; menorNumero > numbers[i]; i += 1){
//         menorNumero = numbers[i]
//     }
// }
// console.log(menorNumero)



// Exercicio: 8
// let array = [];
// for (let i = 0; i <= 25; i+=1) {
//     array.push(i)
// }
// console.log(array)


// Exercicio: 9
let arrayDiv2 = 0;
let array = [];
for (let i = 0; i <= 25; i+=1) {
    array.push(i)
}
for (let i = 0; i < array.length; i++) {
    arrayDiv2 = (array[i] % 2)    
}
console.log(arrayDiv2)