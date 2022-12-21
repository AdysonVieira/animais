export default class AnimaNumber {
    // recebe o(s) numero(s), o container que vai ser observado e o nome da classe que vai ser adicionada ao classList do container
    constructor(numbers, container, classAddContainer) {
        this.numbers = document.querySelectorAll(numbers);
        this.container = document.querySelector(container);
        this.classAddContainer = classAddContainer

        // bind do callback para o objeto da class
        this.handleObserver = this.handleObserver.bind(this)
    }
    
    // metódo do construtor que recebe um elemento com números e o anima
    static animaNumber(element) {
        const total = +element.innerText;
        const increment = total / 70
        let start = 0
        const counter = setInterval(() => {
            start = Math.floor(start + increment);
            element.innerText = start;
            if (start > total) {
                element.innerHTML = total;
                clearInterval(counter)
            }
        }, 20 * Math.random())
    }

    // recebe os elementos e percorre cada um chamando a função animaNumber (função que faz parte do constructor da Class declarada com o static )
    handleNumbers() {
        this.numbers.forEach(( number ) => this.constructor.animaNumber( number ))
    }
    
    // verifica se o observador encontrou a mutação, disconecta o observador e chama a função handleNumbers
    handleObserver(mutation) {
        if (mutation[0].target.classList.contains(this.classAddContainer)) {
            this.observ.disconnect;
            this.handleNumbers();
        }
    }

    // cria um observador de mutação
    observer() {
        this.observ = new MutationObserver(this.handleObserver);
        this.observ.observe(this.container, {attributes: true});
    }
    
    init() {
        if (this.numbers.length && this.container) {
            this.observer();
        }
        return this
    }
}
