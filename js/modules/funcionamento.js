export default function initFuncionamento() {
    const funcionamento = document.querySelector('[data-dias]');
    const horario = document.querySelector('[data-horas]')
    const diasSemana = funcionamento.dataset.dias.split(',').map(Number)
    const horasDia = horario.dataset.horas.split(',').map(Number)
    const presenteDia = new Date()
    
    function checkDia(dia, hora) {
        if (diasSemana.includes(dia) && hora[0] >= 8 && hora[1] < 23) {
            funcionamento.classList.add('aberto')
        }
    }
    checkDia(presenteDia.getDay(), presenteDia.getHours())
}