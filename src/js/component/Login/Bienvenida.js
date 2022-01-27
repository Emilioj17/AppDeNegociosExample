import React, { Fragment, useContext, useState } from "react";
import { Context } from "../../store/AppContext";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FcLike } from "react-icons/fc";

const Bienvenida = () => {
    const { store, actions } = useContext(Context);
    const [ click, setClick ] = useState(false);
    const [celebracion, setCelebracion] = useState({
        nombre: null,
        fecha: null
    });
    var rodrigo = new Date(2020, 7, 2);
    var emilio = new Date(2020, 7, 4);
    var colomba = new Date(2020, 4, 3);
    var erick = new Date(2020, 0, 7);
    var victor = new Date(2020, 1, 14);
    var ricardo = new Date(2020, 10, 12);
    var lucas = new Date(2020, 4, 24);
    var laura = new Date(2020, 6, 19);
    var gislen = new Date(2020, 0, 22);
    var javiera = new Date(2020, 11, 14);
    var alejandraBarra = new Date(2020, 6, 14);
    var daniel = new Date(2020, 11, 20);
    const mesesNombres = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const HandlerClickCalendario = (value, event) => {
        if (event) {
            setCelebracion({
                nombre: null,
                fecha: null
            });
            setClick(false);
        }
        if (value.getDate() === rodrigo.getDate() && value.getMonth() === rodrigo.getMonth()){
            setCelebracion({
                nombre: "Rodrigo",
                fecha: rodrigo
            });
            setClick(true);
        }
        if (value.getDate() === emilio.getDate() && value.getMonth() === emilio.getMonth()){
            setCelebracion({
                nombre: "Emilio",
                fecha: emilio
            });
            setClick(true);
        }
        if (value.getDate() === colomba.getDate() && value.getMonth() === colomba.getMonth()){
            setCelebracion({
                nombre: "Colomba",
                fecha: colomba
            });
            setClick(true);
        }
        if (value.getDate() === erick.getDate() && value.getMonth() === erick.getMonth()){
            setCelebracion({
                nombre: "Erick",
                fecha: erick
            });
            setClick(true);
        }
        if (value.getDate() === victor.getDate() && value.getMonth() === victor.getMonth()) {
            setCelebracion({
                nombre: "Victor",
                fecha: victor
            });
            setClick(true);
        }
        if (value.getDate() === ricardo.getDate() && value.getMonth() === ricardo.getMonth()){
            setCelebracion({
                nombre: "Ricardo",
                fecha: ricardo
            });
            setClick(true);
        }
        if (value.getDate() === lucas.getDate() && value.getMonth() === lucas.getMonth()){
            setCelebracion({
                nombre: "Lucas",
                fecha: lucas
            });
            setClick(true);
        }
        if (value.getDate() === laura.getDate() && value.getMonth() === laura.getMonth()){
            setCelebracion({
                nombre: "Laura",
                fecha: laura
            });
            setClick(true);
        }
        if (value.getDate() === gislen.getDate() && value.getMonth() === gislen.getMonth()){
            setCelebracion({
                nombre: "Gislen",
                fecha: gislen
            });
            setClick(true);
        }
        if (value.getDate() === javiera.getDate() && value.getMonth() === javiera.getMonth()){
            setCelebracion({
                nombre: "Javiera",
                fecha: javiera
            });
            setClick(true);
        }
        if (value.getDate() === alejandraBarra.getDate() && value.getMonth() === alejandraBarra.getMonth()){
            setCelebracion({
                nombre: "Alejandra Barra",
                fecha: alejandraBarra
            });
            setClick(true);
        }
        if (value.getDate() === daniel.getDate() && value.getMonth() === daniel.getMonth()){
            setCelebracion({
                nombre: "Daniel",
                fecha: daniel
            });
            setClick(true);
        }
    }

	return (
		<Fragment>
            <div className="row">
                <h2>Hola {store.usuarioActual.nombre}, Bienvenido.</h2>
                <hr />
                <br />
                <div class="grid-x">
                    <div class="cell small-6">
                        <h5>Informaciones Varias</h5>
                        <br />
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
                        <a className="isDisabled">Clic aquí para contrato</a>
                        <br />
                        <br />
                        <br />
                    </div>
                    <div class="cell small-6">
                        <h5>Links de Interés</h5>
                        <br />
                        <ul>
                            <li><a href="https://denegocios.cl/" target="_blank" rel="noopener noreferrer">Página de DeNegocios.cl</a></li>
                            <li><a href="https://zeus.sii.cl/cvc/stc/stc.html" target="_blank" rel="noopener noreferrer">Informacion de Terceros (SII)</a></li>
                            <li><a href="https://www4.sii.cl/busquedarolesinternetui/#!/busquedaroles" target="_blank" rel="noopener noreferrer">Buscar Rol de una Propiedad</a></li>
                            <li><a href="https://tramites.munistgo.cl/pagopatente/" target="_blank" rel="noopener noreferrer">Pantente Municipal Santiago</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div class="container-fluid grid-x">
                    <div class="cell small-7">
                        <h5>Calendario</h5>
                        <br />
                        <Calendar
                            locale="es-cl"
                            onClickDay={(value, event) => HandlerClickCalendario(value, event)}
                            showNeighboringMonth={false}
                            tileClassName={({ date, view }) => (view === 'month')
                                && date.getDate() === 20
                                || date.getDate() === 13
                                || (date.getDate() === rodrigo.getDate() && date.getMonth() === rodrigo.getMonth())
                                || (date.getDate() === emilio.getDate() && date.getMonth() === emilio.getMonth())
                                || (date.getDate() === colomba.getDate() && date.getMonth() === colomba.getMonth())
                                || (date.getDate() === erick.getDate() && date.getMonth() === erick.getMonth())
                                || (date.getDate() === victor.getDate() && date.getMonth() === victor.getMonth())
                                || (date.getDate() === ricardo.getDate() && date.getMonth() === ricardo.getMonth())
                                || (date.getDate() === lucas.getDate() && date.getMonth() === lucas.getMonth())
                                || (date.getDate() === laura.getDate() && date.getMonth() === laura.getMonth())
                                || (date.getDate() === gislen.getDate() && date.getMonth() === gislen.getMonth())
                                || (date.getDate() === javiera.getDate() && date.getMonth() === javiera.getMonth())
                                || (date.getDate() === alejandraBarra.getDate() && date.getMonth() === alejandraBarra.getMonth())
                                || (date.getDate() === daniel.getDate() && date.getMonth() === daniel.getMonth())
                                ? 'saturday2' : null}
                        />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                    <div class="cell small-3" style={{marginLeft: "20px"}}>
                        <h5>Fechas Importantes</h5>
                        <br />
                        <ul>
                            <li>
                                <h6>Dia 13:</h6>
                                <p>Fecha Máxima Pago Previred</p>
                            </li>
                            <li>
                                <h6>Dia 20:</h6>
                                <p>Fecha Máxima Pago Impuestos al SII</p>
                            </li>
                            {click ? (
                                <li>
                                    <h6>Dia {celebracion.fecha.getDate()} de {mesesNombres[celebracion.fecha.getMonth()]}:</h6>
                                    <p>Feliz Cumpleaños {celebracion.nombre} <FcLike /></p>
                                </li>
                            ) : (null)}
                        </ul>
                    </div>
                </div>
			</div>
		</Fragment>
	)
};

export default Bienvenida;