import React from 'react';

const Head = ({ contenido }) => {
    const [titulo, subtitulo] = contenido;
    return (
        <div className="callout primary">
            <div className="row column inline">
                <h1>{titulo}</h1>
                <p className="lead">{subtitulo}</p>
            </div>
        </div>
    );
}

export default Head;