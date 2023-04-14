import React from 'react'

const experienceContent = [
  {
    year: '   2022 - Presente',
    position: 'Desarrollador Web',
    companyName: 'Autónomo',
    details: 'Construcción de varios sitios webs full-stack con las tecnologías MERN.',
  },
  {
    year: '2019 - 2021',
    position: 'Especialista en evaluación de datos',
    companyName: 'Appen, Autónomo',
    details: 'Evaluación y corrección de datos relativos a mapas, productos y anuncios online.',
  },
  {
    year: '2017 - presente',
    position: 'Recepcionista de hotel',
    companyName: 'AllSun, BestHotels, Vincci...',
    details:
      'Atención cara al público, atención telefónica, check-ins, check-outs, gestión de documentación y facturación, diplomacia, gestión del estrés, organización, trabajo en equipo, etc.',
  },
]

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className='icon'>
            <i className='fa fa-briefcase'></i>
          </div>
          <span className='time open-sans-font text-uppercase'>{val.year}</span>
          <h5 className='poppins-font text-uppercase'>
            {val.position}
            <span className='place open-sans-font'>{val.companyName}</span>
          </h5>
          <p className='open-sans-font'>{val.details}</p>
        </li>
      ))}
    </ul>
  )
}

export default Experience
