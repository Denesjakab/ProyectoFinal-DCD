import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import homeImg from "../../img/training-828726_1920.jpg"
import { Link, useParams, useNavigate } from "react-router-dom";
import "../../styles/register.css";
import { FormEmail } from "../component/email.jsx";

export const Register = () => {

    const { store, actions } = useContext(Context)
    const navigate = useNavigate()


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    return (


        <div className="d-flex justify-content-center home-body">
            <div className="container align-items-center row text-white">
                <div className=" p-5 col-6 flex-b">
                    <form>
                        <h1 className="pb-5">Welcome!</h1>

                        <div className="form-group pb-3">
                            <label for="exampleInputName" className="py-2">Name</label>
                            <input type="name" className="form-control" id="name" placeholder="Name"

                                value={name}
                                onChange={(e) => { setName(e.target.value) }} />
                        </div>
                        <div className="form-group pb-3">
                            <label for="exampleInputEmail1" className="py-2">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <div className="form-group pb-3">
                            <label for="exampleInputPassword1" className="py-2">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                        </div>


                        <div className="d-flex align-items-center">

                            <Link to="/registerData">
                                <div className="py-">
                                    <button type="submit" className="btn btn-warning "
                                        onClick={() => {
                                            const register = { password: password, email: email, name: name }
                                            actions.register(register)
                                            setEmail("")
                                            setPassword("")
                                            setName("")
                                            navigate('/home')
                                            
                                        }}>Join Now!</button>
                                </div>

                            </Link>
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

        // <FormEmail
        // name="Name"
        // title="Welcome!"
        // login="Join Now!">

        // </FormEmail>

    )

}