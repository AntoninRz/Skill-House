import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: "url('/header_img.png')"}} id='Header'>
        
        <Navbar/>

        <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
            <h1 className='text-4xl sm:text-5xl md:text-7xl inline-block max-w-3xl font-semibold pt-20'>Lorem ipsum dolor sit amet.</h1>
            <div className='space-x-6 mt-16'>
                <a href="#" className='border border-white px-8 py-3 rounded'>Projects</a>
                <a href="#" className='bg-blue-500 px-8 py-3 rounded'>Contact Us</a>
            </div>
        </div>
    </div>
  )
}

export default Header