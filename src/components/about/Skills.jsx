import React from 'react'

const skillsContent = [
  { skillClass: 'p73', skillPercent: '73', skillName: 'HTML5' },
  { skillClass: 'p82', skillPercent: '82', skillName: 'JAVASCRIPT' },
  { skillClass: 'p70', skillPercent: '70', skillName: 'CSS3' },
  { skillClass: 'p77', skillPercent: '77', skillName: 'REACT' },
  { skillClass: 'p57', skillPercent: '57', skillName: 'NEXT.JS' },
  { skillClass: 'p64', skillPercent: '64', skillName: 'NODE.JS' },
  { skillClass: 'p66', skillPercent: '66', skillName: 'MONGODB' },
  { skillClass: 'p68', skillPercent: '68', skillName: 'SQL' },
]

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className='col-6 col-md-3 mb-3 mb-sm-5' key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className='slice'>
              <div className='bar'></div>
              <div className='fill'></div>
            </div>
          </div>
          <h6 className='text-uppercase open-sans-font text-center mt-2 mt-sm-4'>{val.skillName}</h6>
        </div>
      ))}
    </>
  )
}

export default Skills
