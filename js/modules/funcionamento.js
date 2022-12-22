export default class Funcionamento {
    constructor(dias, horario) {
        this.dias = document.querySelector(dias);
        this.horario = document.querySelector(horario)
        this.presenteDia = new Date()
    }
    // busca os valores passados no dataset, separa e transforma em numero
    dataFuncionamento() {
        this.diasSemana = this.dias.dataset.dias.split(',').map(Number)
        this.horasDia = this.horario.dataset.horas.split(',').map(Number)
    }

    // compara se os dias e horario são iguais ao da data e hora atual
    checkDia(dia, hora) {
        (this.diasSemana.includes(dia) && this.horasDia[0] <= hora && this.horasDia[1] > hora)
        ? this.dias.classList.add('aberto')
        : this.dias.classList.remove('aberto')
    }

    init() {
        if (this.dias && this.horario) {
            this.dataFuncionamento();
            this.checkDia(this.presenteDia.getDay(), this.presenteDia.getUTCHours() - 3 );
        }
        return this;
    }
}