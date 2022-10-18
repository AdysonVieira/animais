import clickOut from "./clickout.js";

export default function initDropdown() {
    const dataDropdown = document.querySelectorAll('[data-dropdown]');
    
    dataDropdown.forEach(element => {
        element.addEventListener('click', addActiveClick)
    })
    
        
    function addActiveClick(event) {
        event.preventDefault(); // lembrar de remover essa linha quando adicionar links as páginas
        event.stopPropagation();
        this.classList.add('menu-active');
        clickOut(this, () => {
            this.classList.remove('menu-active');
        })
    }
}