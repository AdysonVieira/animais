// // Exercício 1

// // Retorne no console todas as imagens do site
// const imagensHTML = document.getElementsByTagName('img'); // Ao vivo
// const imagensNode = document.querySelectorAll('img'); // Estático


// // Retorne no console apenas as imagens que começam com a palava imagem
// const imagensImg = document.querySelectorAll('img[src^="img/imagem"]');


// // Selecione todos os links internos (onde o href começa com #)
// const linksInternos = document.querySelectorAll('a[href^="#"]');

// // Selecione o primeiro h2 dentro de .animais-info
// const animais = document.querySelector('.animais-info');
// const primeiroH2 = animais.querySelector('h2');

// // Selecione o último p do site
// const paragrafos = document.querySelectorAll('p');
// console.log(paragrafos[--paragrafos.length]);


// // Exercício 2

// // Mostre no console cada parágrafo do site
// paragrafos.forEach(function(paragrafo) {
//     console.log(paragrafo);
// })

// paragrafos.forEach(paragrafo => console.log(paragrafo)); // Arrow function

// // Mostre o texto dos parágrafos no console
// paragrafos.forEach(paragrafo => console.log(paragrafo.innerText)); // Arrow function


// // Como corrigir os erros abaixo:
// const imgs = document.querySelectorAll('img');

// imgs.forEach((item, index) => { // Colocando o argumentos da função entre ()
//     console.log(item, index);
// });

// let i = 0;
// imgs.forEach(() => {
//     console.log(i++);
// });

// imgs.forEach(() => i++);


// // Exercício 3

// // Adicione a classe ativo a todos os intens do menu
// const itensMenu = document.querySelectorAll('.menu a');

// itensMenu.forEach(function(item) {
//     item.classList.add('ativo1')
// })

// itensMenu.forEach(item => item.classList.add('ativo2'));

// // Remova a classe ativo de todos os itens do menu e mantenha apenas no primeiro
// itensMenu.forEach(item => item.classList.remove('ativo2'));
// itensMenu[0].classList.add('ativo2')

// // Verifique se as imagens possuem o atributo alt
// const imagens = document.querySelectorAll('img');
// imagens.forEach(img => console.log(img.hasAttribute('alt')))

// // Verifique o href do link externo no menu
// const linkExterno = document.querySelector('a[href^="http"]')
// linkExterno.setAttribute('href', 'https://www.linkedin.com/in/adysonvieira/')



// Exercício 4

// Verifique a distância da primeira imagem em relação ao topo da página
const primeiraImagem = document.querySelector('img')

const distanciaDoTop = primeiraImagem.offsetTop
const primeiraImagemRect = primeiraImagem.getBoundingClientRect();

console.log(distanciaDoTop, primeiraImagemRect.top)

// Retorne a soma da largura de todas as imagens

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com dedo. (48px/48px de acordo com o google)

// Se o browser for menor que 720px adicione a classe menu-mobile ao menu