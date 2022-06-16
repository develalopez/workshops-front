import React from 'react'
import { useNavigate } from 'react-router-dom'

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