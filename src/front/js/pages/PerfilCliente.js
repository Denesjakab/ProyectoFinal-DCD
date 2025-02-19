import React, { useContext, useEffect, useState } from 'react'
import "../../styles/PerfilCliente.css";
import { Context } from "../store/appContext";
import { Link, useNavigate } from 'react-router-dom';

const PerfilCliente = () => {
    const { store, actions } = useContext(Context);  
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()
   
  
    useEffect(() => {
      const token = localStorage.getItem('token')
      if (token) {
        actions.getProfile()
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
        navigate("/")
      }

  }, []);


  return (
    <div className="container perfil-cliente">
      {isLoggedIn && (<>
        <div className="parte-arriba">
          <div className="info-cliente">
            <h3 className='nombre-cliente'>{store.currentUser?.name}</h3>
            <img
              src="https://images.pexels.com/photos/8401818/pexels-photo-8401818.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Foto-del-cliente"
              className="foto-cliente"
            />
            <p className='descarga-aqui'>Descarga aquí tu PLAN</p>
            <button className="download-button">Download program</button>
          </div>

          <div className="datos-cliente">
            <h2 className='datos-nombre'>Data of {store.currentUser?.name}</h2>
            <p className='estadisticas'>Age</p>
            <div className='cm'><p>{store.currentUser?.age} years</p></div>
            <p className='estadisticas'>Height</p>
            <div className='cm'><p>{store.currentUser?.height} cm</p></div>
            <p className='estadisticas'>Weight</p>
            <div className='cm'><p>{store.currentUser?.progress.weight} kg</p></div>
            <p className='estadisticas'>Waist size</p>
            <div className='cm'><p>{store.currentUser?.progress.waist} cm</p></div>
            <p className='estadisticas'>Abdomen size</p>
            <div className='cm'><p>{store.currentUser?.progress.abdomen} cm</p></div>
            <p className='estadisticas'>Arm size</p>
            <div className='cm'><p>{store.currentUser?.progress.arm} cm</p></div>
            <p className='estadisticas'>Leg size</p>
            <div className='cm'><p>{store.currentUser?.progress.leg} cm</p></div>
          </div>
          <div className='boton-cliente'>
            <Link to="/PerfilCliente/updateProgress">
              <button className="update-progres">Update Progress</button>
            </Link>
          </div>
        </div>
      </>)}
      <div className="header_container">
        <div className="line"></div>
        <div className="header">
          Current Program
        </div>
        <div className="line"></div>
      </div>

      <div className="programa-actual">
        <p className='foto-plan'>Foto del plan actual</p>
        <img src="https://images.pexels.com/photos/5387262/pexels-photo-5387262.jpeg?auto=compress&cs=tinysrgb&w=600" alt="programa-actual" className="current-plan" />
        <Link to="/perfilcliente/Cancelplan">
          <button className="cancel-button">Cancel my gym membership</button>
        </Link>
      </div>



    </div>
  );
};

export default PerfilCliente;