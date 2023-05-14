import React, { useState } from 'react'

const Card = () => {
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState('red')

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value)
    console.log(event.target.value)
  }

  const handleColorChange = (event) => {
    setColor(event.target.value)
    console.log(event.target.value)
  }
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-5">
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
            {/* {[...Array(10).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))} */}

            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
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
        <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 mt-2 text-center">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Card