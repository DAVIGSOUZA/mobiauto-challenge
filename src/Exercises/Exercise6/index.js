import React, { Fragment, useEffect, useState } from 'react'
import 'h8k-components'

import { image1, image2, image3, image4 } from './assets/images'
import { Thumbs, Viewer } from './components'

const title = 'Catalog Viewer'

function Slider() {
  const catalogsList = [
    {
      thumb: image1,
      image: image1
    },
    {
      thumb: image2,
      image: image2
    },
    {
      thumb: image3,
      image: image3
    },
    {
      thumb: image4,
      image: image4
    }
  ]

  const [catalogs] = useState([...catalogsList])
  const [activeIndex, setActiveIndex] = useState(0)
  const [slideTimer, setSlideTimer] = useState(false)
  const [slideDuration] = useState(3000)

  const increaseIndex = () => {
    return activeIndex < catalogs.length - 1
      ? setActiveIndex(prevActiveIndex => prevActiveIndex + 1)
      : setActiveIndex(0)
  }

  const decreaseIndex = () => {
    return activeIndex === 0 
      ? setActiveIndex(catalogs.length - 1)
      : setActiveIndex(prevActiveIndex => prevActiveIndex - 1)
  }

  const handleArrowKeys = (e) => {
    if (e.key === 'ArrowRight') increaseIndex()
    if (e.key === 'ArrowLeft') decreaseIndex()
  }

  useEffect(() => {
    window.addEventListener('keydown', handleArrowKeys)
    return () => window.removeEventListener('keydown', handleArrowKeys)
  })

  useEffect(() => {
    const autoSlide = slideTimer && setInterval(() => increaseIndex(), slideDuration)
    return () => clearInterval(autoSlide)
  }, [slideTimer, activeIndex])

  return (
    <Fragment>
      <h8k-navbar header={title}></h8k-navbar>
      <div className='layout-column justify-content-center mt-75'>
        <div className='layout-row justify-content-center'>
          <div className='card pt-25'>
            <Viewer catalogImage={catalogs[activeIndex].image} />
            <div className='layout-row justify-content-center align-items-center mt-20'>
              <button
                className="icon-only outlined"
                data-testid="prev-slide-btn"
                onClick={() => decreaseIndex()}
              >
                <i className="material-icons">arrow_back</i>
              </button>
              <Thumbs
                items={catalogs}
                currentIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
              <button
                className="icon-only outlined"
                data-testid="next-slide-btn"
                onClick={() => increaseIndex()}
              >
                <i className="material-icons">arrow_forward</i>
              </button>
            </div>
          </div>
        </div>
        <div className='layout-row justify-content-center mt-25'>
          <input
            type='checkbox'
            data-testid='toggle-slide-show-button'
            value={slideTimer}
            onClick={() => setSlideTimer(!slideTimer)}
          />
          <label className='ml-6'>Start Slide Show</label>
        </div>
      </div>
    </Fragment>
  )
}

export default Slider

