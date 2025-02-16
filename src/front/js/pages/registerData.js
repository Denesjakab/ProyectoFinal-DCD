import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import homeImg from "../../img/training-828726_1920.jpg"
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../styles/register.css";
import { FormEmail } from "../component/email.jsx";
import { number } from "prop-types";

export const RegisterData = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        age: "",
        height: "",
        weight: "",
        goal: "",
        goal_kg: "",
        notes: "",
        waist: "",
        abdomen: "",
        arm: "",
        leg: "",
        photo_url: ""
    })

    const [errorData, setErrorData] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const sendData = async (e) => {
        e.preventDefault()

        if (formData.height && formData.weight && formData.goal && formData.goal_kg) {
            if (checkGoal(formData.weight, formData.goal, formData.goal_kg)) {
                const cleanedData = { ...formData };
                Object.keys(cleanedData).forEach(key => {
                    if (cleanedData[key] === "") delete cleanedData[key];
                })

                const registerData = await actions.firstProgress(cleanedData)
                if (registerData) {
                    console.log("Datos registrados correctamente.")
                    navigate("/home")
                } else {
                    console.log("Error en el registro de los datos.")
                }
            } else setErrorData(<p className="text-danger">Goal weight invalid.</p>)
        } else {
            setErrorData(<p className="text-danger">Faltan campos obligatorios.</p>)
        }
    }

    const checkGoal = (weight, goal, goal_kg) => {
        const weightNum = parseFloat(weight)
        const goalKgNum = parseFloat(goal_kg)

        if (isNaN(weightNum) || isNaN(goalKgNum) || weightNum === 0 || goalKgNum === 0) {
            console.error("Valores inválidos para peso o peso objetivo.")
            return false;
        }

        if (goal === "gain") {
            if (weightNum >= goalKgNum) return false
        }
        if (goal === "lose") {
            if (weightNum <= goalKgNum) return false
        }

        return true;
    }

    return (
        <div className="home-body">
            <form>
                <h1 className="d-flex justify-content-center text-white pb-2 ">Welcome!</h1>
                <p className="d-flex justify-content-center text-white fw-light  pb-3 ">Enter your data to keep better track of your journey</p>

                <div className="d-flex align-items-end container text-white">
                    <div className=" col-6 p-5 ">
                        <div className="form-group pb-3">
                            <label className="py-2">Age</label>
                            <input type="number" className="form-control" name="age" id="ageInput" value={formData.age} onChange={handleChange} placeholder="Enter your age" />
                        </div>
                        <div className="form-group pb-3">
                            <label className="py-2">Height*</label>
                            <input type="number" className="form-control" name="height" id="heightInput" value={formData.height} onChange={handleChange} placeholder="Enter your height" />

                        </div>

                        <div className="form-group pb-3">
                            <label className="py-2">Weight*</label>
                            <input type="number" className="form-control" name="weight" id="weightInput" value={formData.weight} onChange={handleChange} placeholder="Enter your Weight" />
                        </div>
                        <div className="form-group pb-3">
                            <label className="py-2">Weight Objective*</label>
                            <select className="form-select text-muted" name="goal" value={formData.goal} onChange={handleChange} placeholder="Weight objective">
                                <option value="">-</option>
                                <option value="gain">Gain</option>
                                <option value="lose">Lose</option>
                            </select>                         </div>
                        <div className="form-group pb-3">
                            <label className="py-2">How much weight?*</label>
                            <input type="number" className="form-control" name="goal_kg" id="goalKgInput" value={formData.goal_kg} onChange={handleChange} placeholder="How much weight?" />
                            {errorData !== "" ? errorData : <></>}
                        </div>

                        <div className="d-flex align-items-center pt-5 pb-3">
                            <Link to="/home">
                                <div className="">
                                    <button type="submit" className="btn btn-warning " onClick={sendData}>Add Data!</button>
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
                                <label className="py-2">Others</label>
                                <input type="text" className="form-control" name="notes" id="notesInput" value={formData.notes} onChange={handleChange} placeholder="Others" />
                            </div>

                            <div className="form-group pb-3">
                                <label className="py-2">Waist</label>
                                <input type="number" className="form-control" name="waist" id="waistInput" value={formData.waist} onChange={handleChange} placeholder="Enter your waist measurement" />
                            </div>
                            <div className="form-group pb-3">
                                <label className="py-2">Abdomen</label>
                                <input type="number" className="form-control" name="abdomen" id="abdomenInput" value={formData.abdomen} onChange={handleChange} placeholder="Enter your abdomen measurement" />
                            </div>

                            <div className="form-group pb-3">
                                <label className="py-2">Arm</label>
                                <input type="number" className="form-control" name="arm" id="armInput" value={formData.arm} onChange={handleChange} placeholder="Enter your arm measurement" />
                            </div>

                            <div className="form-group pb-3">
                                <label className="py-2">Leg</label>
                                <input type="number" className="form-control" name="leg" id="legInput" value={formData.leg} onChange={handleChange} placeholder="Enter your leg measurement" />
                            </div>
                            <div className="form-group pb-4">
                                <label className="py-2">Photo</label>
                                <input type="text" className="form-control" name="photo_url" id="photoUrlInput" value={formData.photo_url} onChange={handleChange} placeholder="Enter your photo" />

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}