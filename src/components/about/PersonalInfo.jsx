import React from 'react'

const personalInfoContent = [
  { meta: 'Nombre', metaInfo: 'Francisco', hasColor: '' },
  { meta: 'Apellidos', metaInfo: 'Sánchez Cañas', hasColor: '' },
  { meta: 'Edad', metaInfo: '30 Años', hasColor: '' },
  { meta: 'Nacionalidad', metaInfo: 'Español', hasColor: '' },
  { meta: 'Empleo', metaInfo: 'Disponible', hasColor: 'green' },
  { meta: 'Dirección', metaInfo: 'España', hasColor: '' },
  { meta: 'Teléfono', metaInfo: '+34 663 35 94 57', hasColor: '' },
  { meta: 'Email', metaInfo: 'franscoder@gmail.com', hasColor: '' },
  { meta: 'Idiomas', metaInfo: 'Castellano, Inglés, Alemán', hasColor: '' },
]

const PersonalInfo = () => {
  return (
    <ul className='about-list list-unstyled open-sans-font'>
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className='title'>{val.meta}: </span>
          <span className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}>
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default PersonalInfo
