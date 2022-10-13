export default function initDropdown() {
    const dataDropdown = document.querySelectorAll('[data-dropdown]');
    const dropdownMenu = document.querySelector('.menu-dropdown')
    const html = document.documentElement;
        
    dataDropdown.forEach(data => {
        ['click', 'touchstart'].forEach(userEvent => {
            data.addEventListener(userEvent, addActiveClick, {
                capture: false
            })
        })
    })
    
    function addActiveClick(event) {
        event.stopPropagation();
        event.preventDefault(); // lembrar de remover essa linha quando adicionar links as páginas
        dropdownMenu.classList.toggle('active');
    }
    
    function clickOut(element) {
        if(element.classList.contains('active')) {
            element.classList.remove('active');
            ['click', 'touchstart'].forEach(userEvent => {
                html.removeEventListener(userEvent, clickOut, {
                    capture: false
                })
            })
        }
    }
}