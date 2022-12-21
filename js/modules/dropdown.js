import clickOut from "./clickout.js";

export default class Dropdown {
    constructor(dataDropdown) {
        this.dataDropdown = document.querySelectorAll(dataDropdown);
        
        // bind
        this.addActiveClick = this.addActiveClick.bind(this)
    }
    
    addDropdownEvent() {
        this.dataDropdown.forEach(menu => {
            menu.addEventListener('click', this.addActiveClick)
        })
    }
    
    addActiveClick(event) {
        event.preventDefault();
        event.stopPropagation();
        event.target.classList.add('menu-active');
        clickOut(event.target, () => {
            event.target.classList.remove('menu-active');
        })
    }

    init() {
        if (this.dataDropdown.length) {
            this.addDropdownEvent()
        }
    }
}