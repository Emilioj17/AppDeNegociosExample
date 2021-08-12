import React from 'react';
import { Link } from "react-router-dom";
import "../../styles/App.css";

const Navbar = () => {
    return (
        <div className="numbero off-canvas position-left reveal-for-large" id="my-info" data-off-canvas data-position="left">
            <div className="numbero row column">
            <br />
            <h5>DeNegocios.cl</h5>
            <br />
            <ul className="vertical menu" data-responsive-menu="drilldown medium-accordion" style={{maxWidth: '250px'}}>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/GeneradorDocumentos">Generador de Documentos</Link></li>
                <li><Link to="#">Direccion Tributaria</Link></li>
                <li><Link to="#">Contabilidad</Link></li>
                <li><Link to="#">Administración</Link></li>
            </ul>
            </div>
        </div>
    );
}
 
export default Navbar;