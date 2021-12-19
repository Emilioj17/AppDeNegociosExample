import React from 'react';

// Este formulario es de Administracion

const Formulario = ({ setCrear }) => {
    const Handler = (event) => {
        setCrear(false)
    };

    return (
        <div className="row">
            <div className="columns">
                <form className="log-in-form">
                    <h4 className="text-left">Ingresa los Datos solicitados para crear un Usuario</h4>
                    <label>
                        Nombre
                        <input type="text" placeholder="Solo primer Nombre" />
                    </label>
                    <label>
                        Apellido
                        <input type="text" placeholder="Solo primer Apellido" />
                    </label>
                    <label>
                        Email
                        <input type="email" placeholder="correo@denegocios.cl" />
                    </label>
                    <label>
                        Clave
                        <input type="password" placeholder="Clave" />
                    </label>
                    <div className="">
                        <label className="">Elige Tipo</label>
                        <select className="" id="exampleFormControlSelect1" name="tipo">
                        <option selected>Elige una opción...</option>
                        <option value="Administrador">Administrador</option>
                        <option value="Vendedor">Vendedor</option>
                        <option value="Cobranza">Cobranza</option>
                        </select>
                    </div>
                    <div className="">
                        <label className="">Elige Estado</label>
                        <select className="" id="exampleFormControlSelect1" name="estado">
                        <option selected>Elige una opción...</option>
                        <option value="Activo">Activo</option>
                        <option value="Inactivo">Inactivo</option>
                        </select>
                    </div>
                    <p>
                        <input type="btn" className="button expanded" Value="Crear Usuario" />
                        <input type="btn" className="button expanded alert" Value="Cancelar" onClick={(e)=>Handler(e)}/>
                    </p>
                </form>
            </div>
        </div>
    );
}
 
export default Formulario;