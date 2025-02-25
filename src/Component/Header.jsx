import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosHome } from "react-icons/io";
import { Link } from 'react-router-dom';

function Header() {
  // Navigation menu items array
  const menuItems = [
    { id: 1, name: 'Bestsellers', path: '/bestsellers' },
    { id: 2, name: 'New Arrivals', path: '/new-arrivals' },
    { id: 3, name: 'Pre Order', path: '/pre-order' },
    { id: 4, name: 'Children & Young Adult', path: '/children-young-adult' },
    { id: 5, name: 'Fiction & Non Fiction', path: '/fiction-non-fiction' },
    { id: 6, name: 'School Education', path: '/school-education' },
    { id: 7, name: 'Higher Education', path: '/higher-education' },
    { id: 8, name: 'Test Prep', path: '/test-prep' },
    { id: 9, name: 'Games & Puzzles', path: '/games-puzzles' },
  ];

  // Social media icons array
  const socialIcons = [
    { id: 1, icon: <FaFacebook />, link: 'https://facebook.com' },
    { id: 2, icon: <FaTwitter />, link: 'https://twitter.com' },
    { id: 3, icon: <FaLinkedin />, link: 'https://linkedin.com' },
    { id: 4, icon: <FaInstagram />, link: 'https://instagram.com' },
  ];

  return (
    <div className='w-full'>
      {/* Top social bar */}
      <div className='bg-[#333333] py-1 px-4'>
        <div className='max-w-7xl mx-auto flex justify-end gap-4 text-white'>
          {socialIcons.map((social) => (
            <a 
              key={social.id} 
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-gray-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Main header */}
      <div className='max-w-7xl mx-auto py-4 px-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link to="/" className='text-2xl font-bold'>
            <span className='text-gray-700'>Buy</span>
            <span className='text-orange-500'>Books</span>
            <span className='text-gray-700'>.com</span>
          </Link>

          {/* Search bar */}
          <div className='flex-1 max-w-2xl mx-8'>
            <div className='relative'>
              <input 
                type="text" 
                placeholder="Search by title, author or ISBN here..."
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500'
              />
              <button className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-orange-500'>
                <FaSearch />
              </button>
            </div>
          </div>

          {/* Login button */}
          <button className='bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 flex items-center gap-2'>
            <IoPersonSharp />
            <span>Login</span>
          </button>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className='bg-[#333333] text-white'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex justify-between items-center'>
            <ul className='flex items-center space-x-6 py-3 overflow-x-auto text-[13px]'>
              <li>
                <Link to="/" className='hover:text-orange-500 flex items-center gap-1'>
                  <IoIosHome className="text-lg" />
                </Link>
              </li>
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link 
                    to={item.path} 
                    className='hover:text-orange-500 whitespace-nowrap transition-colors duration-200'
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Cart and Wishlist icons */}
            <div className='flex items-center gap-6'>
              <Link to="/wishlist" className='relative flex items-center gap-1 hover:text-orange-500'>
                <FaHeart className="text-lg" />
              </Link>
              <Link to="/cart" className='relative flex items-center gap-1 hover:text-orange-500'>
                <FaShoppingCart className="text-lg" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
