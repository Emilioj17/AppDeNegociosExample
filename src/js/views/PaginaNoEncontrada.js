import React from "react";
import { useHistory } from "react-router";
import ImagenNoEncontrada from "../../img/404error.webp";

const PaginaNoEncontrada = () => {
    const history = useHistory();
    
    const HandlerClickInicio = () => {
        history.push("/");
    };

    return (
        <div className="row text-center">
            <br />
            <img src={ImagenNoEncontrada} alt="" className="card-img-top" />
            <h3>Has llegado lejos... pero parece que estas un poco perdido, no?</h3>
            <h2>Error 404, <strong>Pagina no Encontrada</strong></h2>
            <br />
            <br />
            <a class="button success large" onClick={(e)=>HandlerClickInicio(e)}>Volver al Inicio</a>
        </div>
    );
};

export default PaginaNoEncontrada;