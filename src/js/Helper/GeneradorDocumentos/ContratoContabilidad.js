import { jsPDF } from "jspdf";
import { Hora } from "../Fecha";
import logopequeno from "../../../img/logopequeno.png";
import direccionfinal from "../../../img/direccionfinal.png";

export const ContratoContabilidad = (datos) => {
	let { nombre, rut, razon, rutEmpresa, fecha, nacionalidad } = datos;
	if (fecha === "hoy") {
		fecha = Hora();
	}
	const doc = new jsPDF();
	doc.addImage(logopequeno, "PNG", 3, 3, 25, 10);
	doc.setFont("arial", "bold");
	doc.setFontSize(20);
	doc.text("CONTRATO PRESTACIÓN SERVICIOS DE", 34, 20);
	doc.text("CONTABILIDAD.", 76, 30);
	doc.setFontSize(12);
	doc.setFont("arial", "normal");
	var text1 = `En Santiago de Chile, a ${fecha}, entre DENEGOCIOS.CL SpA, Rut 76.717.904-9, domiciliado en Ahumada 254, oficinas 806 y 903, Comuna de Santiago Centro, Región Metropolitana, en lo sucesivo los “PRESTADORES” y ${razon}, Rut: ${rutEmpresa}, representada legalmente por don/doña ${nombre}, Rut: ${rut}, de nacionalidad ${nacionalidad}, en lo sucesivo “EL CLIENTE”, se ha convenido el siguiente contrato de prestación de servicios.`;
	var splitTitle1 = doc.splitTextToSize(text1, 190);
	doc.text(10, 40, splitTitle1);
	doc.setFont("arial", "bold");
	doc.text("PRIMERO", 10, 72);
	doc.line(10, 73, 30, 73);
	doc.setFont("arial", "normal");
	var text2 =
		"El cliente contrata a DENEGOCIOS.CL SpA, para que preste servicios en calidad de CONTADOR para realizar las siguiente labores:";
	var splitTitle2 = doc.splitTextToSize(text2, 190);
	doc.text(10, 78, splitTitle2);
	doc.text(
		"a) Declaración de impuestos mensuales en el Formulario 29.",
		20,
		89
	);
	doc.text("b) Confección de libro de compra y ventas.", 20, 95);
	var text3 =
		"c) Confección de contratos de trabajos, liquidaciones de sueldos, finiquitos, libros de remuneraciones, cuando correspondiere.";
	var splitTitle3 = doc.splitTextToSize(text3, 180);
	doc.text(20, 101, splitTitle3);
	doc.text("d) Asesoría contable.", 20, 112);
	doc.setFont("arial", "bold");
	doc.text("SEGUNDO", 10, 120);
	doc.line(10, 121, 30, 121);
	doc.setFont("arial", "normal");
	var text4 =
		"Los honorarios del servicio de contabilidad se regirán acorde a la siguiente tabla de precios/tarifas.";
	var splitTitle4 = doc.splitTextToSize(text4, 180);
	doc.text(10, 127, splitTitle4);
	doc.setDrawColor(0);
	doc.setFillColor(255, 255, 0);
	doc.rect(10, 128, 100, 10, "FD");
	doc.text("Planes", 12, 135);
	doc.setDrawColor(0);
	doc.setFillColor(255, 255, 0);
	doc.rect(110, 128, 90, 10, "FD");
	doc.text(`Tarifa ($) a la fecha de ${fecha}`, 112, 135);
	doc.rect(10, 138, 100, 10);
	doc.text("Ventas sobre o iguales a 10 millones", 12, 145);
	doc.rect(110, 138, 90, 10);
	doc.text("$80.000", 112, 145);
	doc.rect(10, 148, 100, 10);
	doc.text("Ventas sobre 5 millones pero bajo 10 millones", 12, 155);
	doc.rect(110, 148, 90, 10);
	doc.text("$40.000", 112, 155);
	doc.rect(10, 158, 100, 10);
	doc.text("Ventas menores o iguales a 5 millones", 12, 165);
	doc.rect(110, 158, 90, 10);
	doc.text("$25.000", 112, 165);
	doc.rect(10, 168, 100, 10);
	doc.text("Solo Compras", 12, 175);
	doc.rect(110, 168, 90, 10);
	doc.text("$25.000", 112, 175);
	doc.rect(10, 178, 100, 10);
	doc.text("Declaración sin Movimiento", 12, 185);
	doc.rect(110, 178, 90, 10);
	doc.text("$10.000", 112, 185);
	doc.rect(10, 188, 100, 10);
	doc.text("Valor mensual por trabajador (liquidacion + contrato)", 12, 195);
	doc.rect(110, 188, 90, 10);
	doc.text("$4.500", 112, 195);
	doc.rect(10, 198, 100, 10);
	doc.text("Valor mensual por trabajador finiquito", 12, 205);
	doc.rect(110, 198, 90, 10);
	doc.text("$2.500", 112, 205);
	var text5 =
		"El tramo del valor del servicio se calcula mensualmente acorde a las ventas de la empresa, por lo que el valor mensual de los servicios contables puede variar en el mes a mes. Por ejemplo: Si en el mes de Marzo, la empresa No tuvo movimientos, corresponde a un cobro de $10.000 por una “Declaración SIN Movimiento”. Si al mes siguiente, Abril, la empresa tuvo ventas por 15 millones de pesos, corresponde a un cobro de $80.000 por una declaración de “Ventas sobre o iguales a 10 millones”. Si al mes subsiguiente, Mayo, la empresa vende 4 millones de pesos, corresponde a un cobro de $25.000 por una declaración de “Ventas menores o iguales a 5 millones”.";
	var splitTitle5 = doc.splitTextToSize(text5, 190);
	doc.text(10, 218, splitTitle5);
	var text6 =
		"Cualquiera de los tramos anteriormente señalados incluye las remuneraciones de hasta 2 trabajadores (salvo tramo de $10.000), dueños de empresa inclusive. A partir del tercer trabajador, se pagará adicional $4.500 por cada uno. Los finiquitos no aplican a la anterior regla, y por cada finiquito redactado se adicionará al valor mensual $2.500 independientemente del tramo en el que se encuentre la venta mensual. ";
	var splitTitle6 = doc.splitTextToSize(text6, 190);
	doc.text(10, 255, splitTitle6);
	doc.addImage(direccionfinal, "PNG", 80, 280, 45, 10);

	doc.addPage();
	doc.addImage(logopequeno, "PNG", 3, 3, 25, 10);
	doc.setFont("arial", "bold");
	doc.text("TERCERO", 10, 15);
	doc.line(10, 16, 30, 16);
	doc.setFont("arial", "normal");
	doc.text(
		"No están incluidos dentro de los servicios señalados anteriormente:",
		10,
		22
	);
	doc.text("- Recepción de dinero y pago de Impuestos o Cotizaciones.", 15, 28);
	doc.text("- Retiro de Documentos.", 15, 34);
	var text1 =
		"- Contratos Laborales Especiales o con cláusulas particulares que requieran la intervención de un abogado para su redacción o que estén por fuera de los modelos actualmente estandarizados para la gran mayoría de las empresas.";
	var splitTitle1 = doc.splitTextToSize(text1, 185);
	doc.text(15, 40, splitTitle1);
	doc.text(
		"- Trámites o Procesos relacionados a la Inspección del Trabajo, dígase F30, F30-1 y similares.",
		15,
		55
	);
	doc.text(
		"- Representación ante el Servicio de Impuestos Internos ante fiscalizaciones y otros.",
		15,
		61
	);
	doc.text(
		"- Emisión de Facturas y otros Documentos Tributarios Electrónicos o en Físico.",
		15,
		67
	);
	doc.text("- Emisión de Carpetas Tributarias.", 15, 73);
	doc.text(
		"- Trámites electrónicos o presenciales ante la Inspección del Trabajo, AFC,Fonasa, Isapres, AFP.",
		15,
		79
	);
	var text2 =
		"- Preparación de Inventarios, Balances, auditorias, defensorías tributarias, confección de declaraciones juradas, confecciones de declaraciones de Rentas, reclamación de impuestos.";
	var splitTitle2 = doc.splitTextToSize(text2, 185);
	doc.text(15, 85, splitTitle2);
	var text2 =
		"Dado el caso, se pagarán como extraordinarios los trabajos anteriores si es que DENEGOCIOS.CL SpA acepta realizar dichas gestiones. Esto, previo acuerdo por escrito entre las partes.";
	var splitTitle2 = doc.splitTextToSize(text2, 190);
	doc.text(10, 100, splitTitle2);
	doc.setFont("arial", "bold");
	doc.text("CUARTO", 10, 115);
	doc.line(10, 116, 30, 116);
	doc.setFont("arial", "normal");
	var text3 =
		"En lo que respecta al período que llamaremos “Declaración de Renta”. Esto es: El Balance Anual, la Declaración de Impuesto a la Renta F22, las declaraciones Juradas de Horarios, Sueldos y Retiros, además de la Determinación de Capital Propio Tributario, Renta Líquida Imponible y FUT, documentos y libros necesarios para la Confección del F/22 Declaración de Renta; y otros relacionados a la “Declaración de Renta”.";
	var splitTitle3 = doc.splitTextToSize(text3, 190);
	doc.text(10, 122, splitTitle3);
	var text4 =
		"Lo anterior, podrá ser tomado por EL CLIENTE como servicio adicional prestado por DENEGOCIOS.CL SpA. Esto es opcional y para nada involucra una obligación para el cliente. Si es que el cliente decide aceptar este servicio adicional, este tendrá un costo adicional de $150.000 para empresa y no tiene relación alguna con el costo del Servicio mensual. Las condiciones de este servicio, así como su valor final, serán confirmados por DENEGOCIOS.CL SpA a su debido tiempo. Por lo demás, el cliente podrá consultar por ellos y contratar en cualquier momento. DENEGOCIOS.CL SpA no se hará responsable por multas asociadas a la no presentación de “Declaración de Renta” asociadas a la No Contratación de este Servicio con nuestra empresa.";
	var splitTitle4 = doc.splitTextToSize(text4, 190);
	doc.text(10, 145, splitTitle4);
	doc.setFont("arial", "bold");
	doc.text("QUINTO", 10, 185);
	doc.line(10, 186, 30, 186);
	doc.setFont("arial", "normal");
	var text5 =
		"Los honorarios del servicio serán informados por el prestador a su debido tiempo, esto a lo menos 5 días antes del día 30 de cada mes. Los honorarios del servicio deberán ser cancelados directamente a DENEGOCIOS.CL SpA como máximo los días 5 del mes siguiente a lo informado, en dinero efectivo directamente en las oficinas del prestador, transferencia o depósito a la cuenta que el prestador indique.";
	var splitTitle5 = doc.splitTextToSize(text5, 190);
	doc.text(10, 192, splitTitle5);
	var text6 =
		"Si el pago se realiza vía transferencia o depósito, deberán ser realizados a la siguiente cuenta:";
	var splitTitle6 = doc.splitTextToSize(text6, 190);
	doc.text(10, 213, splitTitle6);
	doc.setFont("arial", "bold");
	doc.text("BANCO: BANCO ESTADO", 20, 221);
	doc.text("Nombre Empresa: DENEGOCIOS CL SpA", 20, 228);
	doc.text("Rut: 76.717.904-9", 20, 235);
	doc.text("Tipo de Cuenta: Chequera electrónica // cuenta vista", 20, 242);
	doc.text("Número de cuenta: 28670133798", 20, 249);
	doc.text("Correo: pagos@denegocios.cl", 20, 256);
	doc.setFont("arial", "normal");
	doc.text(
		"DENEGOCIOS.CL SpA, tras recibir el pago, podrá emitir una factura por el servicio.",
		10,
		266
	);
	doc.addImage(direccionfinal, "PNG", 80, 280, 45, 10);

	doc.addPage();
	doc.addImage(logopequeno, "PNG", 3, 3, 25, 10);
	doc.addImage(direccionfinal, "PNG", 80, 285, 45, 10);
	var text1 =
		"Las partes convienen en que las tarifas indicadas en la tabla única de este contrato, esto es en el Artículo Segundo, pueden sufrir cambios en el tiempo. Estos cambios en la tarifa serán convenidos por las partes de común acuerdo, en el entendido que en caso de que las partes no lograran llegar a un acuerdo en el incremento de la prestación, el presente contrato podrá darse por terminado sin responsabilidad de alguna para las partes.";
	var splitTitle1 = doc.splitTextToSize(text1, 190);
	doc.text(10, 20, splitTitle1);
	doc.setFont("arial", "bold");
	doc.text("SEXTO:VIGENCIA", 10, 45);
	doc.line(10, 46, 50, 46);
	doc.setFont("arial", "normal");
	var text2 =
		"La vigencia de este Contrato será por 6 meses (seis meses) de corrido, iniciando a partir del día en el que este documento se firme. Tendrá renovación automática por períodos iguales de tiempo, si es que ninguna de las partes se proclama. Asimismo el PRESTADOR se obliga a entregar al CLIENTE a más tardar el día en que sufra efectos la terminación a que se refiere esta cláusula o la rescisión a que se refiere la cláusula Décima Quinta de este contrato, toda la documentación e información confidencial del CLIENTE que tenga en su poder con motivo de LOS SERVICIOS, así como un informe detallado de todas las acciones ejercidas en cada uno de los asuntos que le hayan sido encomendados por virtud de este contrato.";
	var splitTitle2 = doc.splitTextToSize(text2, 190);
	doc.text(10, 52, splitTitle2);
	var text3 =
		"El presente contrato podrá ponerse término por ambas partes con 15 días corridos de anticipación vía escrita, para la entrega de la información por parte de DENEGOCIOS.CL SpA., y por parte del cliente el pago de los servicios efectuados hasta esa fecha.";
	var splitTitle3 = doc.splitTextToSize(text3, 190);
	doc.text(10, 90, splitTitle3);
	doc.setFont("arial", "bold");
	doc.text("SEPTIMO: CLAUSULA PENAL ", 10, 110);
	doc.line(10, 111, 70, 111);
	doc.setFont("arial", "normal");
	var text4 =
		"El no pago de uno o cualquiera de los montos señalados en la cláusula cuarta Autorizará a DENEGOCIOS.CL SpA, Rol único tributario número 76.717.904-9, para que en caso de simple retardo, mora o incumplimiento de las obligaciones contraídas en documentos tales como: contratos, facturas, órdenes de compra, solicitudes de compra, guías de pedidos, cartas de porte, pagarés, letras de cambio u otros: mis datos personales y los demás derivados de dichos de dichos documentos puedan ser ingresados, procesados, tratados y comunicados a terceros sin restricciones, en el registro o banco de datos de sistemas de información comercial y además dará derecho a DENEGOCIOS.CL SpA a poner término en forma unilateral a la prestación de los servicios que son objeto del presente contrato, liberando al cliente de la responsabilidad procesal posterior a su incumplimiento; aceptando desde ya la renuncia al mandato judicial en las causas señaladas en la cláusula primera. Dará derecho además a la empresa a exigir el cobro del total de lo adeudado como una obligación pura y simple, sin perjuicios de las demás acciones legales que correspondan.";
	var splitTitle4 = doc.splitTextToSize(text4, 190);
	doc.text(10, 117, splitTitle4);
	doc.setFont("arial", "bold");
	doc.text("OCTAVA.- NO EXCLUSIVIDAD PARA EL PRESTADOR.", 10, 175);
	doc.line(10, 176, 120, 176);
	doc.setFont("arial", "normal");
	var text5 =
		"Queda expresamente pactado que el presente contrato no crea exclusividad entre las partes, por lo que sí es voluntad del CLIENTE, éste podrá contratar cualquier servicio igual o similara los proporcionados por EL PRESTADOR, con la persona o personas, físicas o morales, nacionales o extranjeras que a sus intereses convenga, sin necesidad de notificarlo al PRESTADOR.";
	var splitTitle5 = doc.splitTextToSize(text5, 190);
	doc.text(10, 182, splitTitle5);
	doc.setFont("arial", "bold");
	doc.text("NOVENA.- CONFIDENCIALIDAD.", 10, 205);
	doc.line(10, 206, 75, 206);
	doc.setFont("arial", "normal");
	var text5 =
		"EL PRESTADOR y el personal de éste que ponga a disposición del CLIENTE para la prestación de LOS SERVICIOS, previo a la firma del presente contrato y durante su vigencia, tendrán acceso a diversa información del CLIENTE que se entenderá como información confidencial, por loque el PRESTADOR se obliga a no divulgar por ningún medio y a ninguna persona, dicha información, ni los datos y resultados obtenidos como motivo de la prestación de LOS SERVICIOS, sin autorización expresa y por escrito del CLIENTE.";
	var splitTitle5 = doc.splitTextToSize(text5, 190);
	doc.text(10, 212, splitTitle5);
	var text6 =
		"La obligación del PRESTADOR a que se refiere el párrafo anterior, surtirá sus efectos a partir de la fecha de la firma del presente contrato y durante su vigencia, de un año posterior a la terminación de la relación de prestación de servicios entre las partes, con el fin de proteger la confidencialidad de todos y cada uno de los intereses del CLIENTE.";
	var splitTitle6 = doc.splitTextToSize(text6, 190);
	doc.text(10, 240, splitTitle6);
	var text7 =
		"El PRESTADOR se obliga incondicionalmente a hacer extensiva estas disposiciones a sus empleados o cualquier persona que necesariamente debe tener acceso a información confidencial, por lo que EL PRESTADOR deberá procurar los medios adecuados para poder comprometer a las personas ya mencionadas, a observar estrictamente estos acuerdos, de lo contrario, el PRESTADOR o cualquiera de las personas aquí señaladas se harán acreedoras a lo dispuesto por la legislación aplicable para tal efecto.";
	var splitTitle7 = doc.splitTextToSize(text7, 190);
	doc.text(10, 263, splitTitle7);

	doc.addPage();
	doc.addImage(logopequeno, "PNG", 3, 3, 25, 10);
	doc.addImage(direccionfinal, "PNG", 80, 285, 45, 10);
	doc.setFont("arial", "bold");
	doc.text("DÉCIMA.- INDEPENDENCIA DE LAS PARTES.", 10, 20);
	doc.line(10, 21, 105, 21);
	doc.setFont("arial", "normal");
	var text1 =
		"El presente contrato no presentade manera tácita o expresa, cualquier tipo de alianza, sociedad, asociación, asociación en participación, o transferencia de acciones, o participación de alguna en la capital social y/o patrimonio según aplique, de cada una de las partes, así como tampoco aplica una relación laboral entre éstas, por lo que se manifiesta en este acto la independencia de ambas partes respecto a sus derechos y obligaciones derivados de la celebración de este contrato, en relación con terceros.";
	var splitTitle1 = doc.splitTextToSize(text1, 190);
	doc.text(10, 27, splitTitle1);
	var text2 =
		"No obstante lo anterior, el PRESTADOR se obliga a proporcionar los servicios objeto de este contrato, de la manera que EL CLIENTE se lo solicite o instruye y siempre en escrito apego a las leyes y procedimientos que en su caso sean aplicables.";
	var splitTitle2 = doc.splitTextToSize(text2, 190);
	doc.text(10, 53, splitTitle2);
	doc.setFont("arial", "bold");
	doc.text("DÉCIMA PRIMERA.- NOTIFICACIONES.", 10, 70);
	doc.line(10, 71, 80, 71);
	doc.setFont("arial", "normal");
	var text3 =
		"Cualquier tipo de notificación entre las partes deberá ser por escrito vía correo electrónico, copiando expresamente a contabilidad@denegocios.cl y a contacto@denegocios.cl.";
	var splitTitle3 = doc.splitTextToSize(text3, 190);
	doc.text(10, 77, splitTitle3);
	doc.setFont("arial", "bold");
	doc.text("DÉCIMA SEGUNDA.- REVISIONES Y AUDITORÍAS.", 10, 89);
	doc.line(10, 90, 115, 90);
	doc.setFont("arial", "normal");
	var text4 =
		"Las partes convienen que el CLIENTE podrá en todo momento efectuar, por medio de las personas que estimen conveniente, revisiones, auditorías, verificaciones y podrás solicitar al PRESTADOR la elaboración y entrega de todo tipo de reportes y controles relacionados con la prestación de LOS SERVICIOS y el PRESTADOR se obliga a dar todas las facilidades necesarias para la realización de las revisiones, auditorías y verificaciones y entrega al CLIENTE en la forma y plazo que éste solicite los citados reportes y/o controles.";
	var splitTitle4 = doc.splitTextToSize(text4, 190);
	doc.text(10, 96, splitTitle4);
	doc.setFont("arial", "bold");
	doc.text("DÉCIMO TERCERA.- MODIFICACIONES AL CONTRATO.", 10, 122);
	doc.line(10, 123, 130, 123);
	doc.setFont("arial", "normal");
	doc.text(
		"Este contrato nopodrá ser modificado o alterado, excepto mediante acuerdo por escrito, firmado por ambas partes.",
		10,
		128
	);
	doc.setFont("arial", "bold");
	doc.text("DÉCIMO CUARTA.- MANIFESTACIÓN DE LA VOLUNTAD.", 10, 135);
	doc.line(10, 136, 130, 136);
	doc.setFont("arial", "normal");
	var text5 =
		"El presente contrato constituye el acuerdo de voluntades total y final entre las partes, por lo que cualquier aviso, oferta, comunicación, contrato, convenio o acuerdo en general sea verbal y/o escrito, adoptado entre las partes con anterioridad a la firma del presente, queda a partir de la fecha de firma de este instrumento sin valor alguno.";
	var splitTitle5 = doc.splitTextToSize(text5, 190);
	doc.text(10, 141, splitTitle5);
	doc.setFont("arial", "bold");
	doc.text("DÉCIMO QUINTA", 10, 157);
	doc.line(10, 158, 48, 158);
	doc.setFont("arial", "normal");
	var text6 =
		"Las multas e intereses por el pago fuera de plazo de las obligaciones tributarias y previsionales del cliente serán de su exclusiva responsabilidad, no así, ya sea por olvido u omisión involuntaria de parte de DENEGOCIOS.CL SpA, quien será este último el que costeara dichos cargos.";
	var splitTitle6 = doc.splitTextToSize(text6, 190);
	doc.text(10, 162, splitTitle6);

	doc.setFont("arial", "bold");
	doc.text("DÉCIMA SEXTA.- JURISDICCIÓN.-", 10, 180);
	doc.line(10, 181, 80, 181);
	doc.setFont("arial", "normal");
	var text7 =
		"Para la interpretación y cumplimiento de este contrato, las partes se someten expresamente a las leyes y tribunales de la ciudad de Santiago, Chile, renunciando a cualquier otro fuero que pudiera corresponderles por razón de sus domicilios presentes o futuros o por cualquierotra causa.";
	var splitTitle7 = doc.splitTextToSize(text7, 190);
	doc.text(10, 186, splitTitle7);
	var text8 = `Enteradas de su contenido y alcance legal y no existiendo lesión, error, dolo, mala fe o violencia, las partes firman de conformidad, por duplicado el presente Contrato, en la ciudad de Santiago, Chile a ${fecha}, fecha en la cual entra en vigor.`;
	var splitTitle8 = doc.splitTextToSize(text8, 190);
	doc.text(10, 202, splitTitle8);

	doc.line(10, 230, 90, 230);
	doc.text("DENEGOCIOS.CL SpA", 10, 235);
	doc.text("76.717.904-9", 10, 240);
	doc.line(10, 270, 90, 270);
	doc.text(`${razon}`, 10, 275);
	doc.text(`${rutEmpresa}`, 10, 280);
	doc.text(`P.p. ${nombre}`, 10, 285);
	doc.text(`${rut}`, 10, 290);

	doc.save(`Contrato Contabilidad para ${razon}.pdf`);
};
