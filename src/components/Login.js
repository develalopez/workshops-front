import React from 'react'

const Login = ({ onLogin, error }) => {
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