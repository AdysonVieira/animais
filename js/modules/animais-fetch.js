import initAnimaNumber from "./anime-number.js";

export default function initAnimaisFetch() {
    const gridNumeros = document.querySelector('.grid-numeros')

    async function animaisFetch(){
        const animaisJSON = await ( await fetch('../../animaisapi.json') ).json();
        animaisJSON.forEach(animal => {
            createAnimal(animal)
        });

        initAnimaNumber();
    }
    
    function createAnimal(animal) {
        const newAnimal = document.createElement('li')
        newAnimal.classList.add('card-animal')
        newAnimal.innerHTML = `<h3>${animal.especie}</h3><span data-anime="numeros">${animal.total}</span>`;
        gridNumeros.appendChild(newAnimal)
        return newAnimal
    }
    
    animaisFetch()

}