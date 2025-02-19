
import React, { useEffect } from "react";
import { useState, useContext} from "react";
import { NavbarLogged } from "./navbarLogged";
import { Link, useLocation, useNavigate, } from "react-router-dom";

import "../../styles/navbar.css";
import Logo from "../../img/logo.png"
import { Context } from "../store/appContext.js";
export const Navbar = () => {
	
	const { store, actions } = useContext(Context)
	
	const navigate = useNavigate()
	const [isloggedin, setisLoggedIn] = useState(false)
	// let isloggedin = localStorage.getItem("token") != null
	
	useEffect(()=>{
	
			const token = localStorage.getItem("token")
		if (token) {
			setisLoggedIn(true);
			console.log(isloggedin)
		}
		else {
			setisLoggedIn(false)
			navigate("/")
		}
	
	
		
	},[localStorage.getItem("token")])

	const handleLoggout = ()=>{
		actions.logout()
		setisLoggedIn(false)
		navigate("/")
		
	}


	return (

		<div>
			{isloggedin  === false ? (<>


			<nav className="navbar custom-navbar">
				<div className="container">
					<img src={Logo} style={{ maxHeight: "10%", maxWidth: "10%" }}></img>
					<div className="ml-auto">
						<Link to="/login">
							<button className="btn btn-warning  m-3">Log in</button>
						</Link>

					</div>
				</div>
			</nav>

			 </>) : (<nav className="navbar custom-navbar">
				<div className="container">


					{/* <Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link> */}
					<img src={Logo} style={{ maxHeight: "5%", maxWidth: "5%" }}></img>
					<div className="ml-auto">
						{/* <Link to="/demo">
								<button className="btn btn-primary">Check the Context in action</button>
							</Link> */}

						
							<button className="btn btn-warning  ms-3"
							onClick={handleLoggout}>Logout</button>
						

					</div>
				</div>
			</nav>)

			} 

		</div>
	);
};
