import React, { useState } from 'react';

// Este formulario es del Generador de Documentos

const Formulario = ({ img, setImg, datos, setDatos }) => {
    const [fecha, setFecha] = useState(false);
    const handlerImg = (event) => {
        const imgInp = event.target.files[0]
        if (imgInp){
          setImg(URL.createObjectURL(imgInp))
        }
      }
    
    const Handler = (event) => {
        setDatos({ ...datos, [event.target.name]: event.target.value })
    };

    const setFechaHoy = () => {
        setFecha(false);
        setDatos({ ...datos, fecha: "hoy" });
    };

    const setFechaExtacta = () => {
        setFecha(true);
        setDatos({ ...datos, fecha: "" });
    }

    return (
        <div className="row">
            <div className="medium-6 columns">
            <label>Nombre Representante
                    <input type="text" placeholder="Nombre Completo" value={datos.nombre} name="nombre" onChange={(e)=>Handler(e)}/>
            </label>
            <label>Rut de Representante Legal
                <input type="text" placeholder="17.123.123-K" value={datos.rut} name="rut" onChange={(e)=>Handler(e)}/>
            </label>
            <label>Razón Social Empresa
                <input type="text" placeholder="Nombre Completo SpA" value={datos.razon} name="razon" onChange={(e)=>Handler(e)}/>
            </label>
            <label>Rut Empresa
                <input type="text" placeholder="76.717.904-9" value={datos.rutEmpresa} name="rutEmpresa" onChange={(e)=>Handler(e)}/>
            </label>
            <div className="">
                <label className="">Elige Nacionalidad</label>
                <select className="" id="exampleFormControlSelect1" value={datos.nacionalidad} name="nacionalidad" onChange={(e)=>Handler(e)}>
                <option>Elige una opción...</option>
                <option value="Chilena">Chilena</option>
                <option value="Extranjera">Extranjera</option>
                </select>
            </div>
            <div>
                <label>Fecha</label>
                <input type="radio" id="html" name="fav_language" value="hoy" onClick={(e)=>setFechaHoy(e)}/>
                <label htmlFor="html">HOY</label>
                <input type="radio" id="html" name="fav_language" value="fecha exacta" onClick={(e)=>setFechaExtacta(e)}/>
                <label htmlFor="html">FECHA EXACTA</label>
            </div>
            {(fecha)?(
                <label>Fecha
                    <input type="text" placeholder="4 de Agosto de 1588" value={datos.fecha} name="fecha" onChange={(e)=>Handler(e)}/>
                </label>
            ):null}
            <div className="Sube-Cedula">
                <label className="">Sube Cédula de Identidad</label>
                <input className="" accept="image/*" type='file' id="imgInp" onChange={handlerImg}/>
            </div>
            </div>
            <div className="medium-6 columns ImagenCedula">
            <h2>Cédula de Identidad</h2>
            <img id="blah" src={img} alt="Sube una Cedula y Previsualizala" style={{height:"400px"}}/>
            </div>
        </div>
    );
}
 
export default Formulario;