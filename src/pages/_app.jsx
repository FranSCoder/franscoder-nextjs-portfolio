import Aos from 'aos'
import { useEffect } from 'react'
import '../styles/index.scss'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    })
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
