const getState = ({ getStore, getActions, setStore  }) => {
	return {
		store: {
			usuarios: null,
			usuario: null,
			response: null
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
			
			setUsuario: async (nombre, apellido, correo, clave, tipo, estado) => {
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
                        "tipo": tipo,
                        "estado": estado
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

			editUsuario: async (id, nombre, apellido, correo, clave, tipo, estado) => {
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
                        "tipo": tipo,
                        "estado": estado
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
			
			deleteUsuario: async (id) => {
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/usuario/" + id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        //"Authorization": "Bearer " + store.token
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
