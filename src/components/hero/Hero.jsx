import React, { useState } from "react";
import Modal from "react-modal";
import heroImgMobile from "../../../public/assets/img/hero/img-mobile.png";
import cancelImg from "../../../public/assets/img/cancel.svg";
import AboutMain from "../about";
import Image from "next/image";

const heroContent = {
  heroImage: "/assets/img/hero/dark.png",
  heroMobileImage: heroImgMobile,
  heroTitleName: "fran sánchez",
  heroDesignation: "desarrollador - react.js",
  heroDescriptions: `Mi misión es elaborar sitios web con una experiencia de usuario sencilla y limpia. Me apasiona crear soluciones para aquellos/as que me rodean.`,
  heroBtn: "más sobre mí",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className='row home-details-container align-items-center'>
        <div
          className='col-lg-4 bg position-fixed d-none d-lg-block'
          style={{ backgroundImage: `url(${heroContent.heroImage})` }}
        ></div>
        <div className='col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start'>
          <div>
            <Image
              src={heroContent.heroMobileImage}
              className='img-fluid main-img-mobile d-sm-block d-lg-none'
              alt='hero man'
              // style={{width:'100%',height:'100%'}}
            />
            <h1 className='text-uppercase poppins-font'>
              {"soy"} {heroContent.heroTitleName}.
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className='open-sans-font'>{heroContent.heroDescriptions}</p>
            <button className='button' onClick={toggleModalOne}>
              <span className='button-text'>{heroContent.heroBtn}</span>
              <span className='button-icon fa fa-arrow-right'></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel='My dialog'
        className='custom-modal dark hero'
        overlayClassName='custom-overlay dark'
        closeTimeoutMS={500}
      >
        <div>
          <button className='close-modal' onClick={toggleModalOne}>
            <Image src={cancelImg} alt='close icon' />
          </button>
          {/* End close icon */}

          <div className='box_inner about'>
            <div data-aos='fade-up' data-aos-duration='1200'>
              <div className='title-section text-start text-sm-center'>
                <h1>
                  SOBRE <span>MÍ</span>
                </h1>
                <span className='title-bg'>Sobre mí</span>
              </div>
              {/* End title */}
              <AboutMain />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
