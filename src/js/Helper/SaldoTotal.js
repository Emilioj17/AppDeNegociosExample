export const SaldoTotal = {
    montoSaldo: function (lista, meses=false) {
        let m2019 = lista.dt2019ID.reduce((currentSum, number)=> {
            return currentSum += (parseInt(number.montoCobrado) - parseInt(number.montoPagado))
        }, 0)

        let m2020 = lista.dt2020ID.reduce((currentSum, number)=> {
            return currentSum += (parseInt(number.montoCobrado) - parseInt(number.montoPagado))
        }, 0)

        let m2021 = lista.dt2021ID.reduce((currentSum, number)=> {
            return currentSum += (parseInt(number.montoCobrado) - parseInt(number.montoPagado))
        }, 0)

        let m2022 = lista.dt2022ID.reduce((currentSum, number)=> {
            return currentSum += (parseInt(number.montoCobrado) - parseInt(number.montoPagado))
        }, 0)

        let m2023 = lista.dt2023ID.reduce((currentSum, number)=> {
            return currentSum += (parseInt(number.montoCobrado) - parseInt(number.montoPagado))
        }, 0)

        let m2024 = lista.dt2024ID.reduce((currentSum, number)=> {
            return currentSum += (parseInt(number.montoCobrado) - parseInt(number.montoPagado))
        }, 0)

        return (m2019+m2020+m2021+m2022)
    }
}