import React from 'react'

const Testimonials = () => {
  return (
    <section className='bg-white py-20'>
        <div className='container mx-auto text-center'>
            <h2 className='text-4xl font-bold mb-10'>
                Loved by Thousands of Creators
            </h2>
            <div className='flex flex-wrap justify-center space-x-8'>
                <div className='w-1/3'>
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D" alt="john" className='size-32 rounded-full mx-auto mb-4 transition hover:scale-105' />
                    <p>
                        "My-Brand has cahnged the way I sell online."
                    </p>
                    <p  className='font-bold'>
                        John Alyx
                    </p>
                </div>
                <div className='w-1/3 '>
                    <img src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D" alt="skylar" className='size-32 rounded-full mx-auto mb-4 transition hover:scale-105' />
                    <p>
                        "It's never been easier to start a business!"
                    </p>
                    <p className='font-bold'>
                        Skylar Smith
                    </p>
                </div>
                <div className='w-1/3 md:mt-3 '>
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" alt="skylar" className='size-32 rounded-full mx-auto mb-4 transition hover:scale-105' />
                    <p>
                        "Bring your ideas into reality."
                    </p>
                    <p className='font-bold'>
                        Jane William
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials