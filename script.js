window.onload = function() {
    tabNav();
    accordion();
}

function tabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent div')

    if (tabMenu && tabContent) {
        ativaTab(0);

        function ativaTab(index) {
            tabContent.forEach(content => {
                content.classList.remove('ativo')
            })
            tabContent[index].classList.add('ativo')
        }

        tabMenu.forEach((imagem, index) => {
            imagem.addEventListener('click', () => {
                return ativaTab(index);
            })

        })
    }
}

function accordion() {
    const perguntas = document.querySelectorAll('dt');
    const respostas = document.querySelectorAll('dd');
    const classeAtivo = 'ativo';
    
    if (perguntas.length) {
        perguntas[0].classList.add(classeAtivo);
        perguntas[0].nextElementSibling.classList.add(classeAtivo);
        
        function mostrarResposta(event) {
            this.classList.toggle(classeAtivo);
            this.nextElementSibling.classList.toggle(classeAtivo); // this equivale ao elemento pergunta
            
            // Acessibilidade
            const ariaControl = this.getAttribute('aria-controls');
            const resposta = document.getElementById(ariaControl);
            if (resposta.classList.contains('ativo')) {
                this.setAttribute('aria-expanded', true)
            }   else {
                this.setAttribute('aria-expanded', false)
            }

        }

        perguntas.forEach((pergunta) => {
            pergunta.addEventListener('click', mostrarResposta)
        });
    }
}