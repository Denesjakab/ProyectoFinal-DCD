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
			]
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
			login: async (email, password) => {
				// const email= 'celia.bcn28@gmail.com'
				// const password ='8264'
				const dataLogin = { 
					"email": email,
					"password":password
				}
				// const url = 'https://studious-space-meme-pjg46j5xjxxx3xww-3000.app.github.dev/login'
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
				localStorage.setItem("jwt-token", data.token);
				localStorage.setItem("role", data.role);
				return data
			},
			// const login = async (username, password) => {
			// 	const resp = await fetch(`https://your_api.com/login`, {
			// 		method: "POST",
			// 		headers: { "Content-Type": "application/json" },
			// 		body: JSON.stringify({ username, password })
			// 	})

			// 	if (!resp.ok) throw Error("There was a problem in the login request")

			// 	if (resp.status === 401) {
			// 		throw ("Invalid credentials")
			// 	}
			// 	else if (resp.status === 400) {
			// 		throw ("Invalid email or password format")
			// 	}
			// 	const data = await resp.json()
			// 	// Guarda el token en la localStorage
			// 	// También deberías almacenar el usuario en la store utilizando la función setItem
			// 	localStorage.setItem("jwt-token", data.token);

			// 	return data
			// },
		}
	};
};

export default getState;
