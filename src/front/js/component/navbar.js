import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/navbar.css";
import Logo from "../../img/logo.png"
export const Navbar = () => {
	return (
		
		<nav className="navbar custom-navbar" style={{color:"rgba(15, 15, 15, 0.992)"}}>
			<div className="container">
				{/* <Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link> */}
				<img src={Logo}></img>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
					<Link to="/">
						<button className="btn btn-warning  ms-3">Home</button>
					</Link>
					<Link to="/login">
						<button className="btn btn-warning  ms-3">Log in</button>
					</Link>
					
				</div>
			</div>
		</nav>
	);
};
