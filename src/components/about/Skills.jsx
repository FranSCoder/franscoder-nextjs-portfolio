import React from 'react'

const skillsContent = [
  { skillClass: 'p86', skillPercent: '86', skillName: 'REACT' },
  { skillClass: 'p89', skillPercent: '89', skillName: 'JAVASCRIPT' },
  { skillClass: 'p83', skillPercent: '83', skillName: 'CSS3' },
  { skillClass: 'p66', skillPercent: '66', skillName: 'TYPESCRIPT' },
  { skillClass: 'p81', skillPercent: '81', skillName: 'GIT' },
  { skillClass: 'p79', skillPercent: '79', skillName: 'DATABASES' },
  { skillClass: 'p77', skillPercent: '77', skillName: 'NODE.JS' },
  { skillClass: 'p76', skillPercent: '76', skillName: 'NEXT.JS' },
]

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div
          className='col-6 col-md-3 mb-3 mb-sm-5'
          key={i}
        >
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
