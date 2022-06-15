window.onload = function(){
    somarLarguraImagens()
}

// Exercício 1 ########################################

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


// Exercício 2 ########################################

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


// Exercício 3 ########################################

// Adicione a classe ativo a todos os intens do menu
const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach(function(item) {
    item.classList.add('ativo1')
})

itensMenu.forEach(item => item.classList.add('ativo2'));

// Remova a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach(item => item.classList.remove('ativo2'));
itensMenu[0].classList.add('ativo2')

// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img');
imagens.forEach(img => console.log(img.hasAttribute('alt')))

// Verifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="http"]')
linkExterno.setAttribute('href', 'https://www.linkedin.com/in/adysonvieira/')



// Exercício 4 ########################################

// Verifique a distância da primeira imagem em relação ao topo da página
const primeiraImagem = document.querySelector('img')

const distanciaDoTop = primeiraImagem.offsetTop
const primeiraImagemRect = primeiraImagem.getBoundingClientRect();

console.log(distanciaDoTop, primeiraImagemRect.top)

// Retorne a soma da largura de todas as imagens
function somarLarguraImagens() {
    const imagens = document.querySelectorAll('img')
    let totalLargura = 0;

    imagens.forEach(imagem => {
        totalLargura += imagem.offsetWidth;
    })

    console.log(totalLargura)
}
// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com dedo. (48px/48px de acordo com o google)

const todosLinks = document.querySelectorAll('a')
const tela = window.matchMedia('(max-width: 600px)').matches;
if (tela) {
    todosLinks.forEach(link => {
        const altura = link.offsetHeight;
        const largura = link.offsetWidth;
        if (largura >= 48 && altura >= 48) {
            console.log(link, 'O link possui uma altura adequada')
        }   else {
            console.log(link, 'O link não possui um tamanho adequado')
        }
    })
}

// Se o browser for menor que 720px adicione a classe menu-mobile ao menu
const menu = document.querySelector('.menu');
const larguraBrowser = window.innerWidth;
const larguraBrowser2 = window.matchMedia('(max-width: 720px)').matches;

if (larguraBrowser < 720) {
    menu.classList.add('menu-mobile')
}

if (larguraBrowser2) {
    menu.classList.add('menu-mobile2')
}


// Exercício 5 ########################################

// Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens, caso eles possuam o mesmo. Previna o comportamento padrão desses links
const linksInterno = document.querySelectorAll('a[href^="#"');

function adicionaAtivo(event) {
    event.preventDefault();
    linksInterno.forEach(link => {
        link.classList.remove('ativo')
    })
    event.target.classList.add('ativo');
}

linksInterno.forEach((link) => {
    link.addEventListener('click', adicionaAtivo);
})


// Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *')
function mostraElemento(event) {
    console.log(event.currentTarget)
}

todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', mostraElemento)
})

// Utilizando o código anterior, ao invês de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento.
function removeElemento(event) {
    event.currentTarget.remove()
}

todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', removeElemento)
})

// Se o usuário clicar na tecla (t) aumente todo o texto do site
function aumentaTexto(event) {
    if (event.key === 't') {
        document.documentElement.style.fontSize = `${120}%` // documentElement = elemento html
    }
}

function diminuiTexto(event) {
    if (event.key === 'r') {
        document.documentElement.style.fontSize = `${80}%`
    }
}

window.addEventListener('keydown', aumentaTexto);
window.addEventListener('keydown', diminuiTexto);