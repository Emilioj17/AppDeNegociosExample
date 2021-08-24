import { jsPDF } from "jspdf";
import { Hora } from "../Fecha";

export const ContratoMensual = (datos, img) => {
    let { nombre, rut, razon, rutEmpresa, nacionalidad, fecha } = datos;
    if(fecha==="hoy"){
      fecha = Hora();
      console.log(fecha);
    } else {
      console.log(fecha);
    }
    const doc = new jsPDF();
    doc.setFont("arial");
    doc.setFontSize(20)
    doc.text("CONTRATO DE SUBARRIENDO", 100, 25, { align: "center" });
    doc.line(47, 26, 153, 26);
    doc.setFontSize(12);
    var text1 = `En Santiago de Chile, a ${fecha}, entre don RODRIGO ANDRES ARAYA MONTALVAN, Rut 15.380.582-2, de nacionalidad chilena, domiciliado en Calle Ahumada 254, oficina 806, Comuna de Santiago, por una parte como “SUB ARRENDADOR", y, don(a) ${nombre}, Rut ${rut}, Representante legal de la empresa ${razon}, Rut número ${rutEmpresa}, de nacionalidad ${nacionalidad}, en adelante como el “SUB ARRENDATARIO” quienes han convenido celebrar el siguiente CONTRATO DE SUBARRENDAMIENTO que se regirá por las cláusulas que a continuación se expresan, y en silencio de ellas, por las disposiciones del Código Civil.`
    var splitTitle1 = doc.splitTextToSize(text1, 190);
    doc.text(10, 40, splitTitle1);
    doc.setFont("arial", "bold");
    doc.setFontSize(12)
    doc.text("1° PROPIEDAD", 10, 77);
    doc.line(10, 78, 41, 78)
    doc.setFontSize(12)
    var text2 = "El SUB ARRENDADOR, se encuentra autorizado a sub arrendar parte de la oficina N° 806, en calle Ahumada 254, de la Comuna de Santiago. Por el presente instrumento, el SUB ARRENDADOR, entrega en arriendo, en días y horas hábiles, la utilización de parte de la oficina (Lunes a Viernes de 9:00 a 18:00hrs)."
    var splitTitle2 = doc.splitTextToSize(text2, 190);
    doc.text(10, 85, splitTitle2);
    doc.setFont("arial", "normal");
    doc.setFontSize(12);
    var text3 = "EL SUBARRENDATARIO, declara que los espacios mencionados tendrán como destino Oficina Administrativa, quedando expresamente prohibido introducir en la propiedad material inflamables, explosivo, corrosivo o de cualquier índole que pudiera causarle daño o deterioro, siendo de su exclusiva responsabilidad todo perjuicio a la propiedad o a terceros provocados por tales circunstancias."
    var splitTitle3 = doc.splitTextToSize(text3, 190);
    doc.text(10, 106, splitTitle3);
    var text4 = "El espacio se arrienda en el estado en que se encuentra, el que es conocido por el SUBARRENDATARIO."
    var splitTitle4 = doc.splitTextToSize(text4, 190);
    doc.text(10, 127, splitTitle4);
    var text5 = "Se comprenden los muebles, artefactos eléctricos, y todas las especies incorporadas al inmueble que forman un solo cuerpo con él, de propiedad absoluta del “SUB ARRENDADOR”, por lo que no podrá efectuar mejoras o modificaciones en las instalaciones, así como también no podrá instalar muebles, o cualquier artículo que cambie la actual fisionomía de los espacios."
    var splitTitle5 = doc.splitTextToSize(text5, 190);
    doc.text(10, 133, splitTitle5);
    doc.setFont("arial", "bold");
    doc.text("Señalar que el subarriendo solo será para EFECTOS TRIBUTARIOS Y COMERCIALES.", 10, 155);
    doc.setFont("arial", "normal");
    doc.text("Forman parte de los servicios ofrecidos, los siguientes:", 10, 162);
    var text6 = "1. Dirección Tributaria: Se entiende dirección tributaria, ya que el cliente podrá utilizar la dirección individualizada en la primera clausula, para efectuar el inicio de actividades, cambio de domicilio ante el Servicio de Impuestos Internos (SII), para obtener así el Rut de su empresa, o para timbrar documentos que se refieran a su giro (facturas exentas, con IVA, boletas, etc.)."
    var splitTitle6 = doc.splitTextToSize(text6, 160);
    doc.text(40, 169, splitTitle6);
    var text7 = "2. Dirección Comercial: Se entiende dirección comercial, ya que el cliente podrá obtener su patente municipal.";
    var splitTitle7 = doc.splitTextToSize(text7, 160);
    doc.text(40, 195, splitTitle7);
    var text8 = "3. Recepción de correspondencia: Esta prestación consiste en recibir la correspondencia del cliente, la que se guardará en una carpeta personal, dándosele aviso mediante correo electrónico para su posterior retiro. La empresa no se hace responsable del contenido y el deterioro de la correspondencia y/o encomienda, si así fuera el caso."
    var splitTitle8 = doc.splitTextToSize(text8, 160);
    doc.text(40, 207, splitTitle8);
    var text9 = "Sin perjuicio de lo anterior, queda expresamente prohibido al cliente utilizar el domicilio con otro propósito que no sea el descrito anteriormente, es decir, sólo como dirección tributaria y/o comercial. En consecuencia, el domicilio de la oficina NO podrá ser utilizado de ninguna manera para la obtención de créditos bancarios, financieros y/o comerciales, o de cualquier otra índole."
    var splitTitle9 = doc.splitTextToSize(text9, 190);
    doc.text(10, 230, splitTitle9);
    doc.setFont("arial", "bold");
    doc.setFontSize(12);
    doc.text("2° RENTA", 10, 255);
    doc.line(10, 256, 30, 256);
    doc.setFont("arial", "normal");
    var text10 = "Las partes fijan la renta mensual de sub arriendo por la oficina en $9.900 (nueve mil novecientos pesos) la que deberá ser pagada anticipadamente entre los días 1 y 5 De cada mes en la recepción ubicada en el interior de la oficina, mediante transferencia bancaria o dinero efectivo."
    var splitTitle10 = doc.splitTextToSize(text10, 190);
    doc.text(10, 262, splitTitle10);

    doc.addPage();
    doc.setFontSize(12);
    doc.setFont("arial", "normal");
    doc.text("Si el pago se realiza via transferencia o depósito, deberán ser realizados a la siguiente cuenta:", 10, 20);
    doc.text("BANCO: BANCO ESTADO", 40, 27);
    doc.text("Nombre Empresa: DENEGOCIOS CL SpA", 40, 33);
    doc.text("Rut: 76.717.904-9", 40, 40);
    doc.text("Tipo de Cuenta: Chequera electrónica // cuenta vista", 40, 46);
    doc.text("Número de cuenta: 28670133798", 40, 52);
    doc.text("Correo: pagos@denegocios.cl", 40, 58);
    var text1 = "La renta se reajustará según el IPC (Índice de precios del consumidor) acumulado del año, al momento en que se tenga que renovar el contrato."
    var splitTitle1 = doc.splitTextToSize(text1, 190);
    doc.text(10, 65, splitTitle1);
    doc.setFont("arial", "bold");
    doc.setFontSize(12);
    doc.text("3° PLAZO", 10, 80);
    doc.line(10, 81, 30, 81);
    doc.setFont("arial", "normal");
    var text2 = `El presente contrato empezó a regir el día ${fecha} y durará 2 meses de corrido. No obstante lo anteriormente señalado, este contrato se renovará sucesiva y automáticamente en períodos iguales al contratado, si ninguna de las partes da aviso a la otra con a lo menos 15 días de anticipación a la fecha de su vencimiento, por medio escrito, su deseo de poner término al presente contrato, e informando término de giro o cambio de domicilio ante Servicio de Impuestos Internos.`
    var splitTitle2 = doc.splitTextToSize(text2, 190);
    doc.text(10, 88, splitTitle2);
    doc.setFont("arial", "bold");
    var text3 = "El Cliente puede rescindir contrato antes de lo anteriormente estipulado, es decir el cliente podrá dejar el contrato de arriendo antes del plazo de 2 meses. Para ello deberá dar aviso a través de correo a contacto@denegocios.cl y/o a soporte@denegocios.cl de que ya no utilizará nuestro domicilio y seguir las indicaciones que se le entregarán en dicho momento.";
    var splitTitle3 = doc.splitTextToSize(text3, 190);
    doc.text(10, 115, splitTitle3);
    doc.setFont("arial", "bold");
    doc.setFontSize(12);
    doc.text("4° MULTAS, GASTOS Y COSTAS", 10, 140);
    doc.line(10, 141, 75, 141);
    doc.setFont("arial", "normal");
    var text4 = "Se conviene expresamente que por el no pago oportuno de la renta convenida, el SUB ARRENDATARIO, pagará una multa igual al interés máximo convencional para operaciones reajustables, multa que regirá desde el día siguiente del plazo que tienen para hacerlo y hasta la fecha que se realice el pago efectivo de la obligación.";
    var splitTitle4 = doc.splitTextToSize(text4, 190);
    doc.text(10, 147, splitTitle4);
    var text5 = "En caso de mensualidades con 30 días de atraso, se aplicará gasto de cobranza a partir del día 31 de mora, como porcentaje de la mensualidad adeudada.";
    var splitTitle5 = doc.splitTextToSize(text5, 190);
    doc.text(10, 163, splitTitle5);
    var text6 = "EL SUBARRENDATARIO, autoriza en este acto, para que en caso de simple retardo, mora o incumplimiento de las obligaciones contraídas en el presente contrato sus datos personales y los demás derivados del presente contrato, puedan ser ingresados, procesados, tratados y comunicados a terceros sin restricciones, en la base de datos o sistema de información comercial que el Sub Arrendador, determine.";
    var splitTitle6 = doc.splitTextToSize(text6, 190);
    doc.text(10, 175, splitTitle6);
    var text7 = "En la eventualidad que el SUB ARRENDADOR, tenga que recurrir a los servicios externos para el cobro de la renta o rentas de servicio, cuentas impagas o cualquier valor relacionado con el sub arrendamiento, los gastos y costas serán de costa del SUB ARRENDATARIO, aceptando desde este instante pagar los valores que se cobren por estos servicios.";
    var splitTitle7 = doc.splitTextToSize(text7, 190);
    doc.text(10, 197, splitTitle7);
    doc.setFont("arial", "bold");
    doc.setFontSize(12);
    doc.text("5° TERMINACIÓN ANTICIPADA DEL CONTRATO", 10, 220);
    doc.line(10, 221, 110, 221);
    doc.setFont("arial", "normal");
    var text8 = "EL SUB ARRENDADOR, podrá poner término de inmediato al presente contrato, por las siguientes causales que las partes convienen en elevar a la calidad de esenciales o determinantes en este contrato:";
    var splitTitle8 = doc.splitTextToSize(text8, 190);
    doc.text(10, 228, splitTitle8);
    doc.setFont("arial", "bold");
    doc.text("1. Si destina la oficina a cualquier otro fin que no sea el indicado en este instrumento.", 25, 240);
    doc.text("2. Si cede, subarrienda o transfiere a cualquier título el presente contrato.", 25, 246);
    doc.text("3. Si contrae compromisos económicos o legales que afecten los intereses del SUBARRENDADOR.", 25, 251);
    doc.text("4. Si causa inconvenientes a los vecinos, malos tratos con otros clientes o el personal de la oficina.", 25, 256);
    doc.text("5. Si hace mal uso de las instalaciones como de los servicios ofrecidos por el SUBARRENDADOR.", 25, 261);
    doc.text("6. Si no cancela dentro de los plazos el monto del arriendo.", 25, 266);
    doc.addPage();
    doc.setFont("arial");
    doc.setFontSize(10)
    doc.text("Firmar esta Hoja", 7, 7);
    doc.setFont("arial", "bold");
    doc.setFontSize(12);
    doc.text("6° DOMICILIO", 10, 20);
    doc.line(10, 21, 40, 21);
    doc.setFont("arial", "normal");
    doc.text("Para todos los efectos derivados del presente contrato, las partes fijan domicilio en la ciudad de Santiago.", 10, 27);
    doc.setFont("arial", "bold");
    doc.setFontSize(12);
    doc.text("7° EJEMPLARES DEL CONTRATO", 10, 37);
    doc.line(10, 38, 80, 38);
    doc.setFont("arial", "normal");
    var text1 = "El presente contrato se otorga en 2 (dos) ejemplares del mismo tenor, quedando 1 (uno) en poder del SUBARRENDADOR, y 1 (uno) en poder del SUBARRENDATARIO.";
    var splitTitle1 = doc.splitTextToSize(text1, 190);
    doc.text(10, 44, splitTitle1);
    doc.setFont("arial", "bold");
    doc.setFontSize(12);
    doc.text("8° RESPONSABILIDAD", 10, 60);
    doc.line(10, 61, 55, 61);
    doc.setFont("arial", "normal");
    var text2 = "DeNegocios.cl no se hará cargo por multas e intereses ocasionados por falta de patente o vencimiento de ésta en el domicilio contratado.";
    var splitTitle2 = doc.splitTextToSize(text2, 190);
    doc.text(10, 67, splitTitle2);
    doc.line(10, 102, 90, 102);
    doc.text("Rodrigo Andres Araya Montalvan", 10, 107);
    doc.text("15.380.582-2", 10, 112);
    doc.line(10, 152, 90, 152);
    doc.text(`${razon}`, 10, 157);
    doc.text(`${rutEmpresa}`, 10, 162);
    doc.text(`P.p. ${nombre}`, 10, 167);
    doc.text(`${rut}`, 10, 172);    

    doc.addPage();
    doc.setFont("arial");
    doc.setFontSize(10);
    doc.text("Firmar esta Hoja", 10, 10);
    doc.addImage(img, 'JPEG', 30, 40, 140, 160);
    doc.setFontSize(12);
    var text4 = `Yo, ${nombre} C.I. nro. ${rut}, autorizo al Sr. Notario don JUAN RICARDO SAN MARTIN URREJOLA, para que autorice mi firma en el Contrato de SubArriendo, celebrado con fecha de hoy ${fecha}.`;
    var splitTitle4 = doc.splitTextToSize(text4, 190);
    doc.text(10, 220, splitTitle4);
    doc.line(65, 244, 135, 244);
    doc.text("Firma", 100, 250, { align: "center" });
    
    doc.save(`Contrato Arriendo Mensual para ${razon}.pdf`);
  }