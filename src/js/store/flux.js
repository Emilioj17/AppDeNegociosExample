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
                fetch("http://127.0.0.1:5000/api/usuarios/" + id, {
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
                fetch("http://127.0.0.1:5000/api/usuarios/" + id, {
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
                        console.log(data);
                    })
                    .catch((error) => {
                        setStore({
                            error: "clientesDT " + error.message
                        })
                    });
			},
			

		}
	};
};

export default getState;
