// // 1 - Acesse o elemento elementoOndeVoceEsta .
// document.querySelector('#pai').firstElementChild.nextElementSibling
// // 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = 'red'
// // 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// document.querySelector('#primeiroFilhoDoFilho').innerText = 'Adicionando um Texto ao elemento PrimeiroFilhoDoFilho'
// // 4 - Acesse o primeiroFilho a partir de pai .
// document.querySelector('#pai').firstElementChild
// // 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
// document.querySelector('#elementoOndeVoceEsta').previousElementSibling
// // 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
// document.querySelector('#elementoOndeVoceEsta').nextSibling
// // 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
// // 8 - Agora acesse o terceiroFilho a partir de pai .
// document.querySelector('#pai').lastElementChild.previousElementSibling

// let pai = document.querySelector('#pai');

// let irmaoDeOndeEstou = document.createElement('section');

// pai.appendChild(irmaoDeOndeEstou);

// Buscar elemento pai
var elemento_pai = document.body;

// Criar elemento
var titulo = document.createElement('h1');
titulo.className = 'classe-h1'


// Criar o nó de texto
var texto = document.createTextNode("Um título qualquer");

// Anexar o nó de texto ao elemento h1
titulo.appendChild(texto);

// Agora sim, inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
paiDoPai.appendChild(titulo);
