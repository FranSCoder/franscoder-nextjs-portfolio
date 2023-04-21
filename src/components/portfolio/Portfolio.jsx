import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import PortfolioData from './portfolioData'
import Image from 'next/image'
import ModalMain from './modal/ModalMain'

const Portfolio = () => {
  const [getModal, setGetModal] = useState(false)
  const [modalId, setModalId] = useState(1)

  const handleModal = (id) => {
    setGetModal(true)
    setModalId(id)
  }

  return (
    <>
      <div className='portfolio-main'>
        <Tabs>
          <TabList className='portfolio-tab-list' data-aos='fade-up'>
            <Tab>ALL</Tab>
            <Tab>MERN</Tab>
            <Tab>D3.JS</Tab>
          </TabList>

          <div className='container'>
            <TabPanel>
              <div className='tab-container'>
                {PortfolioData.map((item) => {
                  const { id, type, image, delayAnimation } = item

                  return (
                    <div key={id} data-aos='fade-right' data-aos-delay={delayAnimation}>
                      <div className='tab-content' onClick={() => handleModal(id)}>
                        <Image src={image} alt='portfolio project demo' />
                        <h3>
                          <span className='content-title'>{type}</span>
                        </h3>
                      </div>
                    </div>
                  )
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className='tab-container'>
                {PortfolioData.filter((item) =>
                  ['mongodb', 'express', 'react', 'node'].every((i) => item.tag.includes(i))
                ).map((item) => {
                  const { id, type, image, delayAnimation } = item
                  return (
                    <div key={id} data-aos='fade-right' data-aos-delay={delayAnimation}>
                      <div className='tab-content' onClick={() => handleModal(id)}>
                        <Image src={image} alt='portfolio project demo' />
                        <h3>
                          <span className='content-title'>{type}</span>
                        </h3>
                      </div>
                      {/* {getModal && <Modal props={modalId} />} */}
                    </div>
                  )
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className='tab-container'>
                {PortfolioData.filter((item) => item.tag.includes('d3')).map((item) => {
                  const { id, type, image, delayAnimation } = item
                  return (
                    <div key={id} data-aos='fade-right' data-aos-delay={delayAnimation}>
                      <div className='tab-content' onClick={() => handleModal(id)}>
                        <Image src={image} alt='portfolio project demo' />
                        <h3>
                          <span className='content-title'>{type}</span>
                        </h3>
                      </div>
                      {/* {getModal && <Modal props={modalId} />} */}
                    </div>
                  )
                })}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
      {getModal && <ModalMain modalId={modalId} setGetModal={setGetModal} />}{' '}
    </>
  )
}

export default Portfolio
