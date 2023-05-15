import React, { useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Card from '../Card'
import Carousel from '../Carousel'

const Home = () => {
  return (
    <div className="">
      <div className="fixed top-0 left-0 w-full z-50" >
        <Navbar />
      </div>
      <div className='mt-20'>
        <Carousel />{' '}
      </div>
      <div>
        <Card />
      </div>
      <div className="bottom-0 left-0 w-full">
        <Footer />
      </div>
    </div>
  )
}

export default Home
