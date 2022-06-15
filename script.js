const animaisGaleria = document.querySelector('.animais-galeria');

const altura = animaisGaleria.offsetHeight;
const distanciaTop = animaisGaleria.offsetTop
console.log(altura, distanciaTop)

const rect = animaisGaleria.getBoundingClientRect();
console.log(rect)

window.addEventListener('scroll', event => {
    if (window.pageYOffset > rect.height) {
        console.log('passou')
    }
})

const small = window.matchMedia('(max-width:600px)');
if (small.matches) {
    console.log('menor que 600px')
}

console.log(small.matches)

const img = document.querySelector('img');

img.addEventListener('click', (event) => {
    console.log(event)
})

function galeriaCallback(event) {
    console.log(event.currentTarget)
    console.log(this.getAttribute('href'))
}

animaisGaleria.addEventListener('click', galeriaCallback);


const linkExterno = document.querySelector('a[href^="http"]')

function linkCallback(event) {
    event.preventDefault();
    console.log(this)
    console.log(this.getAttribute('href'))
}

linkExterno.addEventListener('click', linkCallback)




const h1 = document.querySelector('h1');

function callback(event) {
    console.log(event.type, event)
}

console.log(h1)

h1.addEventListener('click', callback);
h1.addEventListener('mouseenter', callback);
h1.addEventListener('mousemove', callback);
window.addEventListener('scroll', callback);
window.addEventListener('resize', callback); // quando a página é redimencionada
window.addEventListener('keydown', callback); // quando uma tecla é apertada


function callback2(event) {
    console.log(event.key)
    if (event.key === 'a') {
        document.body.classList.toggle('ativo')
    }
}

window.addEventListener('keydown', callback2)



const imagens = document.querySelectorAll('img');

function handleImagem(event) {
    console.log(event.target, event.target.getAttribute('src'));
}

imagens.forEach((img) => {
    img.addEventListener('click', handleImagem );
})