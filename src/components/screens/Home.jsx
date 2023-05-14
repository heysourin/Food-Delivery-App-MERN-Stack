import React, { useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Card from '../Card'

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
        {/* //TODO: MAIN STARTS */}
        <Card />
        {/* //TODO: MAIN ENDS */}
        <Footer />
      </div>
    </div>
  )
}

export default Home
