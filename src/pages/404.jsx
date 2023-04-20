import React from 'react'
import Link from 'next/link'
import image404 from '../../public/assets/img/404.jpg'

const NotFound = () => {
  return (
    <div className='error_page'>
      <div
        className='hero bg-image'
        style={{
          backgroundImage: `url(${image404.src})`,
        }}
      >
        <div className='content'>
          <h1 data-aos='fade-up' data-aos-duration='1200'>
            404!
          </h1>
          <p data-aos='fade-up' data-aos-duration='1200' data-aos-delay='50'>
            La página que busca no pudo ser encontrada.
          </p>

          <div className='button' data-aos='fade-up' data-aos-duration='1200' data-aos-delay='100'>
            <Link href='/'>VOLVER A INICIO</Link>
          </div>
          {/* End purchase_button */}
        </div>
      </div>
      {/* End .hero */}
    </div>
  )
}

export default NotFound
