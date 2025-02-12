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
				name: ""
			},
			clients: [],

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
			getClients: async (userToken) => {
				try {
					// const userToken = localStorage.getItem("token")
					console.log(userToken)
					const response = await fetch(process.env.BACKEND_URL + "/list-clients", {
						headers: { "Authorization": `Bearer ${userToken}` }
				
					}
					)
					if (response.status === 401) {
						throw new Error("token invalido")
					}
					if (!response.ok) {
						throw new Error("error al obtener los datos")
					}
					const data = await response.json()
					setStore({clients: data})
					console.log("estos son mis datos",data)
					return data
				} catch(error){
					console.log("error al obtener los clientes",error)
				}

	
			},

		}
	};
};

export default getState;
