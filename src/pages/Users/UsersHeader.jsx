import React from 'react'
import { Link } from 'react-router-dom'

const UsersHeader = () => {
  return (
    <header className="container mx-auto bg-gray-600 shadow-md text-white py-4 px-6 flex justify-between items-center mb-6">
    <h1 className="text-xl font-bold">MyUsers</h1>
    <nav className="space-x-4">
      <Link to="/" className="text-white hover:text-black">Home</Link>
      <Link to="/users" className="text-white hover:text-black underline">Users</Link>
      <Link to="/posts" className="text-white hover:text-black">Posts</Link>
      <Link to="/recipe" className="text-white hover:text-black">Recipe</Link>
      <Link to="/login" className="text-white hover:text-black">Login</Link>
    </nav>
  </header>
  )
}

export default UsersHeader