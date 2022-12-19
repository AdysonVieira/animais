export default class Accordion {
    constructor(elements) {
        this.elements = document.querySelectorAll(elements);
        this.activeClass = 'ativo'
    }
    
    // adiciona a classe ativo nos elementos
    show(element) {
        element.classList.toggle(this.activeClass);
        element.nextElementSibling.classList.toggle(this.activeClass);
        
        // Acessibilidade
        const ariaControl = element.getAttribute('aria-controls');
        const resposta = document.getElementById(ariaControl);
        if (resposta.classList.contains('ativo')) {
            element.setAttribute('aria-expanded', true)
        }   else {
            element.setAttribute('aria-expanded', false)
        }
    }

    // Inicia a classe e adiciona o evento de clique nos elementos
    init() {
        // verifica se há elementos
        if (this.elements.length) {
            this.show(this.elements[0]) // deixa a primeira resposta ativa
            this.elements.forEach((element) => {
                element.addEventListener('click', () => this.show(element))
            })
        }
    }
}
