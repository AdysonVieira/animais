export default function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] div')

    if (tabMenu && tabContent) {
        ativaTab(0);

        function ativaTab(index) {
            const direcao = tabContent[index].dataset.anima
            tabContent.forEach(content => {
                content.classList.remove('ativo', direcao)
            })
            tabContent[index].classList.add('ativo', direcao)
        }

        tabMenu.forEach((imagem, index) => {
            imagem.addEventListener('click', () => {
                return ativaTab(index);
            })

        })
    }
}