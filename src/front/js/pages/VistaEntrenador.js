import React, { useContext, useEffect } from 'react'

import '../../styles/VistaEntrenador.css'
import { Link, useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext.js";

const VistaEntrenador = () => {

    const { store, actions } = useContext(Context)
    const navigate = useNavigate()
    const getClients = async () => {
        const userToken = localStorage.getItem("token")
        let storeClients = await actions.getClients(userToken)

        if (storeClients === 401) {
            navigate("/login")
        }
    }
    useEffect(() => {
        getClients()

    }, [])


    return (
        <div className='vista-entrenador'>
            <div className='your-clients'>
                <h1>Your Clients</h1>

                <div className='lista-clientes'>
                    {store.clients.map((client, index) => {
                        return (
                            <div className='cliente'
                                key={index}
                            >
                                <p><strong>{client.client.name}</strong></p>
                                <Link to={`/trainer/cliente/${client.client.id}`}>
                                    <button className='view-details' onClick={() => { actions.setSelectedClient(client) }}>View details</button>
                                </Link>
                            </div>

                        )
                    })
                    }
                </div>
            </div>
        </div>)
}




export default VistaEntrenador