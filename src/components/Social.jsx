import React from 'react'

const SocialShare = [
  { iconName: 'fa fa-linkedin', link: 'https://www.linkedin.com/in/franscoder/' },
  { iconName: 'fa fa-github', link: 'https://github.com/FranSCoder' },
  { iconName: 'fa fa-twitter', link: 'https://twitter.com/FranSCoder' },
]

const Social = () => {
  return (
    <ul className='social list-unstyled pt-1 mb-5'>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target='_blank' rel='noreferrer'>
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Social
