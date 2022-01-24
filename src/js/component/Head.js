import React from 'react';

const Head = ({ contenido }) => {
    const [titulo, subtitulo] = contenido;
    return (
        <div className="callout primary no-print">
            <div className="row column inline">
                <h4>{titulo}</h4>
                <p>{subtitulo}</p>
            </div>
        </div>
    );
}

export default Head;