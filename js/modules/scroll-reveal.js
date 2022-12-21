export default class ScrollReveal {
    constructor(elements, className) {
        this.elements = document.querySelectorAll(elements);
        this.className = className
        
        // bind para o this da class
        this.handleElements = this.handleElements.bind(this)
        this.constructor.animation = this.constructor.animation.bind(this)
    }

    // constructor que recebe um elemento, verifica se o topo do elemento está na metade da tela e adiciona a class de animação
    static animation(element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight * 0.5;
        const isVisible = (elementTop - windowHeight) < 0;
        (isVisible && !element.classList.contains(this.className))
        ? element.classList.add(this.className)
        : ''
    }

    // adiciona o evento de scroll ao window
    addScrollEvent() {
        window.addEventListener('scroll', this.handleElements)
    }

    // percorre os elementos os elementos e 
    handleElements() {
        this.elements.forEach(( element ) => this.constructor.animation( element ))
    }

    // inicia o objeto da class, verifica se contém elementos e inicia a chamada do evento
    init() {
        if (this.elements.length) {
            this.constructor.animation(this.elements[0])
            this.addScrollEvent();
        }
        return this;
    }
}