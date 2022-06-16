import React from 'react'

/**
 * Componente del perfil de estudiantes.
 */
const StudentProfile = ({ user }) => {
    return (
        <div>
            <h1>Hi, {user.name}</h1>
            <p>You are a student.</p>
        </div>
    )
}

/**
 * Componente del perfil de tutores.
 */
const TeacherProfile = ({ user }) => {
    return (
        <div>
            <h1>Hi, {user.name}</h1>
            <p>You are a teacher.</p>
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

const renderSwitch = (user) => {
    /**
     * Funcion que determina cual es el perfil que se debe renderizar con
     * base en el rol del usuario. 1 para estudiantes, 2 para tutores y
     * 3 para directivos.
     */
    switch (user.role) {
        case 1:
            return (
                <StudentProfile user={user} />
            )
        case 2:
            return (
                <TeacherProfile user={user} />
            )
        case 3:
            return (
                <DirectorProfile user={user} />
            )
    }
}

const Profile = ({ user }) => {
    /**
     * Genera la pagina de perfil apropiada en funcion del rol del usuario.
     */
    return (
        <div>
            {renderSwitch(user)}
        </div>
    )
}

export default Profile;