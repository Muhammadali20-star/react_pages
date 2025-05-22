import React from 'react'
import {  NavLink } from 'react-router-dom'

const HomeHeader = () => {
  return (
    <header className="container mx-auto bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-black">MyStore</NavLink>
        <nav className="space-x-4">
          <NavLink to="/" className="hover:text-blue-600 underline">Home</NavLink>
          <NavLink to="/recipe" className="hover:text-blue-600">Recipe</NavLink>
          <NavLink to="/users" className="hover:text-blue-600">Users</NavLink>
          <NavLink to="/posts" className="hover:text-blue-600">Posts</NavLink>
          <NavLink to="/login" className="hover:text-blue-600">Login</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default React.memo(HomeHeader)