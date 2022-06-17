import React, { useState } from 'react'

/**
 * Componente del perfil de estudiantes.
 */
const StudentProfile = ({ user, onCreateActivity, onCreateReport }) => {

    /**
     * Función que se ejecuta cuando se crea una nueva actividad. 
     */
    const onSubmitActivity = (event) => {
        const activity = event.target.activity.value
        event.preventDefault()
        onCreateActivity(user.id, activity)
    }

    /**
     * Función que se ejecuta cuando se hace una entrega de avance de
     * una actividad.
     */
    const onSubmitReport = (event) => {
        const activityId = Number(event.target.activity.value)
        const report = event.target.report.value
        event.preventDefault()
        onCreateReport(user.id, activityId, report)
    }

    const activityPlan = user.activityPlan
    return (
        <div>
            <h1>Hola, {user.name}</h1>
            {/** Formulario de creacion de compromisos */}
            <h2>Crear compromiso</h2>
            <form onSubmit={onSubmitActivity}>
                <label>Actividad:
                    <input type="text" id="activity"></input>
                </label>
                <br />
                <button type="submit">Crear</button>
            </form>
            {/** Formulario de entrega de reporte de avance de compromisos */}
            <h2>Realizar entrega</h2>
            <form onSubmit={onSubmitReport}>
                <label>Actividad:
                    <select id="activity" name="activity">
                        {user.activityPlan.map(activity => <option key={activity.id} value={activity.id}>{activity.id}</option>)}
                    </select>
                </label>
                <br />
                <label>Reporte de entrega:
                    <input type="text" id="report" name="report"></input>
                </label>
                <br />
                <button type="submit">Crear</button>
            </form>
            {/** Tabla que muestra compromisos creados */}
            <h2>Compromisos creados</h2>
            <table>
                <thead>
                    <tr>
                        <th>Actividad</th>
                        <th>Detalle</th>
                        <th>Entrega</th>
                        <th>Calificación</th>
                    </tr>
                </thead>
                <tbody>
                    {activityPlan.map(activity =>
                        <tr key={activity.id}>
                            <td>{activity.id}</td>
                            <td>{activity.desc}</td>
                            <td>{activity.report ? activity.report : "Pendiente"}</td>
                            <td>{activity.report ? (activity.grade ? activity.grade : "Pendiente de calificación") : "Pendiente de entrega"}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

/**
 * Componente del perfil de tutores.
 */
const TeacherProfile = ({ user, students, onGradeActivity }) => {

    const [selectedStudent, setSelectedStudent] = useState(students.find(student => student.id === 1).id)

    /**
     * Funci[on que modifica el estudiante seleccionado para calificar las entregas
     * pendientes de ese estudiante.
     */
    const onStudentSelect = (event) => {
        event.preventDefault()
        setSelectedStudent(Number(event.target.value))
        console.log(selectedStudent)
    }

    /**
     * Funcion que genera la lista de entregas que se pueden calificar.
     */
    const activityRenderSwitch = () => {
        const currentStudent = students.find(student => student.id === selectedStudent)
        const pendingReports = currentStudent.activityPlan.filter(activity => activity.report)
        return (
            <select id="activity" name="activity">
                {pendingReports.map(report => <option key={report.id} value={report.id}>{report.desc}</option>)}
            </select>
        )
    }

    /**
     * Funcion que se ejecuta cuando se califica una entrega.
     */
    const onSubmitGrade = (event) => {
        const activityId = Number(event.target.activity.value)
        const studentId = Number(event.target.student.value)
        const newGrade = Number(event.target.grade.value)
        event.preventDefault()
        onGradeActivity(studentId, activityId, newGrade)
    }

    return (
        <div>
            <h1>Hola, {user.name}</h1>
            {/** Formulario de calificacion de entregas de estudiantes */}
            <h2>Calificar reporte de avance de compromisos</h2>
            <form onSubmit={onSubmitGrade}>
                <label>Estudiante:
                <select id="student" name="student" onChange={onStudentSelect}>
                        {students.map(student => <option key={student.id} value={student.id}>{student.name}</option>)}
                    </select>
                </label>
                <br />
                <label>Actividad:
                    {activityRenderSwitch()}
                </label>
                <br />
                <label>Nota:
                    <input id="grade" name="grade" type="number"></input>
                </label>
                <br />
                <button type="submit">Calificar</button>
            </form>
            {/** Tabla que muestra todos los compromisos de los estudiantes del semillero */}
            <h2>Ver compromisos del semillero</h2>
            <table>
                <thead>
                    <tr>
                        <th>Estudiante</th>
                        <th>Actividad</th>
                        <th>Detalle</th>
                        <th>Entrega</th>
                        <th>Calificación</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(student => {
                            return (
                                student.activityPlan.map(activity => 
                                    <tr key={"Actividad" + student.name + activity.id}>
                                        <td>{student.name}</td>
                                        <td>{activity.id}</td>
                                        <td>{activity.desc}</td>
                                        <td>{activity.report ? activity.report : "Pendiente de entrega"}</td>
                                        <td>{activity.grade ? activity.grade : "Pendiente de calificación"}</td>
                                    </tr>
                                )
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

/**
 * Componente del perfil de directivos.
 */
const DirectorProfile = ({ user }) => {
    return (
        <div>
            <h1>Hi, {user.name}</h1>
            <p>You are a director.</p>
        </div>
    )
}

const renderSwitch = (user, users, onCreateActivity, onCreateReport, onGradeActivity) => {
    /**
     * Funcion que determina cual es el perfil que se debe renderizar con
     * base en el rol del usuario. 1 para estudiantes, 2 para tutores y
     * 3 para directivos.
     */

    const students = users.filter(student => student.role === 1 && student.workshop === user.workshop)

    switch (user.role) {
        case 1:
            return (
                <StudentProfile user={user} onCreateActivity={onCreateActivity} onCreateReport={onCreateReport} />
            )
        case 2:
            return (
                <TeacherProfile user={user} students={students} onGradeActivity={onGradeActivity} />
            )
        case 3:
            return (
                <DirectorProfile user={user} />
            )
    }
}

const Profile = ({ user, users, onCreateActivity, onCreateReport, onGradeActivity }) => {
    /**
     * Genera la pagina de perfil apropiada en funcion del rol del usuario.
     */
    return (
        <div>
            {renderSwitch(user, users, onCreateActivity, onCreateReport, onGradeActivity)}
        </div>
    )
}

export default Profile;