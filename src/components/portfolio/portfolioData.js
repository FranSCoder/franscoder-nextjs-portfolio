import Image1 from '../../../public/assets/img/portfolio/techlines-landpage-dark-portfolio.png'
import Image2 from '../../../public/assets/img/portfolio/jobify-landpage-portfolio.png'
import Image3 from '../../../public/assets/img/portfolio/ecomvision-overview-portfolio.png'
import Image4 from '../../../public/assets/img/portfolio/chart-map.png'
import Image5 from '../../../public/assets/img/portfolio/chart-heat.png'
import Image6 from '../../../public/assets/img/portfolio/chart-square-color.png'

const PortfolioData = [
  {
    id: 1,
    type: 'e-commerce',
    image: Image1,
    tag: ['mongodb', 'express', 'react', 'node'],
    delayAnimation: '0',
    modalDetails: [
      {
        project: 'TechLines',
        codeLink: 'https://github.com/FranSCoder/techlines',
        language: 'MongoDB, Express, ReactJS',
        preview: 'https://techlines.com',
        link: 'https://techlines-uoaa.onrender.com/',
      },
    ],
  },
  {
    id: 2,
    type: 'job tracker',
    image: Image2,
    tag: ['mongodb', 'express', 'react', 'node'],
    delayAnimation: '100',
    modalDetails: [
      {
        project: 'Jobify',
        codeLink: 'https://github.com/FranSCoder/jobify',
        language: 'MongoDB, Express, ReactJS',
        preview: 'https://jobify.com',
        link: 'https://mern-jobify-4g31.onrender.com/',
      },
    ],
  },
  {
    id: 3,
    type: 'admin panel',
    image: Image3,
    tag: ['mongodb', 'express', 'react', 'node'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Ecomvision',
        codeLink: 'https://github.com/FranSCoder/ecomvision',
        language: 'MongoDB, Express, ReactJS',
        preview: 'https://ecomvision.com',
        link: 'https://admin-frontend-3yrt.onrender.com/',
      },
    ],
  },
  {
    id: 4,
    type: 'cartograma',
    image: Image4,
    tag: ['d3'],
    delayAnimation: '0',
    modalDetails: [
      {
        project: 'Mapa de educación en los EE.UU.',
        codeLink: 'https://github.com/FranSCoder/useducation',
        language: 'D3, JS, HTML, CSS',
        preview: 'https://cartograma.net',
        link: 'http://franscoder.github.io/useducation',
      },
    ],
  },
  {
    id: 5,
    type: 'mapa de calor',
    image: Image5,
    tag: ['d3'],
    delayAnimation: '100',
    modalDetails: [
      {
        project: 'Evolución de la temperatura global',
        codeLink: 'https://github.com/FranSCoder/global-temperatures',
        language: 'D3, JS, HTML, CSS',
        preview: 'https://heatchart.net',
        link: 'http://franscoder.github.io/global-temperatures',
      },
    ],
  },
  {
    id: 6,
    type: 'gráfica de áreas y colores',
    image: Image6,
    tag: ['d3'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Top 100 Películas',
        codeLink: 'https://github.com/FranSCoder/movie-sales',
        language: 'D3, JS, HTML, CSS',
        preview: 'https://top100movies.net',
        link: 'https://franscoder.github.io/movie-sales',
      },
    ],
  },
]

export default PortfolioData
