import React from 'react'

/**
 * Componente de inicio de sesion de la aplicacion.
 */
const Login = ({ onLogin, error }) => {

    /**
     * Funcion que se ejecuta al presionar el boton de inicio de sesion.
     * Construye al usuario con todas sus caracteristicas con base en la 
     * informacion del formulario y llama a la funcion login() que esta
     * disponible en ../App.js
     */
    const onSubmit = (event) => {
        const user = {
            email: event.target.email.value,
            password: event.target.password.value
        }
        event.preventDefault()
        onLogin(user)
    }

    return (
        <div>
            {error ? <div><p style="color:red">{error}</p></div> : <></>}
            <form onSubmit={onSubmit}>
                <div>
                    <label>Correo electrónico:
                        <input id="email" name="email" type="email" />
                    </label>
                </div>
                <div>
                    <label>Contraseña:
                        <input id="password" name="password" type='password' />
                    </label>
                </div>
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    )
}

export default Login;