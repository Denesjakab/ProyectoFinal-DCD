import React from 'react'
import "../../styles/PerfilCliente.css";
import { Link } from 'react-router-dom';

const PerfilCliente = () => {
  

  return (

    
    <div className="container perfil-cliente">
      <div className="parte-arriba">

        <div className="info-cliente">
          <h3 className='nombre-cliente'>Nombre del Cliente</h3>
          <img src="https://images.pexels.com/photos/8401818/pexels-photo-8401818.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Foto-del-cliente" className="foto-cliente" />
          <p className='descarga-aqui'>Descarga aquí tu PLAN</p>
          <button className="download-button">Download program</button>
        </div>

        <div className="datos-cliente">
          <h2 className='datos-nombre'>Datos de "Nombre del cliente"</h2>
          <p className='estadisticas'>Weight</p>
          <input className='cm' type="text" placeholder="cm" /> 
          <p className='estadisticas'>Waist sixe</p>
          <input className='cm'type="text" placeholder="cm" />
          <p className='estadisticas'>Abdominal size</p>
          <input className='cm' type="text" placeholder="cm" />
          <p className='estadisticas'>Arm size</p>
          <input className='cm' type="text" placeholder="cm" />
          <p className='estadisticas'>Leg size</p>
          <input className='cm' type="text" placeholder="cm" />
          <Link to="/PerfilCliente/updateProgress">
          <button className="update-progres">Update Progress</button>
          </Link>
        </div>

      </div>
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