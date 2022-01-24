import React, { useContext, useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Context } from "../../store/AppContext"
import { SaldoTotal } from "../../Helper/SaldoTotal";
import "../../../styles/Paginator.css";

//Aquí se genera el Listado de Clientes que se muestra en Dt. Desde DireconTributaria.js se ejecuta el action que llama la info de la bd. Esta lista se guarda en store.clientesDt.
// Respecto al CSS del Paginator, se debió crear un .css adicional solo para setear los colores.

const ListaClientesDt = ({ clienteDtBuscado, setClienteSeleccionado, setClienteDtCliqueado, filtroVigente, filtroErpyme, filtroSaldo, clientesPorPagina }) => {
    const { store, actions } = useContext(Context);
    const items = store.clientesDt;

    const HandlerClick = (object) => {
        setClienteDtCliqueado(object);
        setClienteSeleccionado(true);
    }

    //La siguiente funcion despliega la lista de Clientes con sus respectivas Columnas.
    const ListaDesplegarClientes = (objeto, i) => {
        return (
            <tr key={i} onClick={()=>HandlerClick(objeto)}>
                <td>{objeto.id}</td>
                <td>{objeto.razon}</td>
                <td>{objeto.rut}</td>
                <td>{objeto.correo}{objeto.correoSecundario === "" ? null
                    : (<span>, {objeto.correoSecundario}</span>)}{objeto.correoTerciario === "" ? null
                        : (<span>, {objeto.correoTerciario}</span>)}</td>
                <td>{objeto.fono}</td>
                <td>{objeto.representante}</td>
                <td>{objeto.rutRepresentante}</td>
                <td>{objeto.fechaContratacion}</td>
                <td>{objeto.vigente}</td>
                <td>{objeto.erpyme}</td>
                <td>${SaldoTotal.montoSaldo(objeto)}</td>
            </tr>
        )
    }

    //Las Siguientes funciones generan los filtros de Busqueda, Vigencia, Erpyme y Saldo.
    const Vigencia = (objeto) => {
        if (filtroVigente == "todo" || filtroVigente == "Selecciona Vigencia..." || filtroVigente == "todos") {
            return objeto
        } else if (filtroVigente == "Vigente") {
            if (objeto.vigente == "true") {
                return objeto
            }
        } else if (filtroVigente == "No Vigente") {
            if (objeto.vigente == "false") {
                return objeto
            }
        }
    }

    const Erpyme = (objeto) => {
        if (filtroErpyme == "todo" || filtroErpyme == "Selecciona Erpyme..." || filtroErpyme == "todos") {
            return objeto
        } else if (filtroErpyme == "Está en Erpyme") {
            if (objeto.erpyme == "true") {
                return objeto
            }
        } else if (filtroErpyme == "No está en Erpyme") {
            if (objeto.erpyme == "false") {
                return objeto
            }
        }
    }

    const Saldo = (objeto) => {
        if (filtroSaldo == "todo" || filtroSaldo == "Selecciona Saldo..." || filtroSaldo == "todos") {
            return objeto
        } else if (filtroSaldo == "Con Saldo") {
            if (SaldoTotal.montoSaldo(objeto)>0 || SaldoTotal.montoSaldo(objeto)<0) {
                return objeto
            }
        } else if (filtroSaldo == "Todo Pagado") {
            if (SaldoTotal.montoSaldo(objeto)==0) {
                return objeto
            }
        }
    }

    const Busqueda = (objeto) => {
        if (objeto.razon.toLowerCase().includes(clienteDtBuscado.toLowerCase())
            || objeto.rut.toLowerCase().includes(clienteDtBuscado.toLowerCase())
            || objeto.correo.toLowerCase().includes(clienteDtBuscado.toLowerCase())
            || objeto.representante.toLowerCase().includes(clienteDtBuscado.toLowerCase())
            || (objeto.id==clienteDtBuscado)
            || objeto.rutRepresentante.toLowerCase().includes(clienteDtBuscado.toLowerCase())
        ) {
            return objeto
        }
    }

    const Items = ({ currentItems }) => {
        return (
            <table className="table hover" id="tblData">
                <thead>
                    <tr>
                        <th className="id" scope="col">Id</th>
                        <th scope="col">Razon Social</th>
                        <th className="rut" scope="col">Rut</th>
                        <th scope="col">Correo</th>
                        <th className="telefono" scope="col">Teléfono</th>
                        <th className="representante" scope="col">Rep Legal</th>
                        <th className="rut" scope="col">Rut Rep</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Vigente</th>
                        <th scope="col">Erpyme</th>
                        <th className="saldo" scope="col">Saldo</th>
                    </tr>
                </thead>
                <tbody>
                    {(currentItems != null) ? 
                        ((clienteDtBuscado == "" || clienteDtBuscado == null) ? (
                            currentItems.filter(objeto=> Vigencia(objeto)).filter(objeto=> Erpyme(objeto)).filter(objeto=> Saldo(objeto)).map((objeto, i) => ListaDesplegarClientes(objeto, i))
                        ):(currentItems.filter(objeto => Busqueda(objeto)).filter(objeto=> Vigencia(objeto)).filter(objeto=> Erpyme(objeto)).filter(objeto=> Saldo(objeto)).map((objeto, i) => 
                                ListaDesplegarClientes(objeto, i)))): 
                        (<td colSpan="9" style={{height:"100px", padding:"20px"}}><h2 className="text-center"> - no hay datos -</h2></td>)
                    }
                </tbody>
            </table>
          );
    }

    const PaginatedItems = ({ itemsPerPage }) => {
        // We start with an empty list of items.
        const [currentItems, setCurrentItems] = useState(null);
        const [pageCount, setPageCount] = useState(0);
        // Here we use item offsets; we could also use page offsets
        // following the API or data you're working with.
        const [itemOffset, setItemOffset] = useState(0);

        useEffect(() => {
            // Fetch items from another resources.
            const endOffset = itemOffset + itemsPerPage;
            setCurrentItems(items.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(items.length / itemsPerPage));
        }, [itemOffset, itemsPerPage]);

        // Invoke when user click to request another page.
        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % items.length;
            setItemOffset(newOffset);
        };

        return (
            <>
                <Items currentItems={currentItems} />
                <div className='divPaginator'>
                    <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next>"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<Atras"
                    renderOnZeroPageCount={null}
                    />
                </div>
            
            </>
        );
    }

    return (
        <div className='row'>
            {(store.clientesDt != null) ? (<PaginatedItems itemsPerPage={clientesPorPagina} />) : null}
        </div>
    );
}

export default ListaClientesDt;