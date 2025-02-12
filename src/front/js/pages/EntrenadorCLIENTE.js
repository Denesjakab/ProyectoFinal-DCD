import React from 'react'
import "../../styles/EntrenadorCLIENTE.css";
import { Link } from 'react-router-dom';

const EntrenadorCLIENTE = () => {
  return (
    <div className='entrenador-cliente'>
      <div className='cabecero'>
        <div className='foto-perfil'>
          <img id='fotoPerfil' src='https://images.pexels.com/photos/6388990/pexels-photo-6388990.jpeg?auto=compress&cs=tinysrgb&w=600' alt='cliente-profile-picture' />
        </div>
        <div className='datos-especificos'>
          <p><strong>Nombre del cliente</strong></p>
          <p><strong>Cliente Nº: </strong></p>
          <p><strong>Fecha de Inicio: </strong></p>
        </div>
      </div>
      <div className='medidas-especificas'>
        <h3 id='titulo-especifico'>Datos de "Nombre del CLiente"</h3>
        <div className='medida'>
          <p><strong>Weight: </strong></p><p><strong>Kg</strong></p>
        </div>
        <div className='medida'>
          <p><strong>Waist size: </strong></p><p><strong>cm</strong></p>
        </div>
        <div className='medida'>
          <p><strong>Abdominal size: </strong></p><p><strong>cm</strong></p>
        </div>
        <div className='medida'>
          <p><strong>Arm size: </strong></p><p><strong>cm</strong></p>
        </div>
        <div className='medida'>
          <p><strong>Leg size: </strong></p><p><strong>cm</strong></p>
        </div>
      </div>
      <div className='boton-funciones'>
        <button className='cancel-member'>Cancel Client Membership</button>
        <Link to='/upload-client-program'>
          <button className='upload-program'>Upolad Client Program</button>
        </Link>
      </div>

    </div>
  )
}

export default EntrenadorCLIENTE