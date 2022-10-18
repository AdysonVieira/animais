export default function initAnimaNumber() {
    const numeros = document.querySelectorAll('[data-anime="numeros"]');
    const containerNumeros = document.getElementById('numeros');
    
    const observer = new MutationObserver(handleAnimaNumber);
    observer.observe(containerNumeros, {attributes: true});

    function handleAnimaNumber(mutation) {
        if (mutation[0].target.classList.contains('ativo')) {
            observer.disconnect;
            animaNumber()
        }
    }

    function animaNumber() {
        numeros.forEach(numero => {
            const total = +numero.innerText;
            const incrementador = total / 70
            let start = 0
            const contador = setInterval(() => {
                start = Math.floor(start + incrementador);
                numero.innerText = start;
                if (start > total) {
                    numero.innerHTML = total;
                    clearInterval(contador)
                }
            }, 20 * Math.random())
        })
    }
}