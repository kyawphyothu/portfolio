import React from 'react'

export default function Nav() {
  return (
    <nav className="bg-blue-500 p-4 sticky to">
      <div className="container mx-auto">
        <h1 className="text-white text-2xl">My Website</h1>
        <ul className="flex space-x-4 mt-2">
          <li><a href="/" className="text-white hover:text-gray-200">Home</a></li>
          <li><a href="/about" className="text-white hover:text-gray-200">About</a></li>
          <li><a href="/contact" className="text-white hover:text-gray-200">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
