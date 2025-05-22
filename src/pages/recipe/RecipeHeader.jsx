import React from 'react'
import { Link } from 'react-router-dom'

const RecipeHeader = () => {
  return (
    <header className="container mx-auto bg-yellow-400 shadow-md py-5 mb-12">
          <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-3xl font-extrabold text-white">MyRecipe</h1>
            <nav className="space-x-6 text-white font-semibold">
              <Link to="/" className="hover:underline hover:text-gray-900 transition">Home</Link>
              <Link to="/recipe" className="underline decoration-4 decoration-white">Recipes</Link>
              <Link to="/posts" className="hover:underline hover:text-gray-900 transition">Posts</Link>
              <Link to="/users" className="hover:underline hover:text-gray-900 transition">Users</Link>
              <Link to="/login" className="hover:underline hover:text-gray-900 transition">Login</Link>
            </nav>
          </div>
    </header>
  )
}

export default React.memo(RecipeHeader)