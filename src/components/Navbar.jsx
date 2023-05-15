import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-gray-700 to-gray-900 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-8 w-auto"
              src={logo}
              alt="Logo"
              height="500"
              width="500"
            />
            <Link
              to="/"
              className="ml-2 text-4xl font-bold text-white hover:text-gray-200"
            >
             Food OP
            </Link>
          </div>
          <div className="pt-5">
            <Link
              to="/login"
              className="px-3 py-2 rounded-lg text-sm font-medium text-white hover:bg-gray-700"
            >
              Log in
            </Link>
            <Link
              to="/"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 mt-2 text-center"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
