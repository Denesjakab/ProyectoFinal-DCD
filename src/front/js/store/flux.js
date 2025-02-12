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
				setStore({ ...store, ...data });
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
				const dataLogin = {
					"email": email,
					"password": password
				}
				const resp = await fetch(process.env.BACKEND_URL + "/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(dataLogin)
				})
				if (!resp.ok) throw Error("There was a problem in the login request")
				const data = await resp.json()
				console.log(data)
				// Guarda el token en la localStorage
				// También deberías almacenar el usuario en la store utilizando la función setItem
				localStorage.setItem("token", data.token);
				localStorage.setItem("role", data.role);
				return data
			},
			// register: async (email, password,name)=>{
			// 	const dataRegister = {
			// 		email: email,
			// 		password: password,
			// 		name: name
			// 	}
			// 	const resp = await fetch(process.env.BACKEND_URL + "/register", {
			// 		method: "POST",
			// 		headers: {"Content-Type":"application/json"},
			// 		body: JSON.stringify(dataRegister)
			// 	})
			// 	if (!resp.ok) throw Error("There was a problem in the register request")
			// 	const data = await resp.json()
			// 	return data
			// }
			
		}
	};
};

export default getState;
