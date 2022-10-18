export default function initScrollReveal() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');

    function ativaScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight * 0.5;
            const eVisivel = (sectionTop - windowHeight) < 0;
            if (eVisivel && !section.classList.contains('ativo')) {
                section.classList.add('ativo');
            }
        })
    }
    ativaScroll()
    window.addEventListener('scroll', ativaScroll)
}