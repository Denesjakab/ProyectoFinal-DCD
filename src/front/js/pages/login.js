import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";
import homeImg from "../../img/training-828726_1920.jpg"
import { Link, useParams, useNavigate } from "react-router-dom";
import "../../styles/register.css";
import { FormEmail } from "../component/email.jsx";
export const Login = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()
    const [dataLogin, setDataLogin] = useState({
        email: "",
        password: ""
    })
    const [loginError, setLoginError] = useState("")
    const handleChange = (e) => {
        const { name, value } = e.target
        setDataLogin({ ...dataLogin, [name]: value })
        actions.setUser({ ...store, [name]: value })
    }
    const sendData = async (e) => {
        e.preventDefault()
        if (dataLogin.email && dataLogin.password) {
            const loginSuccess = await actions.login(store.email, store.password)
            if (loginSuccess) {
                const role = localStorage.role
                console.log("Usuario logueado correctamente.", role)
                if (role == "trainer") {
                    navigate("/trainer")
                } else navigate("/home")
            } else {
                setLoginError(<p className="text-danger">User or Password incorrect!</p>)
                console.log("Error: Usuario o contraseña incorrectos.")
            }
        } else {
            console.log("Faltan datos. Completa el formulario.")
        }
    }
    useEffect(() => {
        if (store.email === "" && store.password === "") {
            setUserData({ email: "", password: "" })
        }
    }, [store.email, store.password])
    return (
        <div className=" d-flex justify-content-center home-body">
            <div className=" d-flex container align-items-center row text-white">
                <div className=" p-5 col-6 flex-b">
                    <form>
                        <h1 className="pb-5">"Welcome Back!"</h1>
                        <div className="form-group pb-5">
                            <label htmlFor="exampleInputEmail1" className="py-2">Email address</label>
                            <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email"
                                value={dataLogin.email}
                                onChange={handleChange}
                            />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group pb-5">
                            <label htmlFor="exampleInputPassword1" className="py-2">Password</label>
                            <input type="password" className="form-control" name="password" id="password" placeholder="Password"
                                value={dataLogin.password}
                                onChange={handleChange} />
                            {loginError !== "" ? loginError : <></>}
                        </div>
                        <div className="d-flex align-items-center">
                            {/* <Link to="/home"> */}
                            <div className="py-5">
                                <button type="submit" className="btn btn-warning "
                                    onClick={sendData}
                                >Log In</button>
                            </div>
                            {/* </Link> */}
                            <Link to="/">
                                <button className="btn btn-warning  ms-5">Home</button>
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="col-6 align-items-center">
                    <img src="https://cdn.pixabay.com/photo/2017/01/09/11/30/dumbbell-1966247_1280.jpg" style={{ maxHeight: "150%", maxWidth: "150%" }}></img>
                </div>
            </div>
        </div>
        
    )
}

