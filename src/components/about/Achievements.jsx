import React from 'react'

const achievementsContent = [{ title: '34', subTitle1: 'proyectos', subTitle2: 'finalizados' }]

const Achievements = () => {
  return (
    <div className='row'>
      {achievementsContent.map((val, i) => (
        <div className='col-6' key={i}>
          <div className='box-stats with-margin'>
            <h3 className='poppins-font position-relative'>{val.title}</h3>
            <p className='open-sans-font m-0 position-relative text-uppercase'>
              {val.subTitle1} <span className='d-block'>{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Achievements
