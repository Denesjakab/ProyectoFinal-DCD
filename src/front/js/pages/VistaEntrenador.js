import React, { useContext, useState, useEffect } from 'react'
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
                    {store.clients.map((client, index) => {
                        return (
                            <div className='cliente'
                                key={index}
                            >
                                <p><strong>{client.client.name}</strong></p>
            
                                    <button className='view-details'>View details</button>
                               
                            </div>
                        )
                    })
                    }
                    {/* <div className='cliente'>
                        <p><strong>Client Name</strong></p>
                        <button className='view-details'>View details</button>
                    </div>
                    <div className='cliente'>
                        <p><strong>Client Name</strong></p>
                        <button className='view-details'>View details</button>
                    </div>
                    <div className='cliente'>
                        <p><strong>Client Name</strong></p>
                        <button className='view-details'>View details</button>
                    </div>
                    <div className='cliente'>
                        <p><strong>Client Name</strong></p>
                        <Link to="/trainer/perfilcliente">
                            <button className='view-details'>View details</button>
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default VistaEntrenador
