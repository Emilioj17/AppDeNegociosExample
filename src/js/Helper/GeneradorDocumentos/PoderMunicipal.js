import { jsPDF } from "jspdf";
import { Hora } from "../Fecha";

export const PoderMunicipal = (datos, img) => {
    let { nombre, rut, razon, rutEmpresa, fecha, ...demas } = datos;
    if(fecha==="hoy"){
      fecha = Hora();
      console.log(fecha);
    } else {
      console.log(fecha);
    }
    const doc = new jsPDF();
    doc.setFont("arial");
    doc.setFontSize(10)
    doc.text("Firmar esta Hoja", 10, 10);
    doc.setFontSize(20)
    doc.text("PODER PARA LA MUNICIPALIDAD", 100, 25, { align: "center" });
    doc.line(40, 26, 160, 26)
    doc.setFontSize(12)
    var text1 = `En Santiago de Chile, a ${fecha}, don(a) ${nombre}, Rut ${rut}, Representante legal de la empresa ${razon}, Rut número ${rutEmpresa},`
    var splitTitle1 = doc.splitTextToSize(text1, 190);
    doc.text(10, 45, splitTitle1);
    doc.text("Viene a delegar y conferir poder a:", 10, 60);
    doc.text("Juana Lorena Briceño Nuñez", 10, 70);
    doc.text("C.I. N° 11.949.042-1", 80, 70);
    doc.text("Rodrigo Andres Araya Montalvan", 10, 75);
    doc.text("C.I. N° 15.380.582-2", 80, 75);
    doc.text("Victor Alejandro Vera Vega", 10, 80);
    doc.text("C.I. N° 16.748.193-0", 80, 80);
    doc.setFont("arial","bold");
    doc.text("PARA LOS SIGUIENTES EFECTOS:", 10, 100);
    doc.setFont("arial", "normal");
    var text2 = "Realizar y ejecutar en mi representación todo tipo de trámites ante la Municipalidad que corresponda, como son:"
    var splitTitle2 = doc.splitTextToSize(text2, 190);
    doc.text(10, 105, splitTitle2);
    doc.text("1.- Tramitación y obtención de Patentes.", 10, 115);
    doc.text("2.- Pago de patentes.", 10, 120);
    doc.text("3.- Cualquier otro tramite que corresponda ante la municipalidad..", 10, 125);
    doc.text("4.- Cualquier otro tramite referente a la obtención de patente municipal y registros propios de cada giro.", 10, 130);
    var text3 = "Este poder autoriza a las personas aquí señalada a firmar los documentos necesarios para llevar a buen término los tramites encomendados por mí ante este Servicio. Este poder tendrá una duración máxima de 6 meses desde la fecha de emisión."
    var splitTitle3 = doc.splitTextToSize(text3, 190);
    doc.text(10, 170, splitTitle3);
    doc.line(65, 214, 135, 214)
    doc.text("FIRMA DEL MANDANTE", 100, 220, { align: "center" });
    doc.addPage()
    doc.setFont("arial");
    doc.setFontSize(10)
    doc.text("Firmar esta Hoja", 10, 10);
    doc.addImage(img, 'JPEG', 30, 40, 140, 160);
    doc.addPage()
    doc.setFont("arial");
    doc.setFontSize(10)
    doc.text("Firmar esta Hoja", 10, 10);
    doc.addImage(img, 'JPEG', 30, 40, 140, 160);
    doc.setFontSize(12)
    var text4 = `Yo, ${nombre} C.I. nro. ${rut}, autorizo al Sr. Notario don JUAN RICARDO SAN MARTIN URREJOLA, para que autorice mi firma en el Poder para la Municipalidad, celebrado con fecha de hoy ${fecha}.`;
    var splitTitle4 = doc.splitTextToSize(text4, 190);
    doc.text(10, 220, splitTitle4);
    doc.line(65, 244, 135, 244)
    doc.text("Firma",100, 250, { align: "center" });
    
    doc.save(`Poder Municipal para ${razon}.pdf`);
  }