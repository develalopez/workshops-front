import ReactDOM from 'react-dom/client'
import { useState } from 'react'

import Home from './components/Home'
import Workshops from './components/Workshops'
import Register from './components/Register'
import Login from './components/Login'
import Profile from './components/Profile'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
  useNavigate,
} from "react-router-dom"

const App = ({ workshopsData, researchGroupsData, usersData }) => {

  /**
   * Generacion de datos con base en mockups en ./index.js
   */
  const [workshops, setWorkshops] = useState(workshopsData)
  const [researchGroups, setResearchGroups] = useState(researchGroupsData)
  const [users, setUsers] = useState(usersData)
  const [loggedUser, setLoggedUser] = useState(null)

  const padding = {
    padding: 5
  }

  /**
   * Funcion que gestiona el inicio de sesion. Define el usuario activo con base al
   * usuario y password recibidos. Si el usuario no existe o el password es
   * incorrecto, se arroja un error,
   * Recibe el objeto de usuario del handler del formulario de inicio de sesion
   * (./components/Login.js) 
   */
  const login = (user) => {
    const tryingUser = users.find(validUser => validUser.email === user.email)
    if (!tryingUser) {
      alert("Usuario o contraseña incorrectos")
    } if (tryingUser.password === user.password) {
      setLoggedUser(tryingUser)
      alert("Iniciaste sesión")
    } else {
      alert("Usuario o contraseña incorrectos")
    }
  }

  /**
   * Funcion que gestiona el registro de usuarios. Agrega el nuevo usuario a
   * la lista de usuarios o indica si el correo electronico usado ya esta registrado.
   * Recibe el objeto de usuario del handler del formulario de registro
   * (./components/Register.js) 
   */
  const register = (user) => {
    const registeringUser = users.find(validUser => validUser.username === user.username)
    if (registeringUser) {
      alert("Correo electrónico ya existe")
    } else {
      user.id = users.length + 1
      setUsers(users.concat(user))
      alert("Te has registrado exitosamente")
    }
  }

  return (
    /**
     * La primera parte del Router construye los enlaces al tope de la pagina.
     * La segunda parte del Router muestra el componente correcto en funcion del enlace clickeado.
     */
    <Router>
      <div>
        <Link style={padding} to="/">Inicio</Link>
        <Link style={padding} to="/workshops">Semilleros</Link>
        <Link style={padding} to="/register">Registrarme</Link>
        <Link style={padding} to="/login">Iniciar Sesión</Link>
        <Link style={padding} to="/profile">Mi perfil</Link>
      </div>

      <Routes>
        <Route path="/workshops" element={<Workshops workshops={workshops} researchGroups={researchGroups} />} />
        <Route path="/register" element={<Register workshops={workshops} onRegister={register} />} />
        <Route path="/profile" element={loggedUser ? <Profile user={loggedUser} /> : <Navigate replace to="/login" />} />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}



export default App
