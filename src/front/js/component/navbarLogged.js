import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/navbar.css";
import Logo from "../../img/logo.png"
// import { NavbarLogged } from "./navbarLogged";
export const Navbar = () => {
    return (

        <nav className="navbar custom-navbar" style={{ color: "rgba(15, 15, 15, 0.992)" }}>
            <div className="container">
                {/* <Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link> */}
                <img src={Logo} style={{ maxHeight: "5%", maxWidth: "5%" }}></img>
                <div className="ml-auto">
                    <Link to="/demo">
                        <button className="btn btn-primary">Check the Context in action</button>
                    </Link>


                    <div class="dropdown">
                        <button class="btn btn btn-warning  ms-3 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Name
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <Link to="/">
                            <li><a class="dropdown-item" href="#">Logout</a></li>
                         </Link>

                        </ul>
                    </div>

                    
                    {/* <Link to="/login">
                        <button className="btn btn-warning  ms-3">Log out</button>
                    </Link> */}

                </div>
            </div>
        </nav>
    );
};
