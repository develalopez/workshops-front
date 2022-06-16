import React from 'react'

const StudentProfile = ({ user }) => {
    return (
        <div>
            <h1>Hi, {user.name}</h1>
            <p>You are a student.</p>
        </div>
    )
}

const TeacherProfile = ({ user }) => {
    return (
        <div>
            <h1>Hi, {user.name}</h1>
            <p>You are a teacher.</p>
        </div>
    )
}

const DirectorProfile = ({ user }) => {
    return (
        <div>
            <h1>Hi, {user.name}</h1>
            <p>You are a director.</p>
        </div>
    )
}

const renderSwitch = (user) => {
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
    return (
        <div>
            {renderSwitch(user)}
        </div>
    )
}

export default Profile;