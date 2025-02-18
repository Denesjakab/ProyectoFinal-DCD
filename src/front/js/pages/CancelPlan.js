import React, { useContext } from 'react'
import "../../styles/CancelPlan.css"
import { Link } from 'react-router-dom'
import { Context } from "../store/appContext";

const CancelPlan = () => {
  const { store, actions } = useContext(Context);

  const sendCancel = async (e) => {
    e.preventDefault()

    try {
      await actions.cancelMyMember()

    } catch (error) {
      console.error("Error en el proceso de cancelación:", error)
    }
  }

  return (
    <div className='vista-cancelar'>
      <h1 className='cancel-title'>Why Do You Want To Cancel Your Plan?</h1>
      <div className='opciones-generales'>
        <div className='opciones-izquierda'>
          <input type="checkbox" className="btn-check border" id="razon1" autoComplete="off" />
          <label className="btn btn-outline-warning" htmlFor="razon1">I am moving to a new location</label>
          <input type="checkbox" className="btn-check" id="razon2" autoComplete="off" />
          <label className="btn btn-outline-warning" htmlFor="razon2">I need to cut back on expenses</label>
          <input type="checkbox" className="btn-check" id="razon3" autoComplete="off" />
          <label className="btn btn-outline-warning" htmlFor="razon3">I am not seeing the results that i expected</label>
        </div>
        <div className='opciones-derecha'>
          <input type="checkbox" className="btn-check" id="razon4" autoComplete="off" />
          <label className="btn btn-outline-warning" htmlFor="razon4">My schedule does not allw regular visits</label>
          <input type="checkbox" className="btn-check" id="razon5" autoComplete="off" />
          <label className="btn btn-outline-warning" htmlFor="razon5">I am trying other fitness options</label>
          <input type="checkbox" className="btn-check" id="razon6" autoComplete="off" />
          <label className="btn btn-outline-warning" htmlFor="razon6">Others</label>
        </div>
      </div>
      <div className='ultima-opcion'>
        <input type="checkbox" className="btn-check" id="razon7" autoComplete="off" />
        <label className="btn btn-outline-warning" htmlFor="razon7">I have reached my GOALS!!!</label>
        <Link to="/">
          <button className="cancel-button" onClick={sendCancel}>Cancel Plan</button>
        </Link>
      </div>

    </div>
  )
}

export default CancelPlan
