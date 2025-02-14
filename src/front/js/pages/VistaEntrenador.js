import React, { useContext, useEffect } from 'react'

import '../../styles/VistaEntrenador.css'
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext.js";


const VistaEntrenador = () => {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        const userToken = localStorage.getItem("token")
        actions.getClients(userToken)
    }, [])


    return (
        <div className='vista-entrenador'>
            <div className='your-clients'>
                <h1>Your Clients</h1>

                <div className='lista-clientes'>
                    {store.clients.map((client, index) => (
                        <div className='cliente' key={index}>
                            <p><strong>{client.client.name}</strong></p>
                            <button className='view-details'>View details</button>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default VistaEntrenador