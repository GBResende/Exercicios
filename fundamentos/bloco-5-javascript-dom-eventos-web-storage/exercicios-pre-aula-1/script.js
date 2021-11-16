document.querySelector('#page-title').innerText = 'Exercicios Pré Aula'

document.querySelector('#paragraph').innerHTML = 'Aqui pede para alterar a cor deste parágrafo mas eu ainda não sei como alterar o CSS com o JavaScript, então alterei no próprio arquivo de CSS'

document.querySelector('#subtitle').innerText = 'Alterei só pra ver se aprendi mesmo ! kkk'

document.querySelectorAll('.second-paragraph')[0].innerText = 'alterando o estilo do primeiro elemento da class "second-paragraph"'

// esse aqui pediu pra acessar o subtitulo e alterar a cor pela função getElementsByTagName, porém não deu certo!
document.querySelector('#subtitle').style.color = 'red';

