import React, { useState, useContext, useEffect } from 'react';
import { Context } from "../../store/AppContext";

export const ModificarUsuario = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="" style={{ filter: "drop-shadow(0px 4px 8px #000000)" }}>
            hola
        </div>
    );
}

export default ModificarUsuario;