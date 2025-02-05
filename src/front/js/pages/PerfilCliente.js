import React from 'react'
import "../../styles/PerfilCliente.css";

const PerfilCliente = () => {
  return (
    <div className="container">
      <div className="parte-arriba">

      <div className="info-cliente">
        <h3>Nombre del Cliente</h3>
        <img src="https://images.pexels.com/photos/8401818/pexels-photo-8401818.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Foto-del-cliente" className="foto-cliente" />
        <p>Descarga aquí tu PLAN</p>
        <button className="download-button">Download program</button>
      </div>

      <div className="datos-cliente">
        <h2>Datos de "Nombre del cliente"</h2>
        <p>Weight</p>
        <input type="text" placeholder="cm"/>
        <p>Waist sixe</p>
        <input type="text" placeholder="cm" />
        <p>Abdominal size</p>
        <input type="text" placeholder="cm" />
        <p>Arm size</p>
        <input type="text" placeholder="cm" />
        <p>Leg size</p>
        <input type="text" placeholder="cm" />
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
        <p>Foto del plan actual</p>
        <img src="https://images.pexels.com/photos/5387262/pexels-photo-5387262.jpeg?auto=compress&cs=tinysrgb&w=600" alt="programa-actual" className="current-plan" />
        <button className="cancel-button">Cancel my gym membership</button>
      </div>
    </div>
  );
};

export default PerfilCliente;