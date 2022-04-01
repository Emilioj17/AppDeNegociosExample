// http://127.0.0.1:500x0 --> https://denegocios.herokxuapp.com
const getState = ({ getStore, getActions, setStore }) => {
	function sortByMonth(arr) {
		//Esta funcion permite ordenar los meses de los pagos. Ver cada getPago2019
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

			/* USUARIOS Y LOGIN */
			loginUsuario: async (correo, clave) => {
				const actions = getActions();
				setStore({ spinner: true });
				fetch("http://127.0.0.1:5000/login", {
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
				fetch("http://127.0.0.1:5000/usuario/" + usuarioid, {
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
				fetch("http://127.0.0.1:5000/usuario", {
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
				fetch("http://127.0.0.1:5000/usuario", {
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
				fetch("http://127.0.0.1:5000/usuario/" + id, {
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
				fetch("http://127.0.0.1:5000/usuario/" + id, {
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

			/* CLIENTES DIRECCION TRIBUTARIA */

			getClientesDt: async (page_num) => {
				const store = getStore();
				setStore({ spinner: true });
				fetch("http://127.0.0.1:5000/xDt/" + page_num, {
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
				fetch("http://127.0.0.1:5000/busquedaDt", {
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
				fetch("http://127.0.0.1:5000/filtroDt", {
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
				fetch("http://127.0.0.1:5000/clienteDt/" + clienteDtid, {
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
				fetch("http://127.0.0.1:5000/clienteDt", {
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
				fetch("http://127.0.0.1:5000/clienteDt/" + id, {
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
				fetch("http://127.0.0.1:5000/clienteDt/" + id, {
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

			// /* Notas Direccion Tributaria*/
			getNota: async (clienteDtid) => {
				const store = getStore();
				fetch("http://127.0.0.1:5000/nota/" + clienteDtid, {
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
				fetch("http://127.0.0.1:5000/nota", {
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

			//  /* Pagos Direccion Tributaria */

			getPago2019: async (clienteDtid) => {
				const store = getStore();
				fetch("http://127.0.0.1:5000/dt2019/" + clienteDtid, {
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
				fetch("http://127.0.0.1:5000/dt2020/" + clienteDtid, {
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
				fetch("http://127.0.0.1:5000/dt2021/" + clienteDtid, {
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
				fetch("http://127.0.0.1:5000/dt2022/" + clienteDtid, {
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
				fetch("http://127.0.0.1:5000/dt2023/" + clienteDtid, {
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
				fetch("http://127.0.0.1:5000/dt2024/" + clienteDtid, {
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
				fetch("http://127.0.0.1:5000/dt" + year, {
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
				fetch("http://127.0.0.1:5000/dt" + year + "/" + clienteDtid, {
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

			borrarPago: async (year, clienteDtid) => {
				const store = getStore();
				setStore({ spinner: true });
				fetch("http://127.0.0.1:5000/dt" + year + "/" + clienteDtid, {
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

			/* CLIENTES DE CONTABILIDAD */

			getClientesContabilidad: async (page_num) => {
				const store = getStore();
				setStore({ spinner: true });
				fetch("http://127.0.0.1:5000/xContabilidad/" + page_num, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token,
					},
				})
					.then((response) => response.json())
					.then((data) => {
						setStore({
							clientesContabilidad: data[0],
							paginasClientesContabilidad: data[1],
							paginaActualClientesContabilidad: data[2],
						});
						setStore({ spinner: false });
					})
					.catch((error) => {
						setStore({
							error: "clientesContabilidad " + error.message,
						});
					});
			},

			getBusquedaContabilidad: async (busqueda) => {
				const store = getStore();
				setStore({ spinner: true });
				fetch("http://127.0.0.1:5000/busquedaContabilidad", {
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
							clientesContabilidad: data[0],
							paginasClientesContabilidad: data[1],
							paginaActualClientesContabilidad: data[2],
						});
						setStore({ spinner: false });
					})
					.catch((error) => {
						setStore({
							error: "clientesContabilidad " + error.message,
						});
					});
			},

			getBusquedaFiltroContabilidad: async (
				vigente,
				whatsapp,
				erpyme,
				dicom,
				repetido
			) => {
				const store = getStore();
				setStore({ spinner: true });
				fetch("http://127.0.0.1:5000/filtroContabilidad", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token,
					},
					body: JSON.stringify({
						vigente: vigente === "Selecciona..." ? null : vigente,
						whatsapp: whatsapp === "Selecciona..." ? null : whatsapp,
						erpyme: erpyme === "Selecciona..." ? null : erpyme,
						dicom: dicom === "Selecciona..." ? null : dicom,
						repetido: repetido === "Selecciona..." ? null : repetido,
					}),
				})
					.then((response) => response.json())
					.then((data) => {
						setStore({
							clientesContabilidad: data[0],
							paginasClientesContabilidad: data[1],
							paginaActualClientesContabilidad: data[2],
						});
						setStore({ spinner: false });
					})
					.catch((error) => {
						setStore({
							error: "clientesContabilidad " + error.message,
						});
					});
			},

			getClienteContabilidad: async (clienteContabilidadid) => {
				const store = getStore();
				setStore({ spinner: true });
				fetch(
					"http://127.0.0.1:5000/clienteContabilidad/" + clienteContabilidadid,
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + store.token,
						},
					}
				)
					.then((response) => response.json())
					.then((data) => {
						setStore({
							infoClienteContabilidad: data,
						});
						setStore({ spinner: false });
					})
					.catch((error) => {
						setStore({
							error: "clientesContabilidad " + error.message,
						});
					});
			},

			crearClienteContabilidad: async (
				razon,
				rut,
				vigente,
				correo,
				correoSecundario,
				correoTerciario,
				fono,
				whatsapp,
				erpyme,
				dicom,
				repetido,
				libre
			) => {
				const store = getStore();
				setStore({ spinner: true });
				fetch("http://127.0.0.1:5000/clienteContabilidad", {
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
						erpyme: erpyme,
						dicom: dicom,
						repetido: repetido,
						libre: libre,
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

			editarClienteContabilidad: async (
				id,
				razon,
				rut,
				vigente,
				correo,
				correoSecundario,
				correoTerciario,
				fono,
				whatsapp,
				erpyme,
				dicom,
				repetido,
				libre
			) => {
				const store = getStore();
				setStore({ spinner: true });
				fetch("http://127.0.0.1:5000/clienteContabilidad/" + id, {
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
						erpyme: erpyme === "" ? null : erpyme,
						dicom: dicom === "" ? null : dicom,
						repetido: repetido === "" ? null : repetido,
						libre: libre === "" ? null : libre,
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

			// /* Notas Contabilidad*/
			getNotaContabilidad: async (clienteContabilidadid) => {
				const store = getStore();
				fetch(
					"http://127.0.0.1:5000/notaContabilidad/" + clienteContabilidadid,
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + store.token,
						},
					}
				)
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
				fetch("http://127.0.0.1:5000/notaContabilidad", {
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
				fetch(
					"http://127.0.0.1:5000/pagosContabilidad/" + clienteContabilidadid,
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + store.token,
						},
					}
				)
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
				fetch("http://127.0.0.1:5000/pagosContabilidad", {
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
				fetch(
					"http://127.0.0.1:5000/pagosContabilidad/" + clienteContabilidadid,
					{
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

			borrarPagoContabilidad: async (clienteContabilidadid) => {
				const store = getStore();
				setStore({ spinner: true });
				fetch(
					"http://127.0.0.1:5000/pagosContabilidad/" + clienteContabilidadid,
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
