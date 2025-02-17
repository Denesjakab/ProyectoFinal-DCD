const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			user: {
				email: "",
				password: "",
				name: "",
				
				
			},


			profile:null, 
			currentUser: null

			

			clients: [],

			selectedClient: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });


			},

			setUser: (data) => {
				const store = getStore();
				setStore({ ...store, ...data })
			},

			clearUser: () => {
				setStore({ email: "", password: "", name: "" });
			},

			register: async (email, password, name) => {
				const resp = await fetch(process.env.BACKEND_URL + "/register", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email, password, name })
				})

				if (!resp.ok) throw Error("Hubo un problema con la petición de /register")

				if (resp.status === 400) {
					throw ("Hubo un problema con los datos enviados para el registro")
				}

				const data = await resp.json()
				return data
			},


			login: async (email, password) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/login", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ email, password })
					})
					if (!resp.ok) {
						const errorData = await resp.json()
						throw new Error(errorData.message || "Error en la autenticación")
					}

					const data = await resp.json()
					localStorage.setItem("token", data.token);
					localStorage.setItem("role", data.role);

					return data;
				} catch (error) {
					console.error("Error en login:", error.message)
					return false
				}
			},
			
			getProfile: async () => {
				const token = localStorage.getItem('token');

				try {
				  const resp = await fetch(process.env.BACKEND_URL + "/profileclient", {
					method: "GET",
					headers: {
					  "Content-Type": "application/json",
					  Authorization: `Bearer ${token}`,
					},
				  });
		
				  if (!resp.ok) {
					const errorData = await resp.json();
					throw new Error(errorData.msg || "Error al obtener el perfil del cliente");
				  }
		
				  const data = await resp.json();
				  setStore({ profile: data }); 
				  setStore({currentUser: data})
				  return data;
				} catch (error) {
				  console.error("Error al obtener los datos del cliente:", error.message);
				  return false;
				}
			  },

      getClients: async (userToken) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/list-clients", {
						headers: { "Authorization": `Bearer ${userToken}` }

					}
					)
					if (response.status === 401) {
						throw new Error("token invalido")
					}
					if (response.status === 403) {
						throw new Error("usuario no autorizado")
					}
					if (!response.ok) {
						throw new Error("error al obtener los datos")
					}
					const data = await response.json()
					setStore({ clients: data })
					return data
				} catch (error) {
					console.log("error al obtener los clientes", error)
				}
			},

			setSelectedClient: (client) => {
				setStore({ selectedClient: client });
			},

			firstProgress: async (dataUser) => {
				const token = localStorage.getItem("token")
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/first-progress", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + token
						},
						body: JSON.stringify(dataUser)
					})

					if (resp.status === 401) {
						throw Error("Problemas con el token enviado.")
					}

					const data = await resp.json()
					return data;
				} catch (error) {
					console.error("Error en first-progress:", error.message)
					return false
				}
			},

			newPlan: async (dataPlan) => {
				const token = localStorage.getItem("token")
				console.log(dataPlan);
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/new-plan", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + token
						},
						body: JSON.stringify(dataPlan)
					})

					const data = await resp.json()
					return data;
				} catch (error) {
					console.error("Error en new_plan:", error.message)
					return false
				}

			},

			uploadFile: async (file) => {
				try {
					let formData = new FormData()
					formData.append("file", file)

					let response = await fetch(process.env.BACKEND_URL + "/upload", {
						method: "POST",
						body: formData
					});

					let result = await response.json()

					if (result.url) {
						return result.url
					} else {
						console.error("Error al subir la imagen:", result)
						return null
					}
				} catch (error) {
					console.error("Error en la subida de imagen:", error)
					return null
				}
			},

		}
	};
};

export default getState;
