import React from 'react'
import { Link } from 'react-router-dom'

const HomeHeader = () => {
  return (
    <header className="container mx-auto bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-black">MyStore</Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-blue-600 underline">Home</Link>
          <Link to="/recipe" className="hover:text-blue-600">Recipe</Link>
          <Link to="/users" className="hover:text-blue-600">Users</Link>
          <Link to="/posts" className="hover:text-blue-600">Posts</Link>
          <Link to="/login" className="hover:text-blue-600">Login</Link>
        </nav>
      </div>
    </header>
  )
}

export default HomeHeader