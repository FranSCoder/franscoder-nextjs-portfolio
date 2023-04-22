import React from 'react'

const educationContent = [
  {
    year: 'presente',
    degree: 'DESARROLLO WEB',
    institute: 'AUTOENSEÑANZA',
    details:
      'Formación autodidacta obtenida construyendo sitios web, a través de la experimentación, la lectura, la interacción con otros programadores y el estudio en plataformas como Udemy, freeCodeCamp o Youtube.',
  },
  {
    year: '2022',
    degree: 'GRADO EN FÍSICA',
    institute: 'U.N.E.D.',
    details:
      'Formación en materias como computación (C y Maxima), análisis matemático, álgebra, fundamentos de la física, circuitos electrónicos, aplicación del método científico y pensamiento lógico entre otros/as.',
  },
  {
    year: '2017',
    degree: 'Grado en Turismo',
    institute: 'Univ. de Cádiz',
    details:
      'Formación universitaria como profesional del turismo. A destacar mis aprendizajes de ingles, alemán, trabajo en equipo y soft-skills transferibles a la programación profesional.',
  },
]

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className='icon'>
            <i className='fa fa-briefcase'></i>
          </div>
          <span className='time open-sans-font text-uppercase'>{val.year}</span>
          <h5 className='poppins-font text-uppercase'>
            {val.degree}
            <span className='place open-sans-font'>{val.institute}</span>
          </h5>
          <p className='open-sans-font'>{val.details}</p>
        </li>
      ))}
    </ul>
  )
}

export default Education
