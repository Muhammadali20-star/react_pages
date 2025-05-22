import React from 'react'

const PostsFooter = () => {
  return (
    <footer className="container mx-auto bg-gray-900 text-white py-8 mt-16">
      <div className="container mx-auto px-8 grid md:grid-cols-3 gap-12 text-sm">
        
        <div>
          <h3 className="text-lg font-bold mb-3">MyPosts</h3>
          <p className="opacity-70">
            This project displays blog posts using DummyJSON API. Built with React and TailwindCSS.
          </p>
        </div>

      
        <div>
          <h3 className="text-lg font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/posts" className="hover:underline">Posts</a></li>
            <li><a href="/users" className="hover:underline">Users</a></li>
            <li><a href="/login" className="hover:underline">Login</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3">Contact</h3>
          <p>Email: <a href="mailto:info@example.com" className="hover:underline">info@example.com</a></p>
          <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default React.memo(PostsFooter)