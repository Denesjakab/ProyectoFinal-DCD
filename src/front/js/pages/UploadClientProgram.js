import "../../styles/UploadClientProgram.css";
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";

const UploadClientProgram = () => {

  const { store, actions } = useContext(Context)
  const navigate = useNavigate()
  const [plan_url, setPlanUrl] = useState("")
  const [errorData, setErrorData] = useState("")

  const handleFileUpload = async (e) => {
    e.preventDefault()

    const file = e.target.file.files[0]
    if (!file) {
      console.log("Por favor, selecciona un plan.")
      return
    }

    const plan = await actions.uploadFile(file)

    if (plan) {
      setPlanUrl({ plan_url: plan })
    } else {
      console.log("Error al subir el plan.")
    }
  }

  const sendData = async (e) => {
    e.preventDefault()

    const client = store.selectedClient.client
    if (plan_url.plan_url && client) {
      const planData = { 'user_id': client.id, 'file_url': plan_url.plan_url }
      const registerData = await actions.newPlan(planData)
      if (registerData) {
        navigate("/trainer")
      } else {
        setErrorData(<p className="text-danger">Error al subir plan, reintentelo.</p>)
      }
    } setErrorData(<p className="text-danger">Error al seleccionar plan.</p>)
  }

  return (
    <>
      <form id="upload-form" onSubmit={handleFileUpload}>
        <label htmlFor="file">Seleccionar Plan:</label>
        <input type="file" id="file" name="file" required />

        <button className="btn btn-warning m-1" type="submit">Subir Plan</button>

        <label htmlFor="photo_url">URL:</label>
        <input type="text" id="photo_url" name="photo_url" readOnly value={plan_url.plan_url || ""} />
      </form>
      <div className="d-flex align-items-center pt-5 pb-3">
        <Link to="/home">
          <div className="">
            <button type="submit" className="btn btn-warning " onClick={sendData}>Send!</button>
          </div>

        </Link>
        <Link to="/trainer">
          <button className="btn btn-warning  ms-5">Home</button>
        </Link>
      </div>
    </>
  )
}

export default UploadClientProgram
