import React from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * Componente de la pagina de registro de la aplicacion.
 */
const Register = ({ workshops, onRegister }) => {

    const roles = [
        {
            id: 1,
            name: 'Estudiante'
        },
        {
            id: 2,
            name: 'Profesor'
        },
        {
            id: 3,
            name: 'Director'
        }
    ]

    /**
     * Funcion que se ejecuta al momento de hacer click en el boton de registro.
     * Construye al usuario con todas sus caracteristicas con base en la 
     * informacion del formulario y llama a la funcion register() que esta
     * disponible en ../App.js
     */
    const onSubmit = (event) => {
        const user = {
            email: event.target.email.value,
            password: event.target.password.value,
            name: event.target.name.value,
            role: event.target.role.value,
            workshop: event.target.workshop.value
        }
        event.preventDefault()
        onRegister(user)
    }

    /**
     * Formulario de registro de usuarios.
     */
    return (
        <div>
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
                <div>
                    <label>Nombre:
                        <input id="name" name="name" type="text" />
                    </label>
                </div>
                <div>
                    <label>Rol:
                        <select id="role" name="role">
                            {roles.map(role => <option id={role.id} value={role.id}>{role.name}</option>)}
                        </select>
                    </label>
                </div>
                <div>
                    <label>Semillero:
                        <select id="workshop" name="workshop">
                            {workshops.map(workshop => <option id={workshop.id} value={workshop.id}>{workshop.name}</option>)}
                        </select>
                    </label>
                </div>
                    <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;