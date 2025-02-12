import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import homeImg from "../../img/training-828726_1920.jpg"
import { Link, useParams } from "react-router-dom";
import "../../styles/register.css";
import { FormEmail } from "../component/email.jsx";

export const RegisterData = () => {

    return (


        <div className="home-body">
            <form>
                <h1 className="d-flex justify-content-center text-white pb-2 ">Welcome!</h1>
                <p className="d-flex justify-content-center text-white fw-light  pb-3 ">Enter your data to keep better track of your journey</p>

                
                <div className="d-flex align-items-end container text-white">

                    <div className=" col-6 p-5 ">

                        <div className="form-group pb-3">
                            <label for="exampleInputName" className="py-2">Age</label>
                            <input type="" className="form-control" id="exampleInputPassword1" placeholder="Enter your age" />
                        </div>
                        <div className="form-group pb-3">
                            <label for="exampleInputEmail1" className="py-2">Height</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your height" />

                        </div>

                        <div className="form-group pb-3">
                            <label for="exampleInputPassword1" className="py-2">Weight</label>
                            <input type="" className="form-control" id="exampleInputPassword1" placeholder="Enter your Weight" />
                        </div>
                        <div className="form-group pb-3">
                            <label for="exampleInputName" className="py-2">Weight Objective</label>
                            <select className="form-select text-muted" aria-label="Default select example">
                            <option selected>Weight objective</option>
                            <option value="1">Win</option>
                            <option value="2">Lose</option>
                          </select>                         </div>
                        <div className="form-group pb-3">
                            <label for="exampleInputName" className="py-2">How much weight?</label>
                            <input type="" className="form-control" id="exampleInputPassword1" placeholder="How much weight?"/>

                        </div>


                        <div className="d-flex align-items-center pt-5 pb-3">

                            <Link to="/home">
                                <div className="">
                                    <button type="submit" className="btn btn-warning ">Add Data!</button>
                                </div>

                            </Link>
                            <Link to="/">
                                <button className="btn btn-warning  ms-5">Home</button>
                            </Link>

                        </div>

                    </div>



                    <div className="col-6  ">
                        <div className=" p-5  ">

                            <div className="form-group  pb-3">
                                <label for="exampleInputName" className="py-2">Others</label>
                                <input type="" className="form-control" id="exampleInputPassword1" placeholder="Others" />
                            </div>

                            <div className="form-group pb-3">
                                <label for="exampleInputName" className="py-2">Waist</label>
                                <input type="" className="form-control" id="exampleInputPassword1" placeholder="Enter your waist measurement" />
                            </div>
                            <div className="form-group pb-3">
                                <label for="exampleInputEmail1" className="py-2">Abdomen</label>
                                <input type="" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your abdomen measurement" />

                            </div>

                            <div className="form-group pb-3">
                                <label for="exampleInputPassword1" className="py-2">Arm</label>
                                <input type="" className="form-control" id="exampleInputPassword1" placeholder="Enter your arm measurement" />

                            </div>

                            <div className="form-group pb-3">
                                <label for="exampleInputName" className="py-2">Leg</label>
                                <input type="" className="form-control" id="exampleInputPassword1" placeholder="Enter your leg measurement" />
                            </div>
                            <div className="form-group pb-4">
                                <label for="exampleInputName" className="py-2">Photo</label>
                                <input type="" className="form-control" id="exampleInputPassword1" placeholder="Enter your photo" />
                            </div>





                        </div>

                    </div>


                </div>
            </form>
        </div>


    )

}