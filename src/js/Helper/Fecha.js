export const Hora = () => {
    let fecha = new Date();
    let mes = "";
    if ((fecha.getMonth() + 1) ==1) {
      mes="Enero"
    } else if ((fecha.getMonth() + 1) ==2) {
      mes="Febrero"
    } else if ((fecha.getMonth() + 1) ==3) {
      mes="Marzo"
    } else if ((fecha.getMonth() + 1) ==4) {
      mes="Abril"
    } else if ((fecha.getMonth() + 1) ==5) {
      mes="Mayo"
    } else if ((fecha.getMonth() + 1) ==6) {
      mes="Junio"
    } else if ((fecha.getMonth() + 1) ==7) {
      mes="Julio"
    } else if ((fecha.getMonth() + 1) ==8) {
      mes="Agosto"
    } else if ((fecha.getMonth() + 1) ==9) {
      mes="Septiembre"
    } else if ((fecha.getMonth() + 1) ==10) {
      mes="Octubre"
    } else if ((fecha.getMonth() + 1) ==11) {
      mes="Noviembre"
    } else if ((fecha.getMonth() + 1) ==12) {
      mes="Diciembre"
    } else {
      mes="Actual"
    }

    let fechaCompleta = `${fecha.getDate()} del mes ${mes} de ${fecha.getFullYear()}`;    
    return fechaCompleta;
}