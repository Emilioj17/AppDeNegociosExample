import React, {useRef} from 'react';

//Esta funcion es la que genera el buscador de clientes. Es bien sencilla, el unico handler que tiene
// est para asignar lo que se escriba con un onChange.

const Buscador = ({ setClienteDtBuscado }) => {
    const Busqueda = useRef(null);
    
    const HandlerOnChange = (event) => {
        setClienteDtBuscado(Busqueda.current.value);
    };

    return (
        <div className='cell small-10'>
            <div className='grid-x grid-margin-x'>
                <input className='cell small-10' type="text" placeholder="Ingresa tu Busqueda" name="Buscador" ref={Busqueda}/>
                <button class="cell small-2 submit success button" onClick={(e) => HandlerOnChange(e)}>Buscar</button>
            </div>
        </div>
    );
}

export default Buscador;