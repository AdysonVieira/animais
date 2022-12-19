import clickOut from "./clickout.js";

export default function initMenuMobile() {
    const btnMenu = document.querySelector('[data-menu="button"]');
    const menu = document.querySelector('[data-menu="items"]');
    
    btnMenu.addEventListener('click', addMobile);
    
    function addMobile() {
        menu.classList.add('active')
        btnMenu.classList.add('active')
        clickOut(this, () => {
            this.classList.remove('active')
        })
        clickOut(menu, () => {
            menu.classList.remove('active')
        })
    }
}