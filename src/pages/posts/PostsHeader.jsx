import React from 'react'
import { Link } from 'react-router-dom'

const PostsHeader = () => {
  return (
        <header className="container mx-auto bg-gray-800 text-white py-4 mb-12">
              <div className="container mx-auto px-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">MyPosts</h1>
                <nav className="flex gap-4">
                  <Link to="/" className="hover:underline">Home</Link>
                  <Link to="/recipe" className="hover:underline">Recipe</Link>
                  <Link to="/posts" className="underline">Posts</Link>
                  <Link to="/users" className="hover:underline">Users</Link>
                  <Link to="/login" className="hover:underline">Login</Link>
                </nav>
              </div>
        </header>
  )
}

export default React.memo(PostsHeader)