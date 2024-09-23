import React from 'react'

const Header = () => {
  return (
    <header className='bg-[#ECEBF3] shadow-md p-4 sticky top-0 z-50'>
        <div className='container mx-auto flex justify-between items-center'>
            <a 
                href='../app.jsx'
                className='text-2xl font-bold text-[#2E1F27]'>
                PrintCraft
            </a>
                <nav className='space-x-8 hidden md:flex'>
                    <a 
                        href="#home" 
                        className='text-lg text-[#2E1F27] hover:text-gray-600 transition'
                    >
                        Home
                    </a>
                    <a 
                        href="#features" 
                        className='text-lg text-[#2E1F27] hover:text-gray-600 transition'
                    >
                        Features
                    </a>
                    <a 
                        href="#pricing" 
                        className='text-lg text-[#2E1F27] hover:text-gray-600 transition'
                    >
                        Pricing
                    </a>
                    <a 
                        href="#contact" 
                        className='text-lg text-[#2E1F27] hover:text-gray-600 transition'
                    >
                        Contact
                    </a>
                </nav>
                <div className='space-x-3 '>
                <button
                    className='text-md bg-[#2E1F27] text-[#ECEBF3] font-semibold p-2 px-6 rounded-xl transition hover:scale-105'
                >
                    Login
                </button>
                <button
                    className=' text-md bg-[#2E1F27] text-[#ECEBF3] font-semibold p-2 px-6 rounded-xl  transition hover:scale-105'
                >
                    Sign Up
                </button>
                </div>
        </div>
    </header>
  )
}

export default Header