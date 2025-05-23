import React from 'react'
import {  NavLink } from 'react-router-dom'

const UsersHeader = () => {
  return (
    <header className="container mx-auto bg-gray-600 shadow-md text-white py-4 px-6 flex justify-between items-center mb-6">
    <h1 className="text-xl font-bold">MyUsers</h1>
    <nav className="space-x-4">
      <NavLink to="/" className="text-white hover:text-black lg:hidden">Home</NavLink>
      <NavLink to="/users" className="text-white hover:text-black underline lg:hidden">Users</NavLink>
      <NavLink to="/posts" className="text-white hover:text-black lg:hidden">Posts</NavLink>
      <NavLink to="/recipe" className="text-white hover:text-black lg:hidden">Recipe</NavLink>
      <NavLink to="/login" className="text-white hover:text-black lg:hidden">Login</NavLink>
    </nav>
  </header>
  )
}

export default React.memo(UsersHeader)