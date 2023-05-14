import React, { useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Home = () => {
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState('red')

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value)
  }

  const handleColorChange = (event) => {
    setColor(event.target.value)
  }
  return (
    <div>
      <div>
        <Navbar />
        {/* //TODO: MAIN STARTS */}
        <div>
          <div className="max-w-xs rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-64 object-cover"
              src="https://via.placeholder.com/640x360.png?text=Product+Image"
              alt="Product"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Product Name</div>
              <div className="flex mb-2">
                <label htmlFor="quantity" className="mr-2">
                  Quantity:
                </label>
                <select
                  name="quantity"
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="border rounded px-2 py-1"
                >
                  {[...Array(10).keys()].map((i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex mb-2">
                <label htmlFor="color" className="mr-2">
                  Color:
                </label>
                <select
                  name="color"
                  id="color"
                  value={color}
                  onChange={handleColorChange}
                  className="border rounded px-2 py-1"
                >
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                </select>
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        {/* //TODO: MAIN ENDS */}
        <Footer />
      </div>
    </div>
  )
}

export default Home
