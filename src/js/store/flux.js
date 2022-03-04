// http://127.0.0.1:500x0 --> https://denegocios.herokxuapp.com
const getState = ({ getStore, getActions, setStore }) => {
	function sortByMonth(arr) {
		//Esta funcion permite ordenar los meses de los pagos. Ver cada getPago2019
		const meses = [
			"Enero",
			"Febrero",
			"Marzo",
			"Abril",
			"Mayo",
			"Junio",
			"Julio",
			"Agosto",
			"Septiembre",
			"Octubre",
			"Noviembre",
			"Diciembre",
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
			clientesDt: null, //Lista de Clientes de Dt
			paginasClientesDt: null, //Total de Paginas para los Clientes Dt
			paginaActualClientesDt: null, //Total Clientes en Dt
			infoClienteDt: null, //ClienteDt Seleccionado
			nota: null, //Notas especificas al id del ClienteDt seleccionado
			pago2019: null, //Pagos especificos al id del ClienteDt seleccionado
			pago2020: null, //Pagos especificos al id del ClienteDt seleccionado
			pago2021: null, //Pagos especificos al id del ClienteDt seleccionado
			pago2022: null, //Pagos especificos al id del ClienteDt seleccionado
			pago2023: null, //Pagos especificos al id del ClienteDt seleccionado
			pago2024: null, //Pagos especificos al id del ClienteDt seleccionado
			usuarioActual: null, //Usuario Actual que está Conectado
			token: null, //Token del Usuario Actual Conectado
			spinner: false,
		},

		actions: {
			//setWitch cambia la barra lateral izquierda.
			setWitch: () => {
				const store = getStore();
				store.witch ? setStore({ witch: false }) : setStore({ witch: true });
			},

			//Usuarios
			loginUsuario: async (correo, clave) => {
				const actions = getActions();
				setStore({ spinner: true });
				fetch("https://denegocios.herokuapp.com/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ correo: correo, clave: clave }),
				})
					.then((res) => {
						if (res.status === 200) return res.json();
						else if (res.status === 401) {
							alert("Usuario o clave Incorrecto");
							setStore({ spinner: false });
						} else if (res.status === 500) {
							//BD debería mandar un mensaje que indique que usuario no está, más que 500 response.
							alert("Hay un problema, revisa tus credenciales");
							setStore({ spinner: false });
						}
					})
					.then((data) => {
						sessionStorage.setItem("usuarioActual", JSON.stringify(data[0]));
						sessionStorage.setItem("token", data[1]);
						setStore({ usuarioActual: data[0], token: data[1] });
						setStore({ spinner: false });
					})
					.catch((error) => {
						console.error("Hay un problemilla", error);
					});
			},

			getUsuario: async (usuarioid) => {
				const store = getStore();
				setStore({ spinner: true });
				fetch("https://denegocios.herokuapp.com/usuario/" + usuarioid, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token,
					},
				})
					.then((response) => response.json())
					.then((data) => {
						setStore({
							usuario: data,
						});
						setStore({ spinner: false });
					})
					.catch((error) => {
						setStore({
							error: "usuario seleccionado " + error.message,
						});
					});
			},

			getUsuarios: async () => {
				const store = getStore();
				setStore({ spinner: true });
				fetch("https://denegocios.herokuapp.com/usuario", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token,
					},
				})
					.then((response) => response.json())
					.then((data) => {
						setStore({
							usuarios: data,
						});
						setStore({ spinner: false });
					})
					.catch((error) => {
						setStore({
							error: "usuarios " + error.message,
						});
					});
			},

			crearUsuario: async (nombre, apellido, correo, clave, tipo) => {
				const store = getStore();
				setStore({ spinner: true });
				fetch("https://denegocios.herokuapp.com/usuario", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token, //revisar
					},
					body: JSON.stringify({
						nombre: nombre,
						apellido: apellido,
						correo: correo,
						clave: clave,
						tipo: tipo,
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

			editarUsuario: async (id, nombre, apellido, correo, clave, tipo) => {
				const store = getStore();
				setStore({ spinner: true });
				fetch("https://denegocios.herokuapp.com/usuario/" + id, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token,
					},
					body: JSON.stringify({
						nombre: nombre === "" ? null : nombre,
						apellido: apellido === "" ? null : apellido,
						correo: correo === "" ? null : correo,
						clave: clave === "" ? null : clave,
						tipo: tipo === "" ? null : tipo,
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

			borrarUsuario: async (id) => {
				const store = getStore();
				setStore({ spinner: true });
				fetch("https://denegocios.herokuapp.com/usuario/" + id, {
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

			//Clientes Dt

			getClientesDt: async (page_num) => {
				const store = getStore();
				setStore({ spinner: true });
				fetch("https://denegocios.herokuapp.com/xDt/" + page_num, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token,
					},
				})
					.then((response) => response.json())
					.then((data) => {
						setStore({
							clientesDt: data[0],
							paginasClientesDt: data[1],
							paginaActualClientesDt: data[2],
						});
						setStore({ spinner: false });
					})
					.catch((error) => {
						setStore({
							error: "clientesDT " + error.message,
						});
					});
			},

			getBusquedaDt: async (busqueda) => {
				const store = getStore();
				setStore({ spinner: true });
				fetch("https://denegocios.herokuapp.com/busquedaDt", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token,
					},
					body: JSON.stringify({
						busqueda: busqueda,
					}),
				})
					.then((response) => response.json())
					.then((data) => {
						setStore({
							clientesDt: data[0],
							paginasClientesDt: data[1],
							paginaActualClientesDt: data[2],
						});
						setStore({ spinner: false });
					})
					.catch((error) => {
						setStore({
							error: "clientesDT " + error.message,
						});
					});
			},

			getBusquedaFiltroDt: async (
				vigente,
				whatsapp,
				erpyme,
				p,
				sacar,
				dicom,
				repetido,
				tipoPago
			) => {
				const store = getStore();
				setStore({ spinner: true });
				fetch("https://denegocios.herokuapp.com/filtroDt", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token,
					},
					body: JSON.stringify({
						vigente: vigente === "Selecciona..." ? null : vigente,
						whatsapp: whatsapp === "Selecciona..." ? null : whatsapp,
						erpyme: erpyme === "Selecciona..." ? null : erpyme,
						p: p === "Selecciona..." ? null : p,
						sacar: sacar === "Selecciona..." ? null : sacar,
						dicom: dicom === "Selecciona..." ? null : dicom,
						repetido: repetido === "Selecciona..." ? null : repetido,
						tipoPago: tipoPago === "Selecciona..." ? null : tipoPago,
					}),
				})
					.then((response) => response.json())
					.then((data) => {
						setStore({
							clientesDt: data[0],
							paginasClientesDt: data[1],
							paginaActualClientesDt: data[2],
						});
						setStore({ spinner: false });
					})
					.catch((error) => {
						setStore({
							error: "clientesDT " + error.message,
						});
					});
			},

			getClienteDt: async (clienteDtid) => {
				const store = getStore();
				setStore({ spinner: true });
				fetch("https://denegocios.herokuapp.com/clienteDt/" + clienteDtid, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token,
					},
				})
					.then((response) => response.json())
					.then((data) => {
						setStore({
							infoClienteDt: data,
						});
						setStore({ spinner: false });
					})
					.catch((error) => {
						setStore({
							error: "clientesDT " + error.message,
						});
					});
			},

			crearClienteDt: async (
				razon,
				rut,
				vigente,
				correo,
				correoSecundario,
				correoTerciario,
				fono,
				whatsapp,
				representante,
				rutRepresentante,
				fechaContratacion,
				erpyme,
				p,
				sacar,
				dicom,
				repetido,
				libre,
				mesesPagados,
				tipoPago
			) => {
				const store = getStore();
				setStore({ spinner: true });
				fetch("https://denegocios.herokuapp.com/clienteDt", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token,
					},
					body: JSON.stringify({
						razon: razon,
						rut: rut,
						vigente: vigente,
						correo: correo,
						correoSecundario: correoSecundario,
						correoTerciario: correoTerciario,
						fono: fono,
						whatsapp: whatsapp,
						representante: representante,
						rutRepresentante: rutRepresentante,
						fechaContratacion: fechaContratacion,
						erpyme: erpyme,
						p: p,
						sacar: sacar,
						dicom: dicom,
						repetido: repetido,
						libre: libre,
						mesesPagados: mesesPagados,
						tipoPago: tipoPago,
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

			editarClienteDt: async (
				id,
				razon,
				rut,
				vigente,
				correo,
				correoSecundario,
				correoTerciario,
				fono,
				whatsapp,
				representante,
				rutRepresentante,
				fechaContratacion,
				erpyme,
				p,
				sacar,
				dicom,
				repetido,
				libre,
				mesesPagados,
				tipoPago
			) => {
				const store = getStore();
				setStore({ spinner: true });
				fetch("https://denegocios.herokuapp.com/clienteDt/" + id, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token,
					},
					body: JSON.stringify({
						razon: razon === "" ? null : razon,
						rut: rut === "" ? null : rut,
						vigente: vigente === "" ? null : vigente,
						correo: correo === "" ? null : correo,
						correoSecundario: correoSecundario === "" ? null : correoSecundario,
						correoTerciario: correoTerciario === "" ? null : correoTerciario,
						fono: fono === "" ? null : fono,
						whatsapp: whatsapp === "" ? null : whatsapp,
						representante: representante === "" ? null : representante,
						rutRepresentante: rutRepresentante === "" ? null : rutRepresentante,
						fechaContratacion:
							fechaContratacion === "" ? null : fechaContratacion,
						erpyme: erpyme === "" ? null : erpyme,
						p: p === "" ? null : p,
						sacar: sacar === "" ? null : sacar,
						dicom: dicom === "" ? null : dicom,
						repetido: repetido === "" ? null : repetido,
						libre: libre === "" ? null : libre,
						mesesPagados: mesesPagados === "" ? null : mesesPagados,
						tipoPago: tipoPago === "" ? null : tipoPago,
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

			editarMesesPagadosClienteDt: async (id, mesesPagados) => {
				const store = getStore();
				setStore({ spinner: true });
				fetch("https://denegocios.herokuapp.com/clienteDt/" + id, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token,
					},
					body: JSON.stringify({
						razon: null,
						rut: null,
						vigente: null,
						correo: null,
						correoSecundario: null,
						correoTerciario: null,
						fono: null,
						whatsapp: null,
						representante: null,
						rutRepresentante: null,
						fechaContratacion: null,
						erpyme: null,
						p: null,
						sacar: null,
						dicom: null,
						repetido: null,
						libre: null,
						mesesPagados: mesesPagados,
						tipoPago: null,
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

			//Notas Clientes Dt
			getNota: async (clienteDtid) => {
				const store = getStore();
				fetch("https://denegocios.herokuapp.com/nota/" + clienteDtid, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token,
					},
				})
					.then((response) => response.json())
					.then((data) => {
						setStore({
							nota: data,
						});
					})
					.catch((error) => {
						setStore({
							error: "clientesDT " + error.message,
						});
					});
			},

			crearNota: async (comentario, fechaComentario, clienteDtid) => {
				const store = getStore();
				setStore({ spinner: true });
				fetch("https://denegocios.herokuapp.com/nota", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token,
					},
					body: JSON.stringify({
						comentario: comentario,
						fechaComentario: fechaComentario,
						clienteDtid: clienteDtid,
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

			//Pagos Clientes Dt

			getPago2019: async (clienteDtid) => {
				const store = getStore();
				fetch("https://denegocios.herokuapp.com/dt2019/" + clienteDtid, {
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
							pago2019: data,
						});
					})
					.catch((error) => {
						setStore({
							error: "clientesDT " + error.message,
						});
					});
			},

			getPago2020: async (clienteDtid) => {
				const store = getStore();
				fetch("https://denegocios.herokuapp.com/dt2020/" + clienteDtid, {
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
							pago2020: data,
						});
					})
					.catch((error) => {
						setStore({
							error: "clientesDT " + error.message,
						});
					});
			},

			getPago2021: async (clienteDtid) => {
				const store = getStore();
				fetch("https://denegocios.herokuapp.com/dt2021/" + clienteDtid, {
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
							pago2021: data,
						});
					})
					.catch((error) => {
						setStore({
							error: "clientesDT " + error.message,
						});
					});
			},

			getPago2022: async (clienteDtid) => {
				const store = getStore();
				fetch("https://denegocios.herokuapp.com/dt2022/" + clienteDtid, {
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
							pago2022: data,
						});
					})
					.catch((error) => {
						setStore({
							error: "clientesDT " + error.message,
						});
					});
			},

			getPago2023: async (clienteDtid) => {
				const store = getStore();
				fetch("https://denegocios.herokuapp.com/dt2023/" + clienteDtid, {
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
							pago2023: data,
						});
					})
					.catch((error) => {
						setStore({
							error: "clientesDT " + error.message,
						});
					});
			},

			getPago2024: async (clienteDtid) => {
				const store = getStore();
				fetch("https://denegocios.herokuapp.com/dt2024/" + clienteDtid, {
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
							pago2024: data,
						});
					})
					.catch((error) => {
						setStore({
							error: "clientesDT " + error.message,
						});
					});
			},

			crearPago: async (
				year,
				mes,
				numeroTransferencia,
				montoPagado,
				montoCobrado,
				mesesPagados,
				facturaNumero,
				comentario,
				fechaIngresoPago,
				clienteDtid
			) => {
				const store = getStore();
				setStore({ spinner: true });
				fetch("https://denegocios.herokuapp.com/dt" + year, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token,
					},
					body: JSON.stringify({
						mes: mes,
						numeroTransferencia: numeroTransferencia,
						montoPagado: montoPagado,
						montoCobrado: montoCobrado,
						mesesPagados: mesesPagados,
						facturaNumero: facturaNumero,
						comentario: comentario,
						fechaIngresoPago: fechaIngresoPago,
						clienteDtid: clienteDtid,
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

			editarPago: async (
				year,
				mes,
				numeroTransferencia,
				montoPagado,
				montoCobrado,
				mesesPagados,
				facturaNumero,
				comentario,
				clienteDtid
			) => {
				const store = getStore();
				setStore({ spinner: true });
				fetch(
					"https://denegocios.herokuapp.com/dt" + year + "/" + clienteDtid,
					{
						method: "PUT",
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + store.token,
						},
						body: JSON.stringify({
							mes: mes === "" ? null : mes,
							numeroTransferencia:
								numeroTransferencia === "" ? null : numeroTransferencia,
							montoPagado: montoPagado === "" ? null : montoPagado,
							montoCobrado: montoCobrado === "" ? null : montoCobrado,
							mesesPagados: mesesPagados === "" ? null : mesesPagados,
							facturaNumero: facturaNumero === "" ? null : facturaNumero,
							comentario: comentario === "" ? null : comentario,
						}),
					}
				)
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

			borrarPago: async (year, clienteDtid) => {
				const store = getStore();
				setStore({ spinner: true });
				fetch(
					"https://denegocios.herokuapp.com/dt" + year + "/" + clienteDtid,
					{
						method: "DELETE",
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + store.token,
						},
					}
				)
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
