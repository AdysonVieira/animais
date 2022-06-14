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


