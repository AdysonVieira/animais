export default class TabNav {
    constructor(menu, content) {
        this.tabMenu = document.querySelectorAll(menu)
        this.tabContent = document.querySelectorAll(content)
    }
    
    // Ativa a tab de acordo com o index do mesmo valor
    activeTab(index) {
        const direcao = this.tabContent[index].dataset.anima;
        this.tabContent.forEach(content => {
            content.classList.remove('ativo', direcao);
        });
        this.tabContent[index].classList.add('ativo', direcao);
        
    }
    
    // Verifica se os elementos existem e adiciona os eventos nas tabs
    init() {
        if(this.tabMenu.length && this.tabContent.length) {
            this.activeTab(0);
            this.tabMenu.forEach((item, index) => {
                item.addEventListener('click', () => this.activeTab(index));
            })
        };
    }
}