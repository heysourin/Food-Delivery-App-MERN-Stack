import React, { useState } from 'react'

// 'https://images.pexels.com/photos/835752/pexels-photo-835752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
// 'https://images.pexels.com/photos/9469653/pexels-photo-9469653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
const Card = ({img, name, desc }) => {
  const [quantity, setQuantity] = useState(1)
  const [halfOrFull, setHalfOrFull] = useState('red')

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value)
    console.log(event.target.value)
  }

  const handleHalfOrFull = (event) => {
    setHalfOrFull(event.target.value)
    console.log(event.target.value)
  }


  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-5">
      <img
        className="w-full h-64 object-cover"
        // src="https://images.pexels.com/photos/9469653/pexels-photo-9469653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        src={img}
        alt="Product"
      />
      <div className="px-6 py-4">
        {/* <div className="font-bold text-xl">Product Name</div> */}
        <div className="font-bold text-xl">{name}</div>
        <div className="m-2">
          <p>{desc}</p>
        </div>
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
          <label htmlFor="halfOrFull" className="mt-2 mr-2">
            Half/ Full:
          </label>
          <select
            name="halfOrFull"
            id="halfOrFull"
            value={halfOrFull}
            onChange={handleHalfOrFull}
            className="border rounded px-2 py-1"
          >
            <option value="half">Half</option>
            <option value="full">Full</option>

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
