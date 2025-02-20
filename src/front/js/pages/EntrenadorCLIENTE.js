import React, { useEffect, useContext, useState } from 'react'
import "../../styles/EntrenadorCLIENTE.css"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Context } from "../store/appContext.js"

const EntrenadorCLIENTE = () => {
  const { store, actions } = useContext(Context)
  const navigate = useNavigate()
  const params = useParams()
  const [selectedClient, setSelectedClient] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const userToken = localStorage.getItem("token")

      if (store.clients.length === 0) {
        await actions.getClients(userToken)
      }

      const foundClient = store.clients.find(client => client.client.id === Number(params.id))

      if (foundClient) {
        setSelectedClient(foundClient);
        actions.setSelectedClient(foundClient)
        await actions.getProgress(foundClient.client.id)
      }

      setLoading(false)
    };

    fetchData();
  }, [params.id, store.clients])

  if (loading) {
    return <h1>Cargando...</h1>
  }

  if (!selectedClient) {
    return <h1>Client not found</h1>
  }

  return (
    <div className='entrenador-cliente'>
      <div>
        <div className='cabecero'>
          <div className='foto-perfil'>
            <img id='fotoPerfil' src={store.progress?.photo_url || 'https://images.pexels.com/photos/8401818/pexels-photo-8401818.jpeg?auto=compress&cs=tinysrgb&w=600"'} alt="Foto del Cliente" />
          </div>
          <div className='datos-especificos'>
            <p><strong>Name: {selectedClient.client.name}</strong></p>
            <p><strong>Nº: {selectedClient.client.id} </strong></p>
            <p><strong>Start Date: {selectedClient.client.created_at} </strong></p>
            <div className='parte-progreso mt-2'>
              <p className='progress-label'>Your Progress:</p>
              <div className='barra-progreso'>
                <div className='relleno-barra' style={{ width: `${store.currentUser?.progress?.progress_percentage || 0}%` }}></div>
                <div className='texto-progreso'>{store.currentUser?.progress?.progress_percentage || 0}%</div>
              </div>
            </div>
          </div>
        </div>

        <div className='medidas-especificas'>
          <h3 id='titulo-especifico'>Measures {selectedClient.client.name} </h3>
          <div className='medida'>
            <p><strong>Weight: </strong></p><p>{store.progress?.weight || ""} <strong>Kg</strong></p>
          </div>
          <div className='medida'>
            <p><strong>waist: </strong></p><p>{store.progress?.waist || ""} <strong>cm</strong></p>
          </div>
          <div className='medida'>
            <p><strong>Abdomen: </strong></p><p>{store.progress?.abdomen || ""} <strong>cm</strong></p>
          </div>
          <div className='medida'>
            <p><strong>Arm: </strong></p><p>{store.progress?.arm || ""} <strong>cm</strong></p>
          </div>
          <div className='medida'>
            <p><strong>Leg: </strong></p><p>{store.progress?.leg || "N/A"} <strong>cm</strong></p>
          </div>
        </div>

        <div className='boton-funciones'>
          <button className='cancel-member' onClick={() => {
            actions.cancelClient(selectedClient.client.id)
            navigate("/trainer")
          }}>
            Cancel Client Membership
          </button>
          <Link to='/upload-client-program'>
            <button className='upload-program'>Upload Client Program</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EntrenadorCLIENTE;