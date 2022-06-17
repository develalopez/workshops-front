import React from 'react'
import { Navigate } from 'react-router'

/**
 * Componente que se visita al seleccionar el enlace de cierre de sesion.
 * Ejecuta la funcion logout() en ../App.js y redirige a la pagina de
 * inicio de sesion.
 */
const Logout = ({ onLogout }) => {
    onLogout()

    return (
        <Navigate replace to='/login' />
    )
}

export default Logout;