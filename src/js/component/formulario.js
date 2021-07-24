import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Formulario = ({ img, setImg, setNomRep, setRutRep, setNomEmp, setRutEmp }) => {
    const handler = (event) => {
        const imgInp = event.target.files[0]
        if (imgInp){
          setImg(URL.createObjectURL(imgInp))
        }
    }

    const Nombre = (event) => {
        setNomRep(event.target.value)
    }

    const RutNombre = (event) => {
        setRutRep(event.target.value)
    }

    const NombreEmpresa = (event) => {
        setNomEmp(event.target.value)
    }

    const RutEmpresa = (event) => {
        setRutEmp(event.target.value)
    }


  
  return (
    <div className="pt-5 pb-2 d-flex justify-content-center">
        <div className="col-5 bg-secondary p-5 rounded">
          <form runat="server">
            <div className="form-group m-2">
              <label className="float-start m-1">Nombre Representante</label>
              <input type="text" className="form-control m-1" onChange={(e) => Nombre(e)} placeholder="Ingresa Nombre Representante"/>
            </div>
            <div className="form-group m-2">
              <label className="float-start m-1">Rut Representante</label>
              <input type="text" className="form-control m-1" onChange={(e) => RutNombre(e)} placeholder="Ingresa Rut Representante"/>
            </div>
            <div className="form-group m-2">
              <label className="float-start m-1">Nombre de la Empresa</label>
              <input type="text" className="form-control m-1" onChange={(e) => NombreEmpresa(e)} placeholder="Ingresa Nombre Empresa"/>
            </div>
            <div className="form-group m-2">
              <label className="float-start m-1">Rut de la Empresa</label>
              <input type="text" className="form-control m-1" onChange={(e) => RutEmpresa(e)} placeholder="Ingresa Rut Empresa"/>
            </div>
            <div className="form-group m-2">
              <label className="float-start m-1">Elige Nacionalidad</label>
              <select className="form-control m-1" id="exampleFormControlSelect1">
                <option>Chileno</option>
                <option>Extranjero</option>
              </select>
            </div>
          </form>
          <div className="form-group m-2">
            <label className="float-start m-1">Sube Cédula de Identidad</label>
            <input className="form-control m-1" accept="image/*" type='file' id="imgInp" onChange={handler} />
          </div>
        </div>
      <div className="col-5 bg-secondary p-5 rounded" >
          <h2>Cédula de Identidad</h2>
          <img id="blah" src={img} alt="Sube una Cedula y Previsualizala" style={{height:"400px"}}/>
        </div>
    </div>
  )
}

export default Formulario;