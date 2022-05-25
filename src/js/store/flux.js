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

			/* USUARIOS Y LOGIN */
			loginUsuario: async (correo, clave) => {
				const actions = getActions();
				setStore({ spinner: true });
				fetch("https://dncurriculum.herokuapp.com/login", {
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
				fetch("https://dncurriculum.herokuapp.com/usuario/" + usuarioid, {
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
				fetch("https://dncurriculum.herokuapp.com/usuario", {
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
				fetch("https://dncurriculum.herokuapp.com/usuario", {
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
				fetch("https://dncurriculum.herokuapp.com/usuario/" + id, {
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
				fetch("https://dncurriculum.herokuapp.com/usuario/" + id, {
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
				fetch("https://dncurriculum.herokuapp.com/xContabilidad/" + page_num, {
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
				fetch("https://dncurriculum.herokuapp.com/busquedaContabilidad", {
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
				fetch("https://dncurriculum.herokuapp.com/filtroContabilidad", {
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
					"https://dncurriculum.herokuapp.com/clienteContabilidad/" +
						clienteContabilidadid,
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
				fetch("https://dncurriculum.herokuapp.com/clienteContabilidad", {
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
				fetch("https://dncurriculum.herokuapp.com/clienteContabilidad/" + id, {
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
					"https://dncurriculum.herokuapp.com/notaContabilidad/" +
						clienteContabilidadid,
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
				fetch("https://dncurriculum.herokuapp.com/notaContabilidad", {
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
					"https://dncurriculum.herokuapp.com/pagosContabilidad/" +
						clienteContabilidadid,
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
				fetch("https://dncurriculum.herokuapp.com/pagosContabilidad", {
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
					"https://dncurriculum.herokuapp.com/pagosContabilidad/" +
						clienteContabilidadid,
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
					"https://dncurriculum.herokuapp.com/pagosContabilidad/" +
						clienteContabilidadid,
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
