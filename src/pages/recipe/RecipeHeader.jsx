import React from 'react'
import {  NavLink } from 'react-router-dom'

const RecipeHeader = () => {
  return (
    <header className="container mx-auto bg-yellow-400 shadow-md py-5 mb-12">
          <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-xl font-bold text-white">MyRecipe</h1>
            <nav className="space-x-6 text-white font-semibold">
              <NavLink to="/" className="hover:underline hover:text-gray-900 transition">Home</NavLink>
              <NavLink to="/recipe" className="underline decoration-4 decoration-white">Recipes</NavLink>
              <NavLink to="/posts" className="hover:underline hover:text-gray-900 transition">Posts</NavLink>
              <NavLink to="/users" className="hover:underline hover:text-gray-900 transition">Users</NavLink>
              <NavLink to="/login" className="hover:underline hover:text-gray-900 transition">Login</NavLink>
            </nav>
          </div>
    </header>
  )
}

export default React.memo(RecipeHeader)