import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const UserFooter = () => {
  return (
    <footer className="container mx-auto bg-gray-600 text-white py-10 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="text-xl font-semibold mb-4">MyUsere</h3>
          <p className="text-sm text-gray-400">
            Empowering users with real data and smart tools. Built with love and React ❤️
          </p>
        </div>

        
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline text-gray-300">Home</Link></li>
            <li><Link to="/users" className="hover:underline text-gray-300">Users</Link></li>
            <li><Link to="/posts" className="hover:underline text-gray-300">Posts</Link></li>
            <li><Link to="/recipe" className="hover:underline text-gray-300">Recipe</Link></li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4 text-gray-300 text-xl">
            <Link to="https://facebook.com">
              <FaFacebook className="hover:text-white transition" />
            </Link>
            <Link to="https://twitter.com">
              <FaTwitter className="hover:text-white transition" />
            </Link>
            <Link to="https://instagram.com">
              <FaInstagram className="hover:text-white transition" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  )
}

export default UserFooter