import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0 flex flex-col items-center md:items-start'>
                <img src={assets.logo_dark} alt="logo" />
                <p className='text-gray-400 mt-4 text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quam ratione libero, alias quidem facilis.</p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0 text-center md:text-left'>
                <h3 className='text-white font-bold text-lg mb-4'>Company</h3>
                <ul className='text-gray-400'>
                    <li><a className='hover:text-white underline' href="#">Home</a></li>
                    <li><a className='hover:text-white underline' href="#">About Us</a></li>
                    <li><a className='hover:text-white underline' href="#">Contact Us</a></li>
                    <li><a className='hover:text-white underline' href="#">Privacy policy</a></li>
                </ul>
            </div>
            <div className='w-full md:w-1/3 flex flex-col items-center md:items-start'>
                <h3 className='text-white font-bold text-lg mb-4'>Company</h3>
                <p className='text-gray-400 mb-4 max-w-80 text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, quasi.</p>
                <form>
                    <div className='w-full md:w-1/2 text-left flex gap-2 items-center'>
                        <input className='p-2 w-full md:w-auto border border-gray-700 text-gray-400 bg-gray-800 rounded focus:outline-none' type="text" name='Email' id="mail" placeholder='Your e-mail ...' required />
                        <button className='bg-blue-500 px-8 py-2 rounded text-white'>Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
        <div className='w-full text-sm font-light text-center text-gray-500 mt-10'>
            <p>Copyright © 2025, Skillhouse, All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer