import React from "react";
import ReactDOM from "react-dom";


export const FormEmail = (props) => {

    return (
        <div className="home-body">
            <div className="container align-items-center row text-white">
                <div className=" p-5 col-6 flex-b">
                    <form>
                        <h1 className="pb-5">{props.title}</h1>

                        <div className="form-group pb-5">
                            <label for="exampleInputName" className="py-2">{props.name}</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder={props.name} />
                        </div>
                        <div className="form-group pb-5">
                            <label for="exampleInputEmail1" className="py-2">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <div className="form-group pb-5">
                            <label for="exampleInputPassword1" className="py-2">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="py-5">
                            <button type="submit" className="btn btn-warning ">{props.login}</button>
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