import React, { useState } from 'react';

const Usuarios = ({ usuariosActivos }) => {
    return (
        <div className="row text-center">
            Hola desde Usuarios {(usuariosActivos!=undefined)?usuariosActivos:"hola"}
        </div>
    );
}
 
export default Usuarios;