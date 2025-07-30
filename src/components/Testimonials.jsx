import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className='container overflow-hidden mx-auto py-4 px-6 md:px-20 lg:px-32 my-20 w-full' id='Testimonials'>
        <h2 className='text-2xl md:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 under font-light '>Testimonials</span></h2>
        <p className='text-gray-500 max-w-80 mb-8 text-center mx-auto'>Lorem ipsum dolor sit amet consectetur.</p>

        <div className='flex flex-wrap gap-8 justify-center'>
            {testimonialsData.map((testimonial, index) =>(
                <div key={index} className='max-w-80 shadow-lg rounded px-8 py-12 text-center'>
                    <img src={testimonial.image} alt={testimonial.alt} className='w-20 h-20 rounded-full mx-auto mb-4'/>
                    <h2 className='text-xl text-gray-700 font-medium'>
                        {testimonial.name}
                    </h2>
                    <p className='text-gray-500 mb-4 text-sm'>
                        {testimonial.title}
                    </p>
                    <div className='flex justify-center gap-1 mb-4 text-red-500'>
                        {Array.from({length: testimonial.rating}, (item, index) => (
                            <img key={index} src={assets.star_icon} alt="star" />
                        ))}
                    </div>
                    <p className='text-gray-600'>
                        {testimonial.text}
                    </p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials