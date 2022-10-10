export default function initDropdown() {
    const dataDropdown = document.querySelectorAll('[data-dropdown]');
    const dropdownMenu = document.querySelector('.dropdown-menu')

    function addActiveClick(event) {
        event.stopPropagation();
        dropdownMenu.classList.toggle('active')
    }

    dataDropdown.forEach(data => {
        const events = ['click', 'touchstart']
        data.addEventListener(events, addActiveClick, {
            capture: false
        })
    })
}