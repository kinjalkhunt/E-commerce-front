import React from 'react'
import { Link } from 'react-router-dom'
import { FaTruck, FaCreditCard, FaUsers, FaHeadset } from 'react-icons/fa'
import { IoLocationSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Footer() {
  // Categories Data
  const categories = [
    { id: 1, name: 'ACTION & ADVENTURE', path: '/action-adventure' },
    { id: 2, name: 'AGRICULTURAL', path: '/agricultural' },
    { id: 3, name: 'ARTS, FILM & PHOTOGRAPHY', path: '/arts-film-photography' },
    { id: 4, name: 'AUTHORS COMBO', path: '/authors-combo' },
    { id: 5, name: 'AWARD WINNING BOOKS', path: '/award-winning' },
    { id: 6, name: 'BESTSELLERS', path: '/bestsellers' },
    { id: 7, name: 'BOX SET', path: '/box-set' },
    { id: 8, name: 'BUSINESS & ECONOMICS', path: '/business-economics' },
  ];

  // Services Data
  const services = [
    {
      id: 1,
      icon: <FaTruck className="text-4xl text-orange-500" />,
      title: "Pan India Delivery",
      description: "No Minimum Order Value"
    },
    {
      id: 2,
      icon: <FaCreditCard className="text-4xl text-orange-500" />,
      title: "Secure Payment",
      description: "100% Secure Payment"
    },
    {
      id: 3,
      icon: <FaUsers className="text-4xl text-orange-500" />,
      title: "Business/Bulk orders",
      description: "Mail Us for Further Orders"
    },
    {
      id: 4,
      icon: <FaHeadset className="text-4xl text-orange-500" />,
      title: "Quick Support",
      description: "10:00 AM - 5:00 PM (Sunday Closed)"
    }
  ];

  // Footer Links Data
  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Publisher Partnership', path: '/partnership' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Disclaimer', path: '/disclaimer' },
    ],
    myAccount: [
      { name: 'My Orders', path: '/orders' },
      { name: 'My Addresses', path: '/addresses' },
      { name: 'My Personal Info', path: '/personal-info' },
    ],
    support: [
      { name: 'Terms of Use', path: '/terms' },
      { name: 'How to Order', path: '/how-to-order' },
      { name: 'Shipping Policy', path: '/shipping' },
      { name: 'Return Policy', path: '/return' },
    ],
    moreBooks: [
      { name: 'Indian Languages', path: '/indian' },
      { name: 'International Languages', path: '/international' },
      { name: 'Award Winning Books', path: '/award-winning' },
      { name: 'Frontlist Picks Books', path: '/frontlist' },
      { name: 'Used Books', path: '/used' },
      { name: 'Exams & Age', path: '/exams' },
    ]
  };

  // Contact Info Data
  const contactInfo = [
    {
      icon: <IoLocationSharp className="text-2xl text-white" />,
      bgColor: 'bg-[#4B5563]',
      content: 'Viraj Tower - 2, 4259/3, Ansari Road,\nDarya Ganj, New Delhi - 110002'
    },
    {
      icon: <FaWhatsapp className="text-2xl text-white" />,
      bgColor: 'bg-[#25D366]',
      content: '+91-8287084742'
    },
    {
      icon: <MdEmail className="text-2xl text-white" />,
      bgColor: 'bg-[#EA4335]',
      content: 'info@buybooksindia.com'
    }
  ];

  // Social Media Data
  const socialMedia = [
    { icon: <FaFacebookF className="text-xl" />, link: '#' },
    { icon: <FaTwitter className="text-xl" />, link: '#' },
    { icon: <FaLinkedinIn className="text-xl" />, link: '#' },
    { icon: <FaInstagram className="text-xl" />, link: '#' }
  ];

  // Render Footer Link Section
  const renderFooterLinks = (title, links) => (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-white border-b border-orange-500 pb-2 inline-block">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path} className="text-gray-400 hover:text-orange-500">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Books by Categories Section */}
        <div className="mb-12">
          <h2 className="text-white text-3xl font-semibold text-center mb-2">
            Books by Categories
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.path}
                className="bg-white py-3 px-4 text-center hover:bg-orange-500 hover:text-white transition-colors duration-300"
              >
                {category.name}
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-2 transition-colors duration-300">
              VIEW ALL CATEGORIES
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`p-8 flex flex-col items-center text-center ${
                index === services.length - 1 ? '' : 'border-r border-gray-200'
              }`}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="w-full bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h2 className="text-white text-2xl font-semibold mb-4">
              SUBSCRIBE TO BUYBOOKSINDIA NEWSLETTER
            </h2>
            <div className="max-w-xl mx-auto flex">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 p-3 rounded-l focus:outline-none"
              />
              <button className="bg-[#1A1A1A] text-white px-6 py-3 rounded-r hover:bg-gray-800">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {renderFooterLinks('COMPANY', footerLinks.company)}
          {renderFooterLinks('MY ACCOUNT', footerLinks.myAccount)}
          {renderFooterLinks('SUPPORT', footerLinks.support)}
          {renderFooterLinks('MORE BOOKS', footerLinks.moreBooks)}
        </div>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center text-gray-400 border-t border-gray-800 pt-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`${info.bgColor} p-4 rounded-lg mb-4`}>
                {info.icon}
              </div>
              <p>{info.content}</p>
              {index === 2 && (
                <div className="flex justify-center gap-4 mt-4">
                  {socialMedia.map((social, idx) => (
                    <a 
                      key={idx} 
                      href={social.link} 
                      className="text-gray-400 hover:text-orange-500"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-400 border-t border-gray-800 mt-8 pt-8">
          <p>&copy; {new Date().getFullYear()} BuyBooks.com. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
