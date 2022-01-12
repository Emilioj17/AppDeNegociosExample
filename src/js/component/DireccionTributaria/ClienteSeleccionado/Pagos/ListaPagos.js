import React, { useState, useContext } from 'react';
import { Context } from "../../../../store/AppContext";

const ListaPagos = ({filtroYear, filtroMesInicio, filtroMesTermino, filtroSaldo}) => {
    const { store, actions } = useContext(Context);

    const ListaDesplegarPagos = (object, i, year) => {
        return (
            <tr key={i}>
                <td>{year}</td>
                <td>{object.mes}</td>
                <td>${object.montoCobrado}</td>
                <td>${object.montoPagado}</td>
                <td>${object.montoCobrado - object.montoPagado}</td>
                <td>{object.numeroTransferencia}</td>
                <td>{object.facturaNumero}</td>
                <td>01/07/{year}</td>
            </tr>
        )
    }

    return (
        <>
            <table className="table hover">
                    <thead>
                        <tr>
                            <th scope="col">Año</th>
                            <th scope="col">Mes</th>
                            <th scope="col">Monto Cobrado</th>
                            <th scope="col">Monto Pagado</th>
                            <th scope="col">Saldo</th>
                            <th scope="col">Número de Transferencia</th>
                            <th scope="col">Número de Factura</th>
                            <th scope="col">Fecha de Pago</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(store.pago2019 != null) ? (
                            (filtroYear == "todos" || filtroYear == "2019") ? (
                                (filtroSaldo == "todos" || filtroSaldo == "conSaldo") ? (
                                    (filtroSaldo == "todos") ? (
                                        store.pago2019.map((object, i) => ListaDesplegarPagos(object, i, 2019))
                                    ) : (store.pago2019.filter(objeto => (objeto.montoCobrado - objeto.montoPagado)>0).map((object, i) => ListaDesplegarPagos(object, i, 2019)))
                                ) : (store.pago2019.filter(objeto => (objeto.montoCobrado - objeto.montoPagado)==0).map((object, i) => ListaDesplegarPagos(object, i, 2019)))
                            ) : null
                        ) : null
                        }
                        {(store.pago2020 != null) ? (
                            (filtroYear == "todos" || filtroYear == "2020") ? (
                                (filtroSaldo == "todos" || filtroSaldo == "conSaldo") ? (
                                    (filtroSaldo == "todos") ? (
                                        store.pago2020.map((object, i) => ListaDesplegarPagos(object, i, 2020))
                                    ) : (store.pago2020.filter(objeto => (objeto.montoCobrado - objeto.montoPagado)>0).map((object, i) => ListaDesplegarPagos(object, i, 2020)))
                                ) : (store.pago2020.filter(objeto => (objeto.montoCobrado - objeto.montoPagado)==0).map((object, i) => ListaDesplegarPagos(object, i, 2020)))
                            ) : null
                        ) : null
                        }
                        {(store.pago2021 != null) ? (
                            (filtroYear == "todos" || filtroYear == "2021") ? (
                                (filtroSaldo == "todos" || filtroSaldo == "conSaldo") ? (
                                    (filtroSaldo == "todos") ? (
                                        store.pago2021.map((object, i) => ListaDesplegarPagos(object, i, 2021))
                                    ) : (store.pago2021.filter(objeto => (objeto.montoCobrado - objeto.montoPagado)>0).map((object, i) => ListaDesplegarPagos(object, i, 2021)))
                                ) : (store.pago2021.filter(objeto => (objeto.montoCobrado - objeto.montoPagado)==0).map((object, i) => ListaDesplegarPagos(object, i, 2021)))
                            ) : null
                        ) : null
                        }
                        {(store.pago2022 != null) ? (
                            (filtroYear == "todos" || filtroYear == "2022") ? (
                                (filtroSaldo == "todos" || filtroSaldo == "conSaldo") ? (
                                    (filtroSaldo == "todos") ? (
                                        store.pago2022.map((object, i) => ListaDesplegarPagos(object, i, 2022))
                                    ) : (store.pago2022.filter(objeto => (objeto.montoCobrado - objeto.montoPagado)>0).map((object, i) => ListaDesplegarPagos(object, i, 2022)))
                                ) : (store.pago2022.filter(objeto => (objeto.montoCobrado - objeto.montoPagado)==0).map((object, i) => ListaDesplegarPagos(object, i, 2022)))
                            ) : null
                        ) : null
                        }
                    </tbody>
                    {store.infoClienteDt=="" ? (<tbody><p>No hay Informacion de Pagos...</p></tbody>): null}
            </table>
        </>
    );
}

export default ListaPagos;