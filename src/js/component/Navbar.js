import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "../../styles/App.css";

const Navbar = () => {
    return (
        <Fragment>
            <div className="off-canvas position-left reveal-for-medium no-print" data-off-canvas data-position="left">
                <div className="numbero row column">
                    <br className='no-print'/>
                    <h5>DeNegocios.cl</h5>
                    <br className='no-print'/>
                    <ul className="vertical menu no-print" style={{maxWidth: '250px'}}>
                        <li className='no-print'><Link to="/">Inicio</Link></li>
                        <li><Link to="/GeneradorDocumentos">Generador de Documentos</Link></li>
                        <li><Link to="/DireccionTributaria">Direccion Tributaria</Link></li>
                        <li><Link to="#">Contabilidad</Link></li>
                        <li><Link to="/Administracion">Administración</Link></li>
                    </ul>
                </div>
            </div>
            <div className="row column show-for-small-only no-print">
                <br className='no-print'/>
                <h5>DeNegocios.cl</h5>
                <br className='no-print'/>
                <ul className='no-print' style={{maxWidth: '250px'}}>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/GeneradorDocumentos">Generador de Documentos</Link></li>
                    <li><Link to="/DireccionTributaria">Direccion Tributaria</Link></li>
                    <li><Link to="#">Contabilidad</Link></li>
                    <li><Link to="/Administracion">Administración</Link></li>
                </ul>
            </div>
        </Fragment>
    );
}
 
export default Navbar;