import React, { useEffect, useContext } from 'react'
import "../../styles/EntrenadorCLIENTE.css";
import { Link, useParams } from 'react-router-dom';
import { Context } from "../store/appContext.js";

const EntrenadorCLIENTE = () => {



  let params = useParams()

  const { store, actions } = useContext(Context)

  useEffect(() => {
    const userToken = localStorage.getItem("token")
    actions.getClients(userToken)
  }, [])

  let selectedClient
  for (const i in store.clients) {
    if (store.clients[i].client.id == params.id) {
      selectedClient = store.clients[i]
    }
  }

  // const client= store.clients.length > 0 ? store.clients[0]: null
  return (
    <div className='entrenador-cliente'>
      {store.clients.length > 0 ? (
        // store.clients.map((data, index) => {
        //   return (
        <div>
          <div className='cabecero'>
            <div className='foto-perfil'>
              <img id='fotoPerfil' src='https://images.pexels.com/photos/6388990/pexels-photo-6388990.jpeg?auto=compress&cs=tinysrgb&w=600' alt='cliente-profile-picture' />
            </div>
            <div className='datos-especificos'>
              <p><strong>Nombre del cliente : {selectedClient.client.name}</strong></p>
              <p><strong>Cliente Nº:{selectedClient.client.id} </strong></p>
              <p><strong>Fecha de Inicio:{selectedClient.client.created_at
              } </strong></p>
            </div>
          </div>
          <div className='medidas-especificas'>
            <h3 id='titulo-especifico'>Datos de {selectedClient.client.name}</h3>
            <div className='medida'>
              <p><strong>Weight: </strong></p><p>{selectedClient.progress.weight}<strong>Kg</strong></p>
            </div>
            <div className='medida'>
              <p><strong>Waist size: </strong></p><p>{selectedClient.progress.waist}<strong>cm</strong></p>
            </div>
            <div className='medida'>
              <p><strong>Abdominal size: </strong></p><p>{selectedClient.progress.weight}<strong>cm</strong></p>
            </div>
            <div className='medida'>
              <p><strong>Arm size: </strong></p><p>{selectedClient.progress.arm}<strong>cm</strong></p>
            </div>
            <div className='medida'>
              <p><strong>Leg size: </strong></p><p>{selectedClient.progress.leg}<strong>cm</strong></p>
            </div>
          </div>
          <div className='boton-funciones'>
            <button className='cancel-member'>Cancel Client Membership</button>
            <Link to='/upload-client-program'>
              <button className='upload-program'>Upolad Client Program</button>
            </Link>
          </div>
        </div>
        //   );
        // })
      ) : (<h1>Cargando...</h1>)}



    </div>
  )
}

export default EntrenadorCLIENTE