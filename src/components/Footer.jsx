import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-10'>
            <div className='container mx-auto text-center'> 
                 <p>&copy; 2024 MyBrand. All rights reserved.</p>
                 <nav className='space-x-4 mt-4'>
                    <a href="#terms" className='text-gray-400 hover:text-white'>
                        Terms of Service
                    </a>
                    <a href="#privacy" className='text-gray-400 hover:text-white'>
                        Privacy Policy
                    </a>
                 </nav>
                 <div className='flex justify-center space-x-4 mt-6'>
                    <FaFacebook className='text-2xl hover:text-blue-700 cursor-pointer transition' />
                    <FaTwitter className='text-2xl hover:text-blue-400 cursor-pointer transition' />
                    <FaInstagram className='text-2xl hover:text-red-500 cursor-pointer transition' />
                 </div>
            </div>
    </footer>
  )
}

export default Footer