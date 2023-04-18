import React from 'react'

const Address = () => {
  return (
    <>
      <p className='open-sans-font custom-span-contact position-relative'>
        <i className='fa fa-map position-absolute'></i>
        <span className='d-block'>Dirección</span>Denia, 03700, España.
      </p>
      {/* End .custom-span-contact */}

      <p className='open-sans-font custom-span-contact position-relative'>
        <i className='fa fa-envelope-open position-absolute'></i>
        <span className='d-block'>email</span> <a href='mailto:franscoder@gmail.com'>franscoder@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className='open-sans-font custom-span-contact position-relative'>
        <i className='fa fa-phone-square position-absolute'></i>
        <span className='d-block'>Teléfono</span> <a href='Tel: +34 663359457'>+34 663359457</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  )
}

export default Address
