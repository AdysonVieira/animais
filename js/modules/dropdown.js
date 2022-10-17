import clickOut from "./clickout.js";

export default function initDropdown() {
    const dataDropdown = document.querySelectorAll('[data-dropdown]');
    
    dataDropdown.forEach(element => {
        ['click', 'touchstart'].forEach(userEvent => {
            element.addEventListener(userEvent, addActiveClick)
        })
    })
    
        
    function addActiveClick(event) {
        event.preventDefault(); // lembrar de remover essa linha quando adicionar links as páginas
        event.stopPropagation();
        this.classList.add('active');
        clickOut(this, ['click', 'touchstart'], (event) => {
            event.stopPropagation();
            this.classList.remove('active');
        })
    }
}