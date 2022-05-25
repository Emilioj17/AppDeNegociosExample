const getState = ({ getStore, getActions, setStore }) => {
	function sortByMonth(arr) {
		//Esta funcion permite ordenar los meses de los pagos.
		const meses = [
			"Diciembre",
			"Noviembre",
			"Octubre",
			"Septiembre",
			"Agosto",
			"Julio",
			"Junio",
			"Mayo",
			"Abril",
			"Marzo",
			"Febrero",
			"Enero",
		];
		arr.sort(function (a, b) {
			return meses.indexOf(a.mes) - meses.indexOf(b.mes);
		});
	}

	return {
		store: {
			witch: true, //Setea existencia de barra lateral izquierda
			usuarios: null,
			usuario: null,
			response: null,
			usuarioActual: null, //Usuario Actual que está Conectado
			token: null, //Token del Usuario Actual Conectado
			spinner: false,
			clientesContabilidad: null,
			paginasClientesContabilidad: null,
			paginaActualClientesContabilidad: null,
			infoClienteContabilidad: null,
			notaContabilidad: null,
			pagoContabilidad: null,
		},

		actions: {
			//setWitch cambia la barra lateral izquierda.
			setWitch: () => {
				const store = getStore();
				store.witch ? setStore({ witch: false }) : setStore({ witch: true });
			},

			// /* Notas Contabilidad*/
			getNotaContabilidad: async (clienteContabilidadid) => {
				const store = getStore();
				fetch("url/notaContabilidad/" + clienteContabilidadid, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token,
					},
				})
					.then((response) => response.json())
					.then((data) => {
						setStore({
							notaContabilidad: data,
						});
					})
					.catch((error) => {
						setStore({
							error: "clientesContabilidad " + error.message,
						});
					});
			},

			crearNotaContabilidad: async (
				comentario,
				fechaComentario,
				clienteContabilidadid
			) => {
				const store = getStore();
				setStore({ spinner: true });
				fetch("url/notaContabilidad", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token,
					},
					body: JSON.stringify({
						comentario: comentario,
						fechaComentario: fechaComentario,
						clienteContabilidadid: clienteContabilidadid,
					}),
				})
					.then((response) => response.json())
					.then((data) => {
						setStore({
							response: data,
						});
						setStore({ spinner: false });
					})
					.catch((error) => {
						setStore({
							error: error.message,
						});
					});
			},

			//  /* Pagos Contabilidad */

			getPagoContabilidad: async (clienteContabilidadid) => {
				////Aquí hay que ordenar adicionalmente por Year
				const store = getStore();
				fetch("url/pagosContabilidad/" + clienteContabilidadid, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token,
					},
				})
					.then((response) => response.json())
					.then((data) => {
						sortByMonth(data);
						setStore({
							pagoContabilidad: data,
						});
					})
					.catch((error) => {
						setStore({
							error: "clientesContabilidad" + error.message,
						});
					});
			},

			crearPagoContabilidad: async (
				year,
				mes,
				numeroTransferencia,
				montoPagado,
				montoCobrado,
				facturaNumero,
				comentario,
				clienteContabilidadid
			) => {
				const store = getStore();
				setStore({ spinner: true });
				fetch("url/pagosContabilidad", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token,
					},
					body: JSON.stringify({
						year: year,
						mes: mes,
						numeroTransferencia: numeroTransferencia,
						montoPagado: montoPagado,
						montoCobrado: montoCobrado,
						facturaNumero: facturaNumero,
						comentario: comentario,
						clienteContabilidadid: clienteContabilidadid,
					}),
				})
					.then((response) => response.json())
					.then((data) => {
						setStore({
							response: data,
						});
						setStore({ spinner: false });
					})
					.catch((error) => {
						setStore({
							error: error.message,
						});
					});
			},

			editarPagoContabilidad: async (
				year,
				mes,
				numeroTransferencia,
				montoPagado,
				montoCobrado,
				facturaNumero,
				comentario,
				clienteContabilidadid
			) => {
				const store = getStore();
				setStore({ spinner: true });
				fetch("url/pagosContabilidad/" + clienteContabilidadid, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token,
					},
					body: JSON.stringify({
						year: year === "" ? null : year,
						mes: mes === "" ? null : mes,
						numeroTransferencia:
							numeroTransferencia === "" ? null : numeroTransferencia,
						montoPagado: montoPagado === "" ? null : montoPagado,
						montoCobrado: montoCobrado === "" ? null : montoCobrado,
						facturaNumero: facturaNumero === "" ? null : facturaNumero,
						comentario: comentario === "" ? null : comentario,
					}),
				})
					.then((response) => response.json())
					.then((data) => {
						setStore({
							response: data,
						});
						setStore({ spinner: false });
					})
					.catch((error) => {
						setStore({
							error: error.message,
						});
					});
			},

			borrarPagoContabilidad: async (clienteContabilidadid) => {
				const store = getStore();
				setStore({ spinner: true });
				fetch("url/pagosContabilidad/" + clienteContabilidadid, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token,
					},
				})
					.then((response) => response.json())
					.then((data) => {
						setStore({
							response: data,
						});
						setStore({ spinner: false });
					})
					.catch((error) => {
						setStore({
							error: error.message,
						});
					});
			},
		},
	};
};

export default getState;
