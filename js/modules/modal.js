export default class Modal {
    constructor(btnOpenModal, btnCloseModal, container) {
        this.btnOpenModal = document.querySelector(btnOpenModal)
        this.btnCloseModal = document.querySelector(btnCloseModal)
        this.container = document.querySelector(container)

        // fazendo o bind do callback this.btnOpenModal e this.btnCloseModal para fazer referência ao this Modal (class)
        this.eventToggleModal = this.eventToggleModal.bind(this)
        this.closeClickModal = this.closeClickModal.bind(this)
        this.closeKeyModal = this.closeKeyModal.bind(this)
    }
    // adiciona e remove a classe ativo do Modal
    toggleModal() {
        this.container.classList.toggle( 'ativo' );
    }

    eventToggleModal( event ) {
        event.preventDefault();
        this.toggleModal()
    }

    // adiciona os eventos aos elementos
    addModalEvents() {
        this.btnOpenModal.addEventListener( 'click', this.eventToggleModal ) // o this no callback faz referência a propriedade this.btnOpenModal, precisa fazer o bind para o this Modal
        this.btnCloseModal.addEventListener( 'click', this.eventToggleModal ) // se não fizer o bind a função será chamada this.propriedade.eventToggleModal(), o que dá erro
        this.container.addEventListener( 'click', this.closeClickModal )
        window.addEventListener('keydown', this.closeKeyModal )
    }
    
    // fecha o modal se for clicado no container
    closeClickModal( event ) {
        if( this.container === event.target ) {
            this.toggleModal()
        }
    }

    // fecha o modal se a tecla ESC for pressionada
    closeKeyModal( event ) {
        const modalActive = this.container.classList.contains( 'ativo' )
        if( modalActive && event.key === 'Escape' ) {
            this.toggleModal()
        }
    }
    
    // verifica se as propriedades existem e inicia a classe
    init() {
        if ( this.btnOpenModal && this.btnCloseModal && this.container ) {
            this.addModalEvents()
        }
    }
}