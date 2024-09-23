import React from 'react'
import { FaRocket, FaPaintBrush, FaGlobe } from 'react-icons/fa';

const Features = () => {
    const features = [
        {
            title: "Easy Setup",
            description: "Start selling in minutes.",
            icon: <FaRocket className='text-green-500 text-4xl mb-4' />
        },
        {
            title: "Customizable",
            description: "Make it your own.",
            icon: <FaPaintBrush className='text-green-500 text-4xl mb-4' />
        },
        {
            title: "Global Shipping",
            description: "Ship anywhere in the world.",
            icon: <FaGlobe className='text-green-500 text-4xl mb-4' />
        },
    ];

  return (
    <section id='features' className='py-20 bg-gray-100'>
        <div className='container mx-auto text-center'>
            <h2 className='text-4xl font-bold mb-10'>Why Choose Us?</h2>
            <div className='flex flex-wrap justify-center space-x-8'>
                {features.map((feature, index)  => (
                    <div key={index} className='bg-white shadow-lg p-6 text-center rounded-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1'>
                        {feature.icon}
                        <h3 className='text-2xl font-bold mb-4'>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Features