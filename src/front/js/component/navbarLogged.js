import React, { useContext, useEffect } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import "../../styles/navbar.css";
import Logo from "../../img/logo.png"
// import { NavbarLogged } from "./navbarLogged";
import { Context } from "../store/appContext.js";

export const NavbarLogged = ({handleLoggout}) => {

    const { store, actions } = useContext(Context)

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


                    <div className="dropdown">
                        <button className="btn btn btn-warning  ms-3 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                        >
                            Name
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                           
                                <li><a className="dropdown-item" href="#"
                                    onClick={handleLoggout}>Logout</a></li>
                            

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
