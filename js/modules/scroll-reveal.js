export default class ScrollReveal {
    constructor(elements, className) {
        this.elements = document.querySelectorAll(elements);
        this.className = className
        
        // bind
        this.handleElements = this.handleElements.bind(this)
        this.constructor.animation = this.constructor.animation.bind(this)
    }

    static animation(element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight * 0.5;
        const isVisible = (elementTop - windowHeight) < 0;
        (isVisible && !element.classList.contains(this.className))
        ? element.classList.add(this.className)
        : ''
    }

    addScrollEvent() {
        window.addEventListener('scroll', this.handleElements)
    }

    handleElements() {
        this.elements.forEach(( element ) => this.constructor.animation( element ))
    }

    init() {
        if (this.elements.length) {
            this.constructor.animation(this.elements[0])
            this.addScrollEvent();
        }
        return this;
    }
}