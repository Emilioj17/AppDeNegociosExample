import React, { Fragment, useContext, } from 'react';
import { Context } from "../store/AppContext";
import { Link, useHistory } from "react-router-dom";
import "../../styles/App.css";
import { GiTRexSkull, GiHamburgerMenu, GiSubmarine } from "react-icons/gi";

const Navbar = ({ witch, setWitch }) => {
    const { store, actions } = useContext(Context);
    const history = useHistory();

    const HandlerWitch = (event) => {
        witch ? setWitch(false) : setWitch(true);
    }

    const HandlerCerrarSesion = (event) => {
        sessionStorage.removeItem("token");
		sessionStorage.removeItem("usuarioActual");
		store.token = null;
		store.usuarioActual = null;
		window.location.reload();
    }

    const NavbarInicio = () => {
        return (
            <div className="off-canvas position-left reveal-for-medium no-print" data-off-canvas data-position="left">
                <div className="row column">
                    <br className='no-print'/>
                    <h5 style={{ display: "inline", paddingRight:"30px" }}>DeNegocios.cl   </h5>
                    <br className='no-print'/>
                    <ul className="vertical menu no-print" style={{maxWidth: '250px'}}>
                        <li className='no-print'><Link to="/">Inicio</Link></li>
                    </ul>
                </div>
            </div>
        )
    }

    const NavbarDesplegado = () => {
        return (
            <div className="off-canvas position-left reveal-for-medium no-print" data-off-canvas data-position="left">
                <div className="row column">
                    <br className='no-print'/>
                    <h5 style={{ display: "inline", paddingRight:"30px" }}>DeNegocios.cl   </h5><span className='Submarino' onClick={(e) => HandlerWitch(e)}><GiSubmarine /></span>
                    <br className='no-print'/>
                    <ul className="vertical menu no-print" style={{maxWidth: '250px'}}>
                        <li className='no-print'><Link to="/">Inicio</Link></li>
                        <li><Link to="/GeneradorDocumentos">Generador de Documentos</Link></li>
                        <li><Link to="/DireccionTributaria">Direccion Tributaria</Link></li>
                        <li><a className='isDisabled'>Contabilidad</a></li>
                        <li><a className='isDisabled'>RRHH</a></li>
                        {store.usuarioActual.tipo == "Administrador" ? (<li><Link to="/Administracion">Admin Usuarios <GiTRexSkull /></Link></li>): null}
                        <li><Link onClick={(e)=>HandlerCerrarSesion(e)}>Cerrar Sesion</Link></li>
                    </ul>
                </div>
            </div>
        )
    }

    const NavbarCortito = () => {
        return (
            <div className='NavbarCortito no-print'>
                <button onClick={(e) => HandlerWitch(e)} data-close>
                    <span aria-hidden="true"><GiHamburgerMenu /></span>
                </button>
                
            </div>
        )
    }

    return (
        <Fragment>
            {store.token == null && store.usuarioActual == null ? <NavbarInicio /> : (witch ? (<NavbarDesplegado/>):(<NavbarCortito/>))}
        </Fragment>
    );
}
 
export default Navbar;