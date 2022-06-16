import React from 'react'

const Workshops = ({ workshops, researchGroups }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Objetivo</th>
                        <th>Grupo de Investigación</th>
                    </tr>
                </thead>
                <tbody>
                    {workshops.map(
                        workshop => {
                            return (
                                <tr key={workshop.id}>
                                    <td>{workshop.name}</td>
                                    <td>{workshop.objective}</td>
                                    <td>{researchGroups.find(researchGroup => researchGroup.id === workshop.id).name}</td>
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Workshops;