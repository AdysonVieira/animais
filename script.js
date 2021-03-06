window.onload = function() {
    tabNav();
    accordion();
    iniciaAtivaScroll();
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
    const classeAtivo = 'ativo';
    
    if (perguntas.length) {
        perguntas[0].classList.add(classeAtivo);
        perguntas[0].nextElementSibling.classList.add(classeAtivo);
        
        function mostrarResposta() {
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

function iniciaAtivaScroll() {
    const sections = document.querySelectorAll('.js-scroll');

    function ativaScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight * 0.6;
            if ((sectionTop - windowHeight) < 0) {
                section.classList.add('ativo')
            }
        })
    }

    ativaScroll();
    window.addEventListener('scroll', ativaScroll)
}