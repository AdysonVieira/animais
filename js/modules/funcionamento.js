export default function initFuncionamento() {
    const funcionamento = document.querySelector('[data-dias]');
    const horario = document.querySelector('[data-horas]')
    const diasSemana = funcionamento.dataset.dias.split(',').map(Number)
    const horasDia = horario.dataset.horas.split(',').map(Number)
    const presenteDia = new Date()

    function checkDia(dia, hora) {
        if (diasSemana.includes(dia) && horasDia[0] <= hora && horasDia[1] > hora) {
            funcionamento.classList.add('aberto')
        } else {
            funcionamento.classList.remove('aberto')
        }
    }
    checkDia(presenteDia.getDay(), presenteDia.getHours())
}