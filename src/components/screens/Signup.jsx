import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    location: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Add your form submission logic here
    const response = await fetch('http://localhost:5000/api/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        location: formData.location,
      }),
    })
    const json = await response.json()
    console.log(json)

    if (!json.success) {
      alert('Enter valid keywords')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 py-6"
      >
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="border rounded px-3 py-2 w-full"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            className="border rounded px-3 py-2 w-full"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="border rounded px-3 py-2 w-full"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="location" className="block font-medium mb-2">
            Address
          </label>
          <input
            type="text"
            name="location"
            className="border rounded px-3 py-2 w-full"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign Up
        </button>
        <Link to="/login" className="ml-3 underline">
          Already a user!
        </Link>
      </form>
    </div>
  )
}

export default Signup
