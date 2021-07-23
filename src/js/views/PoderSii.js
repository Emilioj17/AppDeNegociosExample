import React, { useState } from "react";
import { jsPDF } from "jspdf";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hora from "../component/Hora"

export const PoderSii = () => {
  const [img, setImg] = useState("#")
  const [nomRep, setNomRep] = useState("")
  const [rutRep, setRutRep] = useState("")
  const [nomEmp, setNomEmp] = useState("")
  const [rutEmp, setRutEmp] = useState("")

  const handler = (event) => {
    const imgInp = event.target.files[0]
    if (imgInp){
      setImg(URL.createObjectURL(imgInp))
    }
    console.log(imgInp);
  }
  
  const handler2 = () => {
    
    const doc = new jsPDF();
    doc.setFont("arial");
    doc.setFontSize(10)
    doc.text("Firmar esta Hoja", 10, 10);
    doc.setFontSize(20)
    doc.text("PODER PARA EL SII", 100, 25, { align: "center" });
    doc.line(65, 26, 135, 26)
    doc.setFontSize(12)
    var text1 = `En Santiago de Chile, a ${Hora()}, don(a) ${nomRep}, Rut ${rutRep}, Representante legal de la empresa ${nomEmp}, Rut número ${rutEmp},`
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
    var text2 = "Realizar y ejecutar en mi representación todo tipo de trámites ante el Servicio de Impuestos Internos (SII) de la Unidad que corresponda, como son:"
    var splitTitle2 = doc.splitTextToSize(text2, 190);
    doc.text(10, 105, splitTitle2);
    doc.text("1.- Inscripción en el Rol Único Tributario Empresa, Inicio Actividades, obtención cédulas eRut, F 4415.", 10, 115);
    doc.text("2.- Obtención clave inicial empresa.", 10, 120);
    doc.text("3.- Timbrar Documentación, Facturas, Boletas, Guías de despacho, etc.", 10, 125);
    doc.text("4.- Obtención y tramitación firma electrónica. Inscripción en el Sistema de Facturación Electrónica.", 10, 130);
    doc.text("5.- Acreditar actividades, acreditar domicilio.", 10, 135);
    doc.text("6.- Corregir y Acreditar datos de domicilio y los correspondientes a establecer una Unidad Operativa del SII.", 10, 140);
    doc.text("7.- Tramitación de modificaciones de razón social, capital, socios y representante legal, si corresponde.", 10, 145);
    doc.text("8.- Ser notificado personalmente en nombre del mandante.", 10, 150);
    doc.text("9.- Solicitud de Término de Giro, y todo tipo de trámite relacionado a éste si es que fuese necesario.", 10, 155);
    var text3 = "Este poder autoriza a la persona aquí señalada a firmar los documentos necesarios para llevar a buen término los tramites encomendados por mí ante este Servicio. Este poder tendrá una duración máxima de 6 meses desde la fecha de emisión."
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
    var text4 = `Yo, ${nomRep} C.I. nro. ${rutRep}, autorizo al Sr. Notario don JUAN RICARDO SAN MARTIN URREJOLA, para que autorice mi firma en el Poder para el SII, celebrado con fecha de hoy ${Hora()}.`;
    var splitTitle4 = doc.splitTextToSize(text4, 190);
    doc.text(10, 220, splitTitle4);
    doc.line(65, 244, 135, 244)
    doc.text("Firma",100, 250, { align: "center" })

    // doc.addImage(img, 'JPEG', 15, 40, 180, 160);
    doc.save(`Poder SII para ${nomEmp}.pdf`);
  }

  return (
    <div className="container py-5 d-flex justify-content-center">
        <div className="col-5 bg-secondary p-5 rounded">
          <form runat="server">
            <div className="form-group m-2">
              <label className="float-start m-1">Nombre Representante</label>
              <input type="text" className="form-control m-1" onChange={(event) => { setNomRep(event.target.value) }} placeholder="Ingresa Nombre Representante"/>
            </div>
            <div className="form-group m-2">
              <label className="float-start m-1">Rut Representante</label>
              <input type="text" className="form-control m-1" onChange={(event) => { setRutRep(event.target.value) }} placeholder="Ingresa Rut Representante"/>
            </div>
            <div className="form-group m-2">
              <label className="float-start m-1">Nombre de la Empresa</label>
              <input type="text" className="form-control m-1" onChange={(event) => { setNomEmp(event.target.value) }} placeholder="Ingresa Nombre Empresa"/>
            </div>
            <div className="form-group m-2">
              <label className="float-start m-1">Rut de la Empresa</label>
              <input type="text" className="form-control m-1" onChange={(event) => { setRutEmp(event.target.value) }} placeholder="Ingresa Rut Empresa"/>
            </div>
            <div className="form-group m-2">
              <label className="float-start m-1">Elige Nacionalidad</label>
              <select class="form-control m-1" id="exampleFormControlSelect1">
                <option>Chileno</option>
                <option>Extranjero</option>
              </select>
            </div>
          </form>
          <div className="form-group m-2">
            <label className="float-start m-1">Sube Cédula de Identidad</label>
            <input className="form-control m-1" accept="image/*" type='file' id="imgInp" onChange={handler} />
          </div>
          <button type="button" className="btn btn-primary mt-5" onClick={handler2}>Descargar Documento</button>
        </div>
      <div className="col-5 bg-secondary p-5 rounded" >
          <h2>Cédula de Identidad</h2>
          <img id="blah" src={img} alt="Sube una Cedula y Previsualizala" style={{height:"400px"}}/>
        </div>
    </div>
  )
}