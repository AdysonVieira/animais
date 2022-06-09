// Exercício

// Retorne no console todas as imagens do site
const imagensHTML = document.getElementsByTagName('img'); // Ao vivo
const imagensNode = document.querySelectorAll('img'); // Estático


// Retorne no console apenas as imagens que começam com a palava imagem
const imagensImg = document.querySelectorAll('img[src^="img/imagem"]');


// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('a[href^="#"]');

// Selecione o primeiro h2 dentro de .animais-info
const animais = document.querySelector('.animais-info');
const primeiroH2 = animais.querySelector('h2')

// Selecione o último p do site
const todosOsP = document.querySelectorAll('p')
console.log(todosOsP[--todosOsP.length])
