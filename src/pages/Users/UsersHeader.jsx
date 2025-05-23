import React from 'react'
import {  NavLink } from 'react-router-dom'

const UsersHeader = () => {
  return (
    <header className="container mx-auto bg-gray-600 shadow-md text-white py-4 px-6 flex justify-between items-center mb-6">
    <h1 className="text-xl font-bold">MyUsers</h1>
    <nav className="space-x-4">
      <NavLink to="/" className="text-white hover:text-black">Home</NavLink>
      <NavLink to="/users" className="text-white hover:text-black underline">Users</NavLink>
      <NavLink to="/posts" className="text-white hover:text-black">Posts</NavLink>
      <NavLink to="/recipe" className="text-white hover:text-black">Recipe</NavLink>
      <NavLink to="/login" className="text-white hover:text-black">Login</NavLink>
    </nav>
  </header>
  )
}

export default React.memo(UsersHeader)