import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "../../styles/App.css";
import { GiTRexSkull, GiHamburgerMenu, GiSubmarine } from "react-icons/gi";



const Navbar = ({ witch, setWitch }) => {
    const HandlerWitch = () => {
        witch ? setWitch(false) : setWitch(true);
    }

    const NavbarDesplegado = () => {
        return (
            <div className="callout no-print NavbarPrincipal" data-closable>
                <button className="close-button no-print" aria-label="Dismiss alert" type="button" onClick={(e)=>HandlerWitch(e)} data-close>
                    <span aria-hidden="true"><GiSubmarine /></span>
                </button>
                <div className="row column">
                    <br className='no-print'/>
                    <h5>DeNegocios.cl</h5>
                    <br className='no-print'/>
                    <ul className="vertical menu no-print" style={{maxWidth: '250px'}}>
                        <li className='no-print'><Link to="/">Inicio</Link></li>
                        <li><Link to="/GeneradorDocumentos">Generador de Documentos</Link></li>
                        <li><Link to="/DireccionTributaria">Direccion Tributaria</Link></li>
                        <li><Link to="#">Contabilidad</Link></li>
                        <li><Link to="/Administracion"><GiTRexSkull/>Administración</Link></li>
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
            {witch ? (<NavbarDesplegado/>):(<NavbarCortito/>)}
        </Fragment>
    );
}
 
export default Navbar;