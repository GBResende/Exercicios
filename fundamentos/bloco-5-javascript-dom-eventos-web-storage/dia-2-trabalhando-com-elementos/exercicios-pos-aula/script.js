// 1- Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let pai = document.querySelector('body');
let titulo = document.createElement('h1');
let textoH1 = document.createTextNode("Exercício 5.2 - JavaScript DOM");
titulo.appendChild(textoH1);
pai.appendChild(titulo);


// 2- Adicione a tag main com a classe main-content como filho da tag body ;

let firstSon = document.createElement('main');
firstSon.className = 'main-content';
pai.appendChild(firstSon);


// 3- Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let secondSon = document.createElement('section');
secondSon.className = 'center-content';
firstSon.appendChild(secondSon);


// 4- Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let paragraph1 = document.createElement('p');
secondSon.appendChild(paragraph1);


// 5- Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let sonOfFirstSon = document.createElement('section');
sonOfFirstSon.className = 'left-content';
firstSon.appendChild(sonOfFirstSon);


// 6- Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let sonOfFirstSon2 = document.createElement('section');
sonOfFirstSon2.className = 'right-content';
firstSon.appendChild(sonOfFirstSon2);


// 7- Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
let img = document.createElement('img');
img.src = prompt('https://picsum.photos/200');
img.className = 'small-image';
sonOfFirstSon.appendChild(img);


// 8- Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let arr = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

let retorno = [];

let ul1 = document.createElement('ul');

sonOfFirstSon2.appendChild(ul1);

let li = document.createElement('li');

for (let i = 0; i < arr.length; i += 1) {
    retorno += arr[i];
    li.innerText = retorno;
}
ul1.appendChild(li);


// 9- Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

