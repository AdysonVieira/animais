import clickOut from "./clickout.js";

export default class MenuMobile {
    constructor(btnMenu, menu, className) {
        this.btnMenu = document.querySelector(btnMenu);
        this.menu = document.querySelector(menu);
        this.className = className;

        // bind para o this
        this.addMobile = this.addMobile.bind(this)
    }

    // adiciona o evento ao botão Menu
    addMenuEvent() {
        this.btnMenu.addEventListener('click', this.addMobile);
    }
    
    // adiciona a classe ativo no menu e no botão e chama a função de clique fora para remover a class ativo
    addMobile() {
        this.menu.classList.add(this.className)
        this.btnMenu.classList.add(this.className)
        clickOut(this.menu, () => {
            this.btnMenu.classList.remove(this.className)
            this.menu.classList.remove(this.className)
        })
    }
    // inicia e chama a função de adicionar o evento ao botão
    init() {
        if (this.btnMenu && this.menu) {
            this.addMenuEvent();
        }
    }
}
