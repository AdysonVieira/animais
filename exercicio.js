// Exercício 1

// Retorne no console todas as imagens do site
const imagensHTML = document.getElementsByTagName('img'); // Ao vivo
const imagensNode = document.querySelectorAll('img'); // Estático


// Retorne no console apenas as imagens que começam com a palava imagem
const imagensImg = document.querySelectorAll('img[src^="img/imagem"]');


// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('a[href^="#"]');

// Selecione o primeiro h2 dentro de .animais-info
const animais = document.querySelector('.animais-info');
const primeiroH2 = animais.querySelector('h2');

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[--paragrafos.length]);


// Exercício 2

// Mostre no console cada parágrafo do site
paragrafos.forEach(function(paragrafo) {
    console.log(paragrafo);
})

paragrafos.forEach(paragrafo => console.log(paragrafo)); // Arrow function

// Mostre o texto dos parágrafos no console
paragrafos.forEach(paragrafo => console.log(paragrafo.innerText)); // Arrow function


// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => { // Colocando o argumentos da função entre ()
    console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
    console.log(i++);
});

imgs.forEach(() => i++);