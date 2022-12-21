export default class ScrollReveal {
    constructor(elements, className) {
        this.elements = document.querySelectorAll(elements);
        this.className = className
        
        // bind para o this da class
        this.getElementDistance = this.getElementDistance.bind(this)
        this.checkDistance = this.checkDistance.bind(this)
    }

    // cria uma nova propriedade onde o valor é array de objetos com o element e o offsetTop (faz um map na NodeList de elementos)
    getElementDistance() {
        this.distance = [...this.elements].map(( element ) => {
            return {
                element,
                offset: element.offsetTop
            }
        })
    }

    // recebe um array de objetos com a distancia  e checa se o topo de cada elemento passou pela metade da tela e adiciona a classe no elemento
    checkDistance() {
        const halfWindowHeight = innerHeight * 0.5;
        this.distance.forEach(( { element, offset } ) => {
            (offset - window.pageYOffset - halfWindowHeight) < 0
            && !element.classList.contains(this.className)
            ? element.classList.add(this.className)
            : ''
        })
    }

    // adiciona o evento de scroll ao window
    addScrollEvent() {
        window.addEventListener('scroll', this.checkDistance )
    }

    // inicia o objeto da class, verifica se contém elementos e inicia a chamada dos métodos
    init() {
        if (this.elements.length) {
            this.addScrollEvent();
            this.getElementDistance();
            this.checkDistance();
        }
        return this;
    }
}