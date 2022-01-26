import React, { Fragment, useState, useContext, useEffect } from 'react';
import { Context } from "../../js/store/AppContext";
import { useHistory } from "react-router-dom";
import '../../styles/GeneradorDocumentos.css';
import cedula from "../../img/cedula.jpg";
import Head from "../component/Head";
import Opciones from "../component/GeneradorDocumentos/Opciones";
import Formulario from "../component/GeneradorDocumentos/Formulario";
import { PoderSII } from "../Helper/GeneradorDocumentos/PoderSII";
import { PoderMunicipal } from "../Helper/GeneradorDocumentos/PoderMunicipal";
import { ContratoMensual } from "../Helper/GeneradorDocumentos/ContratoMensual";
import { ContratoAnual } from "../Helper/GeneradorDocumentos/ContratoAnual";
import { Contrato30dias } from "../Helper/GeneradorDocumentos/Contrato30dias";
import { ContratoContabilidad } from "../Helper/GeneradorDocumentos/ContratoContabilidad";

const GeneradorDocumentos = () => {
    const { store, actions } = useContext(Context);
    const history = useHistory();
    const [img, setImg] = useState(cedula);
    const [datos, setDatos] = useState({
      nombre: "",
      rut: "",
      razon: "",
      rutEmpresa: "",
      fecha: "",
      nacionalidad: ""
    });
    const [opcion, setOpcion] = useState("Poder SII");
    const [alert, setAlert] = useState(false);
    
  useEffect(() => {
      
      
        if (store.usuarioActual == null) {
      history.push("/");
        }
    })
  
    const HandlerClick = () => {
      if (datos.nombre.trim() === "" || datos.rut.trim() === "" || datos.razon.trim() === "" || datos.rutEmpresa.trim() === ""
        || datos.nacionalidad.trim() === "" || datos.fecha.trim() === "") {
        setAlert(true);
      } else {
        setAlert(false);
        if (opcion == "Poder SII" && img != cedula) {
          PoderSII(datos, img);
        } else if (opcion == "Poder Municipal" && img != cedula) {
          PoderMunicipal(datos, img);
        } else if (opcion == "Contrato Arriendo Mensual" && img != cedula) {
          ContratoMensual(datos, img);
        } else if (opcion == "Contrato Arriendo Anual" && img != cedula) {
          ContratoAnual(datos, img);
        } else if (opcion == "Contrato Arriendo 30 dias" && img != cedula) {
          Contrato30dias(datos, img);
        } else if (opcion == "Contrato Contabilidad") {
          ContratoContabilidad(datos);
        } else {
          setAlert(true);
        }
      }
    }
  
    const HandlerReset = () => {
      setDatos({
        nombre: "",
        rut: "",
        razon: "",
        rutEmpresa: "",
        fecha: "",
        nacionalidad: ""
      });
      setImg(cedula);
    }
    
  const titulosHead = ["Bienvenido al Generador de Documentos", "Elige una opción, y genera tus documentos."];

    return (
        <Fragment>
            <Head contenido={titulosHead}/>
            <Opciones opcion={opcion} setOpcion={setOpcion}/>
            <hr />
            {alert?(<div className="callout alert text-center">Todos los Datos son Necesarios</div>):null}
            <Formulario
                img={img}
                setImg={setImg}
                datos={datos}
                setDatos={setDatos}
            />
            <div className="row">
                <div className="small-5 medium-10 columns">
                <button className="button expanded" onClick={(e) => HandlerClick(e)}>Generar {opcion}</button>
                </div>
                <div className="small-5 medium-2 columns">
                <button className="alert button" onClick={(e)=> HandlerReset(e)}>Reset</button>
                </div>
            </div>
        </Fragment>
    );
}
 
export default GeneradorDocumentos;