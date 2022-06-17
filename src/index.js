import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

let researchGroups = [
  {
    id: 1,
    name: 'Entrepeneurship Group'
  },
  {
    id: 2,
    name: 'Grupo de gerencia en las grandes, pequeñas y medianas empresas -G3Pymes'
  },
  {
    id: 3,
    name: 'Entorno Económico de las organizaciones'
  },
  {
    id: 4,
    name: 'Dirección & gestión de proyectos'
  },
  {
    id: 5,
    name: 'Grupo de investigación y desarrollo Tecnológico ONTARE'
  },
  {
    id: 6,
    name: 'Gestión Ambiental'
  },
  {
    id: 7,
    name: 'Ciencias Básicas'
  },
  {
    id: 8,
    nam: 'GIS (Grupo de Investigación en Salud)'
  },
  {
    id: 9,
    name: 'INDEVOS'
  },
  {
    id: 10,
    name: 'Lingüística y comunicación Organizacional'
  },
  {
    id: 11,
    name: 'Política y Sostenibilidad'
  },
  {
    id: 12,
    name: 'Ambientes de Aprendizaje'
  }
]

let workshops = [
  {
    id: 1,
    name: 'Domus',
    objective: 'Desarrollar procesos de investigación estudiantil, que soporten el enfoque del grupo Entorno Económico. Es decir, que expliquen el entorno local e internacional de las organizaciones, con el fin de promover acciones concretas que contribuyan al desarrollo económico y social de las sociedades.',
    research_group: 3
  },
  {
    id: 2,
    name: 'Finanzas y Mercados SIFM',
    objective: 'Proporcionar espacios a los estudiantes para la investigación financiera, y los movimientos de la bolsa para contribuir a la formación de personas instruidas en los mercados financieros, estimulando la participación de todos los integrantes en las diferentes áreas a tratar.',
    research_group: 3
  },
  {
    id: 3,
    name: 'Human',
    objective: 'Lograr que la Gerencia Humanista transforme el entorno de las organizaciones en conjunto con la academia, a través de herramientas alternas que progresivamente mejoren todos los aspectos del hombre, concebido como un ser incompleto que necesita integrar sus ideales, conocimientos y capacidades que lo conduzcan a la felicidad plena y le permitan trascender en las dimensiones de la sociedad en general.',
    research_group: 10
  }
]

let users = [
  {
    id: 1,
    email: "daniel@mail.com",
    name: "Daniel Vela",
    password: "Abc123#",
    role: 1,
    workshop: 1,
    activityPlan: [
      {
        id: 1,
        desc: 'Redactar marco teórico y cronograma',
        report: 'Entregado',
        grade: null
      },
      {
        id: 2,
        desc: 'Realizar encuestas',
        report: null,
        grade: null
      },
      {
        id: 3,
        desc: 'Redactar informe final',
        report: null,
        grade: null
      }
    ]
  },
  {
    id: 2,
    email: 'samuel@mail.com',
    name: 'Samuel Rodríguez',
    password: 'Abc123#',
    role: 2,
    workshop: 1
  }
]

/**
 * Funcion que renderiza toda la aplicacion. Envia los datos quemados mas arriba para
 * su generacion y uso.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <App workshopsData={workshops} researchGroupsData={researchGroups} usersData={users} />
)