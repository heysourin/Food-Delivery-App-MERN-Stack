import React from 'react'
import './Carousel.css'
const images = [
  'https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
]

const Carousel = () => {
  const [currentImage, setCurrentImage] = React.useState(0)

  const refs = images.reduce((acc, val, i) => {
    acc[i] = React.createRef()
    return acc
  }, {})

  const scrollToImage = (i) => {
    setCurrentImage(i)
    refs[i].current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    })
  }

  const totalImages = images.length

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0)
    } else {
      scrollToImage(currentImage + 1)
    }
  }

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1)
    } else {
      scrollToImage(currentImage - 1)
    }
  }

  const arrowStyle =
    'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center'

  const sliderControl = (isLeft) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
      style={{ top: '40%' }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
        {isLeft ? '◀' : '▶'}
      </span>
    </button>
  )

  return (
    <div className="p-12 flex justify-center items-center">
      <div className="relative w-full md:w-1/2">
        <div className="mb-4 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {/* <button
        type="button"
        className="ml-2 px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
      >
        Search
      </button> */}
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm ml-2 px-4 py-2 text-center">
            Search
          </button>
        </div>
        <div className="carousel">
          {sliderControl(true)}
          {images.map((img, i) => (
            <div className="w-full flex-shrink-0" key={i} ref={refs[i]}>
              <img src={img} className="w-full object-contain" />
            </div>
          ))}
          {sliderControl()}
        </div>
      </div>
    </div>
  )
}

export default Carousel
