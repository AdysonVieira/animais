import AnimaNumber from "./anime-number.js";

export default function initAnimaisFetch() {
    const gridNumeros = document.querySelector('.grid-numeros');

    async function animaisFetch(){
        try {
            const animaisJSON = await ( await fetch('../../animaisapi.json') ).json();
            animaisJSON.forEach(animal => {
                createAnimal(animal);
            });
            
            const animaNumeros = new AnimaNumber('[data-anime="numeros"]', '#numeros', 'ativo')
            animaNumeros.init();

        } catch(erro) {
            console.log(erro);
        }
    }
    function createAnimal( {especie, total} ) {
        const newAnimal = document.createElement('li');
        newAnimal.classList.add('card-animal');
        newAnimal.innerHTML = `<h3>${especie}</h3><span data-anime="numeros">${total}</span>`;
        gridNumeros.appendChild(newAnimal);
        return newAnimal;
    }
    animaisFetch();
}
