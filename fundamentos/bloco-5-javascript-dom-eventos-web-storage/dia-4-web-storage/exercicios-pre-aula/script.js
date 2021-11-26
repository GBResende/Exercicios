// console.log(localStorage.length) // não possui nada salvo, então o retorno é o valor: 0
// localStorage.setItem("firstname", "Adam") //salva uma entrada com a key = "firstname" e value = "Adam"
// localStorage.setItem("lastname", "Smith") //salva uma entrada com a key = "lastname" e value = "Smith"
// console.log(localStorage.getItem("lastname")) // retorna o valor "Smith"
// console.log(localStorage.length) // possui duas entradas, então o retorno é o valor: 2
// localStorage.removeItem("lastname") // remove a entrada referente a key = "lastname"
// console.log(localStorage.length) // possui uma entrada, então o retorno é o valor: 1
// localStorage.clear() // limpa todas as entradas salvas em localStorage
// console.log(localStorage.length) // não possui nada salvo, então o retorno é o valor: 0

// console.log(sessionStorage.length) // não possui nada salvo, então o retorno é o valor: 0
// sessionStorage.setItem("firstname", "Adam") //salva uma entrada com a key = "firstname" e value = "Adam"
// sessionStorage.setItem("lastname", "Smith") //salva uma entrada com a key = "lastname" e value = "Smith"
// console.log(sessionStorage.getItem("lastname")) // retorna o valor "Smith"
// console.log(sessionStorage.length) // possui duas entradas, então o retorno é o valor: 2
// sessionStorage.removeItem("lastname") // remove a entrada referente a key = "lastname"
// console.log(sessionStorage.length) // possui uma entrada, então o retorno é o valor: 1
// sessionStorage.clear() // limpa todas as entradas salvas em sessionStorage
// console.log(sessionStorage.length) // não possui nada salvo, então o retorno é o valor: 0

// let organization = {
//     name: "trybe",
//     since: 2019
//   }
  
//   // objeto "storage" pode ser localStorage ou sessionStorage
  
//   document.storage.setItem("trybe", JSON.stringify(organization))
//   let org = JSON.parse(storage.getItem("trybe"))
//   console.log(org) // { name: "trybe", since: 2019 }
  
//   let classes = ["2019/set", "2019/oct"]
//   document.storage.setItem("classes", JSON.stringify(classes))
//   let cls = JSON.parse(storage.getItem("classes"))
//   console.log(cls) // ["2019/set", "2019/oct"]

// ESTE EXEMPLO É COM LOCALsTORAGE
// const button = document.getElementById('add-button');
// const input = document.getElementById('phrases-input');
// const list = document.getElementById('phrases-list');

// function addPhraseToLocalStorage() {
//   const oldList = JSON.parse(localStorage.getItem('phrases'));
//   const phraseText = input.value;
//   oldList.push(phraseText);
//   localStorage.setItem('phrases', JSON.stringify(oldList));
//   insertPhraseInDOM();
// };

// function insertPhraseInDOM() {
//   const phrasesList = JSON.parse(localStorage.getItem('phrases'));
//   const listLength = phrasesList.length - 1;
//   const phraseText = phrasesList[listLength];
//   const phrase = document.createElement('li');
//   phrase.innerText = phraseText;
//   list.appendChild(phrase);
// };

// function initialRenderization() {
//   if (localStorage.getItem('phrases') === null) {
//     localStorage.setItem('phrases', JSON.stringify([]));
//   } else {
//     const phrasesList = JSON.parse(localStorage.getItem('phrases'));
//     const listLength = phrasesList.length - 1;
//     for (let index = 0; index <= listLength; index += 1) {
//       const listElement = document.createElement('li');
//       listElement.innerText = phrasesList[index];
//       list.appendChild(listElement);
//     };
//   };
// };

// button.addEventListener('click', addPhraseToLocalStorage);

// window.onload = function() {
//   initialRenderization();
// };

// ESTE EXEMPLO É COM SESSIONsTORAGE
const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');

function addPhraseToSessionStorage() {
  if (sessionStorage.getItem('phrases') === null) {
    sessionStorage.setItem('phrases', JSON.stringify([]));
  }
  const oldList = JSON.parse(sessionStorage.getItem('phrases'));
  const phraseText = input.value;
  oldList.push(phraseText);
  sessionStorage.setItem('phrases', JSON.stringify(oldList));
  insertPhraseInDOM();
};

function insertPhraseInDOM() {
  const phrasesList = JSON.parse(sessionStorage.getItem('phrases'));
  const listLength = phrasesList.length - 1;
  const phraseText = phrasesList[listLength];
  const phrase = document.createElement('li');
  phrase.innerText = phraseText;
  list.appendChild(phrase);
};

button.addEventListener('click', addPhraseToSessionStorage);