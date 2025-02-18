import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import Logo from "../../img/logo.png"
export const Navbar = () => {

	return (

		<div>
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
		</div>
	);
};
