import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeFooter = () => {
  return (
    <footer className="container mx-auto bg-white text-gray-900 shadow-md py-8 mt-16">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-bold mb-2">Biz haqimizda</h3>
          <p className="text-gray-400">
            Sifatli mahsulotlar va mijozlarga xizmat ko‘rsatish – bizning ustuvorligimiz.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">Tez havolalar</h3>
          <ul className="text-gray-400 space-y-1">
            <li className='hover:underline'>Bosh sahifa</li>
            <li className='hover:underline'>Mahsulotlar</li>
            <li className='hover:underline'>Bog‘lanish</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">Ijtimoiy tarmoqlar</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-2 text-xl text-gray-400">
            <Link to="https://facebook.com"><FaFacebookF /></Link>
            <Link to="https://twitter.com"><FaTwitter /></Link>
            <Link to="https://instagram.com"><FaInstagram /></Link>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Mahsulotlar. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
};

export default HomeFooter;
