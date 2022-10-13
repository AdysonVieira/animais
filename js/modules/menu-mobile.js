export default function initMenuMobile() {
    const btnMenu = document.querySelector('[data-menu="button"]');
    const menu = document.querySelector('[data-menu="items"]');
    
    btnMenu.addEventListener('click', toggleMobile)

    function toggleMobile() {
        menu.classList.toggle('active')
        btnMenu.classList.toggle('active')
    }
}