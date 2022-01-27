const getState = ({ getStore, getActions, setStore }) => {
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    function sortByMonth(arr) {
        //Esta funcion permite ordenar los meses de los pagos. Ver cada getPago2019
        const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        arr.sort(function (a, b) {
            return meses.indexOf(a.mes)
                 - meses.indexOf(b.mes);
        });
      }

	return {
        store: {
            witch: true,
			usuarios: null,
			usuario: null,
            response: null,
            clientesDt: null, //Lista de Clientes de Dt
            infoClienteDt: null, //ClienteDt Seleccionado
            nota: null,  //Notas especificas al id del ClienteDt seleccionado
            pago2019: null,  //Pagos especificos al id del ClienteDt seleccionado
            pago2020: null,  //Pagos especificos al id del ClienteDt seleccionado
            pago2021: null,  //Pagos especificos al id del ClienteDt seleccionado
            pago2022: null,  //Pagos especificos al id del ClienteDt seleccionado
            usuarioActual: null,  //Usuario Actual que está Conectado
            token: null  //Token del Usuario Actual Conectado
		},
        actions: {
            //Usuarios
            loginUsuario: async (correo, clave) => {
                const actions = getActions();
                fetch("http://localhost:5000/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ "correo": correo, "clave": clave })
                }).then(res => {

                    if (res.status === 200) return res.json();
                    else if (res.status === 401) {
                        alert("Usuario o clave Incorrecto");
                    }
                }).then(data => {
                    sessionStorage.setItem("usuarioActual", JSON.stringify(data[0]))
                    sessionStorage.setItem("token", data[1])
                    setStore({ usuarioActual: data[0], token: data[1] });
                    // setStore({ ingreso: ["Correcto"] });
                }
                ).catch(error => { console.error("Hay un problemilla", error) })
            },

            getUsuario:  async (usuarioid) => {
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/usuario/" + usuarioid, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            usuario: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: "usuario seleccionado " + error.message
                        })
                    });
			},

			getUsuarios:  async () => {
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/usuario", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            usuarios: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: "usuarios " + error.message
                        })
                    });
			},
			
			crearUsuario: async (nombre, apellido, correo, clave, tipo) => {
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/usuario", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token //revisar
                    },
                    body: JSON.stringify({
                        "nombre": nombre,
                        "apellido": apellido,
                        "correo": correo,
                        "clave": clave,
                        "tipo": tipo
                    })
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },

			editarUsuario: async (id, nombre, apellido, correo, clave, tipo) => {
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/usuario/" + id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    },
                    body: JSON.stringify({
                        "nombre": nombre,
                        "apellido": apellido,
                        "correo": correo,
                        "clave": clave,
                        "tipo": tipo
                    })
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
			},
			
			borrarUsuario: async (id) => {
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/usuario/" + id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },

            //Clientes Dt
            
            getClientesDt:  async () => {
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/clienteDt", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            clientesDt: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: "clientesDT " + error.message
                        })
                    });
            },

            getClienteDt:  async (clienteDtid) => {
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/clienteDt/"+ clienteDtid, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            infoClienteDt: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: "clientesDT " + error.message
                        })
                    });
            },
            
            crearClienteDt: async (razon, rut, vigente, correo, correoSecundario, correoTerciario, fono, representante, rutRepresentante, fechaContratacion, erpyme) => {
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/clienteDt", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    },
                    body: JSON.stringify({
                        "razon": razon,
                        "rut": rut,
                        "vigente": vigente,
                        "correo": correo,
                        "correoSecundario": correoSecundario,
                        "correoTerciario": correoTerciario,
                        "fono": fono,
                        "representante": representante, 
                        "rutRepresentante": rutRepresentante,
                        "fechaContratacion": fechaContratacion,
                        "erpyme": erpyme
                    })
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },

            editarClienteDt: async (id, razon, rut, vigente, correo, correoSecundario, correoTerciario, fono, representante, rutRepresentante, fechaContratacion, erpyme) => {
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/clienteDt/" + id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    },
                    body: JSON.stringify({
                        "razon": razon,
                        "rut": rut,
                        "vigente": vigente,
                        "correo": correo,
                        "correoSecundario": correoSecundario,
                        "correoTerciario": correoTerciario,
                        "fono": fono,
                        "representante": representante,
                        "rutRepresentante": rutRepresentante,
                        "fechaContratacion": fechaContratacion,
                        "erpyme": erpyme
                    })
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            
            //Notas Clientes Dt
            getNota:  async (clienteDtid) => {
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/nota/" + clienteDtid, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            nota: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: "clientesDT " + error.message
                        })
                    });
            },

            crearNota: async (comentario, clienteDtid) => {
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/nota", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    },
                    body: JSON.stringify({
                        "comentario": comentario,
                        "clienteDtid": clienteDtid,
                    })
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },

            //Pagos Clientes Dt

            getPago2019:  async (clienteDtid) => {
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/dt2019/" + clienteDtid, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        sortByMonth(data)
                        setStore({
                            pago2019:data
                        });
                    })
                    .catch((error) => {
                        setStore({
                            error: "clientesDT " + error.message
                        })
                    });
            },

            getPago2020:  async (clienteDtid) => {
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/dt2020/" + clienteDtid, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        sortByMonth(data);
                        setStore({
                            pago2020: data
                        });
                    })
                    .catch((error) => {
                        setStore({
                            error: "clientesDT " + error.message
                        })
                    });
            },

            getPago2021:  async (clienteDtid) => {
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/dt2021/" + clienteDtid, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        sortByMonth(data);
                        setStore({
                            pago2021: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: "clientesDT " + error.message
                        })
                    });
            },

            getPago2022:  async (clienteDtid) => {
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/dt2022/" + clienteDtid, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        sortByMonth(data);
                        setStore({
                            pago2022: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: "clientesDT " + error.message
                        })
                    });
            },

            crearPago: async (year, mes, numeroTransferencia, montoPagado, montoCobrado, facturaNumero, clienteDtid) => {
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/dt" + year, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    },
                    body: JSON.stringify({
                        "mes": mes,
                        "numeroTransferencia": numeroTransferencia,
                        "montoPagado": montoPagado,
                        "montoCobrado": montoCobrado,
                        "facturaNumero": facturaNumero,
                        "clienteDtid": clienteDtid,
                    })
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },

            editarPago: async (year, mes, numeroTransferencia, montoPagado, montoCobrado, facturaNumero, clienteDtid) => {
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/dt" + year + "/" + clienteDtid, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    },
                    body: JSON.stringify({
                        "mes": mes,
                        "numeroTransferencia": numeroTransferencia,
                        "montoPagado": montoPagado,
                        "montoCobrado": montoCobrado,
                        "facturaNumero": facturaNumero
                    })
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },

            borrarPago: async (year, clienteDtid) => {
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/dt" + year + "/" + clienteDtid, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
			

		}
	};
};

export default getState;
