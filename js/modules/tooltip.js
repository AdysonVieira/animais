export default class Tooltip {
    constructor(elements) {
        this.elements = document.querySelectorAll(elements);

        // bind do callback para o objeto
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
    }
    // adiciona o evento aos elementos
    addTooltipEvents() {
        this.elements.forEach(element => {
            element.addEventListener('mouseover', this.onMouseOver);
        });
    }

    // cria a tooltipbox
    createTooltipBox(element) {
        const tooltip = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tooltip.classList.add('tooltip');
        tooltip.innerHTML = text;
        document.body.appendChild(tooltip);
        this.tooltip = tooltip; // adicionando a tooltipBox criada nas propriedades do objeto
    }

    // cria uma tooltipBox quando o mouse passa por cima do elemento e adiciona eventos no elemento
    onMouseOver( {currentTarget} ) {
        this.createTooltipBox(currentTarget);
        currentTarget.addEventListener('mousemove', this.onMouseMove);
        currentTarget.addEventListener('mouseleave', this.onMouseLeave);
    }
    
    // modifica o posicionamento da tooltip enquanto o mouse está em cima do elemento
    onMouseMove( {pageX, pageY} ) {
        (pageX + this.tooltip.getBoundingClientRect().width > window.innerWidth) 
        ? this.tooltip.style.left = pageX - this.tooltip.getBoundingClientRect().width + 'px'
        : this.tooltip.style.left = pageX + 20 + 'px';
        this.tooltip.style.top = pageY + 20 +'px';
    }

    // remove os eventos do elemento quando o mouse sai do mesmo
    onMouseLeave( {currentTarget} ) {
        this.tooltip.remove()
        currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
        currentTarget.removeEventListener('mousemove', this.onMouseMove);
    }
    
    // inicia a classe e verifica se contém valores
    init() {
        if (this.elements.length) {
            this.addTooltipEvents();
        }
        return this;
    }
}
