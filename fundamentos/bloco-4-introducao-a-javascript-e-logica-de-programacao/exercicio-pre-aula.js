// let diasDaSemana = {
//     1: 'domingo',
//     2: 'segunda',
//     3: 'terça',
//     4: 'quarta',
//     5: 'quinta',
//     6: 'sexta',
//     7: 'sábado',
// };
//   console.log(diasDaSemana.1); // SyntaxError: Unexpected number
// //   console.log(diasDaSemana['1']); // domingo

// // 1 - Crie um objeto player contendo as variáveis listadas abaixo.

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };
// // refatorando (criando o objeto)

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
  bestInTheWorld: [
    {
    1: '2006'
    },
    {
    2: '2007'
    },
    {
    3: '2008'
    },
    {
    4: '2009'
    },
    {
    5: '2010'
    },
    {
    6: '2018'
    },

  ]
};
// console.log('A jogadora ' + player['name'] + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');
let numeroDeVezes = player.bestInTheWorld.length;

console.log('A jogadora ' + player['name'] + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + numeroDeVezes + ' vezes.');