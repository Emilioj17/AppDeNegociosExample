import React from 'react';
import imagen2 from "../../img/gif3.gif";

const Head = ({ contenido }) => {
    const [titulo, subtitulo] = contenido;
    return (
        <div className="callout primary">
            <div className="row column inline">
                <h1>{titulo}</h1><img src={imagen2} alt="" className='float-right'/>
                <p className="lead">{subtitulo}</p>
            </div>
        </div>
    );
}

export default Head;