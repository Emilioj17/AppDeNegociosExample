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
            <div className="off-canvas position-left reveal-for-medium no-print" data-off-canvas data-position="left">
                <div className="row column">
                    
                    <br className='no-print'/>
                    <h5 style={{ display: "inline", paddingRight:"30px" }}>DeNegocios.cl   </h5><span className='Submarino' onClick={(e) => HandlerWitch(e)}><GiSubmarine /></span>
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