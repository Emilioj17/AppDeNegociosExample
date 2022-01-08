const getState = ({ getStore, getActions, setStore  }) => {
	return {
		store: {
			usuarios: "null",
			usuario: null,
            response: null,
            clientesDt: null,
		},
		actions: {
			getUsuarios:  async () => {
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/usuario", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        //"Authorization": "Bearer " + store.token
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
			
			getUsuario: async (id) => {
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/usuario/" + id, {
                    method: "GET",
                    header: {
                        "Content-Type": "application/json",
                        //"Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            usuario: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: "usuario " + error.message
                        })
                    });
			},
			
			crearUsuario: async (nombre, apellido, correo, clave, tipo) => {
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/usuario", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
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
                        //"Authorization": "Bearer " + store.token
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
                //const store = getStore();
                fetch("http://127.0.0.1:5000/api/usuario/" + id, {
                    method: "DELETE" //,
                    //headers: {
                    //    "Content-Type": "application/json",
                        //"Authorization": "Bearer " + store.token
                    //}
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
            
            getClientesDt:  async () => {
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/clienteDt", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        //"Authorization": "Bearer " + store.token
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
            
            crearClienteDt: async (razon, rut, correo, fono, representante, rutRepresentante, fechaContratacion, erpyme) => {
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/clienteDt", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "razon": razon,
                        "rut": rut,
                        "rutsinpuntos": "rut", /* Revisar */
                        "vigente": "true",  /* Revisar */
                        "correo": correo,
                        "fono": fono,
                        "representante": representante,
                        "rutRepresentante": rutRepresentante,
                        "fechaContratacion": fechaContratacion,
                        "erpyme": erpyme   /* Revisar */
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

            editarClienteDt: async (id, razon, rut, vigente, correo, fono, representante, rutRepresentante, fechaContratacion, erpyme) => {
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/clienteDt/" + id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        //"Authorization": "Bearer " + store.token
                    },
                    body: JSON.stringify({
                        "razon": razon,
                        "rut": rut,
                        "vigente": vigente,
                        "correo": correo,
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
            
            crearNota: async (comentario, clienteDtid) => {
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/nota", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
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

            crearPago: async (year, mes, numeroTransferencia, montoPagado, montoCobrado, facturaNumero, clienteDtid) => {
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/dt" + year, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
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
                        //"Authorization": "Bearer " + store.token
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
                //const store = getStore();
                fetch("http://127.0.0.1:5000/api/dt" + year + "/" + clienteDtid, {
                    method: "DELETE" //,
                    //headers: {
                    //    "Content-Type": "application/json",
                        //"Authorization": "Bearer " + store.token
                    //}
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
