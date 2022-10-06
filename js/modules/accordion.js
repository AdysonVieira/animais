export default function initAccordion() {
    const perguntas = document.querySelectorAll('[data-anime="accordion"] dt');
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