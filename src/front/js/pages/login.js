import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import homeImg from "../../img/training-828726_1920.jpg"
import { Link, useParams } from "react-router-dom";
import "../../styles/register.css";
import { FormEmail } from "../component/email.jsx";

export const Login = () => {

    return (

        <div className=" d-flex justify-content-center home-body">
            <div className=" d-flex container align-items-center row text-white">
                <div className=" p-5 col-6 flex-b">
                    <form>
                        <h1 className="pb-5">"Welcome Back!"</h1>


                        <div className="form-group pb-5">
                            <label for="exampleInputEmail1" className="py-2">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <div className="form-group pb-5">
                            <label for="exampleInputPassword1" className="py-2">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>

                        <div className="d-flex align-items-center">
                            <Link to="/home">
                                <div className="py-5">
                                    <button type="submit" className="btn btn-warning ">Log In</button>
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
        //         <FormEmail
        //         title="Welcome Back!"
        //         login="Log In">

        //         </FormEmail>
        // 
    )

}