import React from 'react'
import { NavLink } from 'react-router-dom'

const PostsHeader = () => {
  return (
        <header className="container mx-auto bg-gray-800 text-white py-4 mb-12">
              <div className="container mx-auto px-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">MyPosts</h1>
                <nav className="flex gap-4">
                  <NavLink to="/" className="hover:underline">Home</NavLink>
                  <NavLink to="/recipe" className="hover:underline">Recipe</NavLink>
                  <NavLink to="/posts" className="underline">Posts</NavLink>
                  <NavLink to="/users" className="hover:underline">Users</NavLink>
                  <NavLink to="/login" className="hover:underline">Login</NavLink>
                </nav>
              </div>
        </header>
  )
}

export default React.memo(PostsHeader)