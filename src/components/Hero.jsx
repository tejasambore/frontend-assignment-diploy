import React from 'react';
import BgImage from '../assets/bg-image.jpg'

const Hero = () => {
  return (
    <section className='bg-cover bg-center h-screen flex flex-col justify-center items-center text-center'
    style={{ backgroundImage: `url(${BgImage})` }}
    >
        <h1 className='text-6xl font-bold text-white mb-6'>
            Bring Your Ideas to Life 
        </h1>
        <h3 className='text-2xl font-bold text-white mb-2'>
            Start Your online Business Today!
        </h3>
        <p className='text-lg text-gray-200 mb-8'>
            Create stunning products and start your business today. <br/>
            Create, sell, and grow your business with ease.
        </p>

        <div className='space-x-4'>
            <button className='bg-[#FCDE70] text-[#2E1F27]  font-semibold py-4 px-5 rounded-xl hover:bg-[#ECEBF3] transition transform hover:scale-105'>
                Get Started
            </button>

            <button className='bg-[#FCDE70] text-[#2E1F27] font-semibold py-4 px-5 rounded-xl hover:bg-[#ECEBF3] transition transform hover:scale-105'>
                Learn More!
            </button>
        </div>
    </section>
  )
}

export default Hero