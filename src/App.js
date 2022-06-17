import { useState } from 'react'

import Home from './components/Home'
import Workshops from './components/Workshops'
import Register from './components/Register'
import Login from './components/Login'
import Logout from './components/Logout'
import Profile from './components/Profile'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
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
   * Funcion que gestiona el cierre de sesion.
   */
  const logout = () => {
    setLoggedUser(null)
  }

  /**
   * Funcion que gestiona el registro de usuarios. Agrega el nuevo usuario a
   * la lista de usuarios o indica si el correo electronico usado ya esta registrado.
   * Recibe el objeto de usuario del handler del formulario de registro
   * (./components/Register.js) 
   */
  const register = (user) => {
    const registeringUser = users.find(validUser => validUser.email === user.email)
    if (registeringUser) {
      alert("Correo electrónico ya existe")
    } else {
      user.id = users.length + 1
      user.activityPlan = []
      setUsers(users.concat(user))
      alert("Te has registrado exitosamente")
    }
  }

  /**
   * Funcion que recibe informacion de una nueva actividad y la adjunta a la
   * lista de actividades del estudiante seleccionado.
   */
  const createActivity = (studentId, activity) => {
    const student = users.find(user => user.id === studentId)
    const newActivity = {
      id: student.activityPlan.length + 1,
      desc: activity,
      report: null,
      grade: null
    }
    student.activityPlan.push(newActivity)
    setUsers(users.map(user => user.id === studentId ? student : user))
  }

  /**
   * Funcion que recibe informacion de la entrega de un compromiso y actualiza la informacion
   * del estudiante indicado en la actividad indicada.
   */
  const createReport = (studentId, activityId, report) => {
    console.log(studentId, activityId, report)
    const student = users.find(user => user.id === studentId)
    const newActivity = student.activityPlan.find(activity => activity.id === activityId)
    newActivity.report = report
    const newActivityPlan = student.activityPlan.map(activity => (activity.id === activityId ? newActivity : activity))
    student.activityPlan = newActivityPlan
    setUsers(users.map(user => student.id === user.id ? student : user))
  }

  /**
   * Funcion que recibe la calificacion de una entrega, y actualiza la nota
   * del estudiante indicado en la actividad indicada.
   */
  const gradeActivity = (studentId, activityId, grade) => {
    const student = users.find(user => user.id === studentId)
    const gradedActivity = student.activityPlan.find(activity => activity.id === activityId)
    gradedActivity.grade = grade
    student.activityPlan.map(activity => activity.id === activityId ? gradedActivity : activity)
    setUsers(users.map(user => student.id === user.id ? student : user))
  }

  /**
   * Función que muestra los enlaces de registro e inicio de sesión
   * o el de perfil en función de si se inició sesión o no
   */
  const routerRenderSwitch = () => {
    if (!loggedUser) {
      return (
        <>
          <Link style={padding} to="/register">Registrarme</Link>
          <Link style={padding} to="/login">Iniciar Sesión</Link>
        </>
      )
    }
    return (
      <>
        <Link style={padding} to="/profile">Mi perfil</Link>
        <Link style={padding} to="/logout">Cerrar sesión</Link>
        <p>Bienvenido {loggedUser.name}</p>
      </>
    )
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
        {routerRenderSwitch()}
      </div>

      <Routes>
        <Route path="/workshops" element={<Workshops workshops={workshops} researchGroups={researchGroups} />} />
        <Route path="/register" element={<Register workshops={workshops} onRegister={register} />} />
        <Route path="/profile" element={loggedUser ? <Profile user={loggedUser} users={users} onCreateActivity={createActivity} onCreateReport={createReport} onGradeActivity={gradeActivity} /> : <Navigate replace to="/login" />} />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/logout" element={<Logout onLogout={logout} />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}



export default App
