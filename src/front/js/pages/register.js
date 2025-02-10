import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import homeImg from "../../img/training-828726_1920.jpg"
import { Link, useParams } from "react-router-dom";
import "../../styles/register.css";
import { FormEmail } from "../component/email.jsx";

export const Register = () => {

    return (

        <FormEmail
        name="Name"
        title="Welcome!"
        login="Join Now!">
            
        </FormEmail>
)

}