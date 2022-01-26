import React, { Fragment, useContext } from "react";
import { Context } from "../../store/AppContext";
import Calendario from "../../../img/calendario.webp";

const Recuperar = () => {
    const { store, actions } = useContext(Context);

	return (
		<Fragment>
            <div className="row">
                <h2>Hola {store.usuarioActual.nombre}, Bienvenido.</h2>
                <br />
                <div class="grid-x">
                    <div class="cell small-6">
                        <h5>Calendario</h5>
                        <img src={Calendario}/>
                    </div>
                    <div class="cell small-6">
                        <h5>Links de Interés</h5>
                        <ul>
                            <li><a href="https://denegocios.cl/" target="_blank" rel="noopener noreferrer">Página de DeNegocios.cl</a></li>
                            <li><a href="https://zeus.sii.cl/cvc/stc/stc.html" target="_blank" rel="noopener noreferrer">Informacion de Terceros (SII)</a></li>
                            <li><a href="https://www4.sii.cl/busquedarolesinternetui/#!/busquedaroles" target="_blank" rel="noopener noreferrer">Buscar Rol de una Propiedad</a></li>
                            <li><a href="https://tramites.munistgo.cl/pagopatente/" target="_blank" rel="noopener noreferrer">Pantente Municipal Santiago</a></li>
                        </ul>
                    </div>
                </div>
                <div class="grid-x">
                    <div class="cell small-6">
                        <h5>Informaciones Varias</h5>
                        <div className="grid-x">
                            <h6 className="cell small-12">Busca tu Liquidacion de Sueldo</h6>
                            <label class="cell small-8">
                                Selecciona Periodo
                                <select disabled>
                                    <option value="husker">Noviembre 2021</option>
                                    <option value="starbuck">Diciembre 2021</option>
                                    <option value="hotdog">Enero 2022</option>
                                    <option value="apollo">Febrero 2022</option>
                                </select>
                            </label>
                        </div>
                        <a className="button" disabled>Obtener Liquidacion</a>
                        <br />
                        <br />
                        <h6>Obten Copia Digital de tu Contrato</h6>
                        <p>Clic aquí para contrato</p>
                        <br />
                        <br />
                    </div>
                    <div class="cell small-6">Holi</div>
                </div>
			</div>
		</Fragment>
	)
};

export default Recuperar;