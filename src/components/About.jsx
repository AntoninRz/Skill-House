import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.div 
        initial={{opacity: 0, x:200}}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x:0}}
        viewport={{once: true}}
    className='container flex flex-col justify-center items-center overflow-hidden mx-auto p-14 md:px-20 lg:px-32 w-full' id='About'>
      <h2 className='text-2xl md:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light '>Our Brand</span></h2>
      <p className='text-gray-500 max-w-80 mb-8 text-center'>Lorem ipsum dolor sit amet consectetur.</p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img src={assets.brand_img} alt="brand" className="w-full sm:w-1/2 max-w-lg" />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
            <div>
              <p className='text-4xl font-medium text-gray-800'>+10</p>
              <p>Lorem, ipsum dolor.</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>+12</p>
              <p>Lorem, ipsum dolor.</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>+20</p>
              <p>Lorem, ipsum dolor.</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>+25</p>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
          <p className='my-10 max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo repellendus veritatis possimus sit explicabo, delectus natus minus exercitationem velit mollitia animi itaque pariatur expedita saepe hic quis aliquam officia vel cumque aliquid dicta! Unde accusantium dicta deleniti consequuntur eum provident nobis voluptatum sit ex? Dolorum nulla nesciunt odit molestiae.</p>
          <button className='bg-blue-500 px-8 py-3 rounded text-white'>Learn more</button>
        </div>
      </div>
    </motion.div>
  )
}

export default About