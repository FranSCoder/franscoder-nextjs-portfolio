import Image1 from '../../../public/assets/img/portfolio/techlines-landpage-dark-portfolio.png'
import Image2 from '../../../public/assets/img/portfolio/jobify-landpage-portfolio.png'
import Image3 from '../../../public/assets/img/portfolio/ecomvision-overview-portfolio.png'
import Image4 from '../../../public/assets/img/portfolio/chart-map.png'
import Image5 from '../../../public/assets/img/portfolio/chart-heat.png'
import Image6 from '../../../public/assets/img/portfolio/chart-square-color.png'
import Image7 from '../../../public/assets/img/portfolio/project-7.jpg'
import Image8 from '../../../public/assets/img/portfolio/project-8.jpg'
import Image9 from '../../../public/assets/img/portfolio/project-9.jpg'

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
        preview: 'www.techlines.com',
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
        preview: 'www.jobify.com',
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
        preview: 'www.ecomvision.com',
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
        preview: 'www.cartograma.net',
        link: 'https://www.franscoder.com/useducation/',
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
        preview: 'www.heatchart.net',
        link: 'https://www.franscoder.com/global-temperatures/',
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
        preview: 'www.top100movies.net',
        link: 'https://www.franscoder.com/movie-sales/',
      },
    ],
  },
  // {
  //   id: 1,
  //   type: "mockup project",
  //   image: Image1,
  //   tag: ["mockup"],
  //   delayAnimation: "0",
  //   modalDetails: [
  //     {
  //       project: "Website",
  //       client: "Envato",
  //       language: "HTML, CSS, Javascript",
  //       preview: "www.envato.com",
  //       link: "https://www.envato.com/",
  //     },
  //   ],
  // },
  // {
  //   id: 2,
  //   type: "youtube project",
  //   image: Image2,
  //   tag: ["video"],
  //   delayAnimation: "100",
  //   modalDetails: [
  //     {
  //       project: "video",
  //       client: "Videohive",
  //       language: " Adobe After Effects",
  //       preview: "www.videohive.net",
  //       link: "https://www.videohive.net",
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   type: "slider project",
  //   image: Image3,
  //   tag: [],
  //   delayAnimation: "200",
  //   modalDetails: [
  //     {
  //       project: "Website",
  //       client: "Themeforest",
  //       language: " HTML, CSS, Javascript",
  //       preview: "www.envato.com",
  //       link: "https://www.envato.com",
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   type: "local project",
  //   image: Image4,
  //   tag: ["logo", "video"],
  //   delayAnimation: "0",
  //   modalDetails: [
  //     {
  //       project: "video",
  //       client: "Videohive",
  //       language: " Adobe After Effects",
  //       preview: "www.videohive.net",
  //       link: "https://www.videohive.net",
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   type: "saas project",
  //   image: Image5,
  //   tag: ["logo"],
  //   delayAnimation: "100",
  //   modalDetails: [
  //     {
  //       project: "Web Application",
  //       client: "Themeforest",
  //       language: "HTML, CSS, ReactJS",
  //       preview: "www.envato.com",
  //       link: "https://themeforest.net/item/deski-saas-software-react-template/33799794",
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   type: "mockup project",
  //   image: Image6,
  //   tag: ["logo", "mockup"],
  //   delayAnimation: "200",
  //   modalDetails: [
  //     {
  //       project: "Website",
  //       client: "Themeforest",
  //       language: "HTML, CSS, Javascript",
  //       preview: "www.pexels.com",
  //       link: "https://www.pexels.com",
  //     },
  //   ],
  // },
  // {
  //   id: 7,
  //   type: "facebook project",
  //   image: Image7,
  //   tag: ["logo"],
  //   delayAnimation: "0",
  //   modalDetails: [
  //     {
  //       project: "Website",
  //       client: "Facebook",
  //       language: "HTML, CSS, Javascript",
  //       preview: "www.facebook.com",
  //       link: "https://www.facebook.com/ibthemes",
  //     },
  //   ],
  // },
  // {
  //   id: 8,
  //   type: "dribble project",
  //   image: Image8,
  //   tag: ["graphic design"],
  //   delayAnimation: "100",
  //   modalDetails: [
  //     {
  //       project: "Website",
  //       client: "Dribbble",
  //       language: "HTML, CSS, Javascript",
  //       preview: "www.dribbble.com",
  //       link: "https://dribbble.com/ib-themes",
  //     },
  //   ],
  // },
  // {
  //   id: 9,
  //   type: "behence project",
  //   image: Image9,
  //   tag: ["graphic design", "mockup"],
  //   delayAnimation: "200",
  //   modalDetails: [
  //     {
  //       project: "Website",
  //       client: "Behance",
  //       language: "HTML, CSS, Javascript",
  //       preview: "www.behance.com",
  //       link: "https://www.behance.net/ib-themes",
  //     },
  //   ],
  // },
]

export default PortfolioData
