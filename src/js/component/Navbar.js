import React from 'react';
import imagen from "../../img/gif.gif";
import "../../styles/App.css";

const Navbar = () => {
    return (
        <div className="numbero off-canvas position-left reveal-for-large" id="my-info" data-off-canvas data-position="left">
            <div className="numbero row column">
            <br />
            <h5>DeNegocios.cl</h5>
            <br />
            <img src={imagen} alt="" />
            </div>
        </div>
    );
}
 
export default Navbar;