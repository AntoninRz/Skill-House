import React from 'react'
import {assets} from '../assets/assets'
import { useState } from 'react'
import { useEffect } from 'react'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow = 'hidden'
    }else {
      document.body.style.overflow = 'auto'
    }
    return ()=>{
      document.body.style.overflow = 'auto'
    }
  },[setShowMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container flex justify-between items-center py-4 px-6 md:px20 lg:px-32'>
            <img src={assets.logo} alt="logo" />
            <ul className='hidden md:flex gap-7 text-white'>
                <li><a href="#" className='cursor-pointer hover:text-gray-400'>Home</a></li>
                <li><a href="#" className='cursor-pointer hover:text-gray-400'>About</a></li>
                <li><a href="#" className='cursor-pointer hover:text-gray-400'>Projects</a></li>
                <li><a href="#" className='cursor-pointer hover:text-gray-400'>Testimonials</a></li>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign up</button>
            <img onClick={()=> setShowMobileMenu(true)} src={assets.menu_icon} alt="burger menu" className='md:hidden w-7 cursor-pointer'/>

            {/* ------------ Mobile menu ------------ */}
            <div className={`
              fixed top-0 right-0 bottom-0 overflow-hidden bg-white transition-transform duration-300 ease-in-out z-50
              ${showMobileMenu ? 'translate-x-0 w-full h-full' : 'translate-x-full w-0 h-0'} 
              md:hidden`}>
              <div className='flex justify-end p-6 cursor-pointer'>
                <img onClick={()=> setShowMobileMenu(false) } src={assets.cross_icon} className='w-6' alt="" />
              </div>
              <ul className='flex flex-col items-center justify-center gap-2 text-lg font-medium'>
                <li><a onClick={()=> setShowMobileMenu(false) } href="#" className='cursor-pointer hover:text-gray-400'>Home</a></li>
                <li><a onClick={()=> setShowMobileMenu(false) } href="#" className='cursor-pointer hover:text-gray-400'>About</a></li>
                <li><a onClick={()=> setShowMobileMenu(false) } href="#" className='cursor-pointer hover:text-gray-400'>Projects</a></li>
                <li><a onClick={()=> setShowMobileMenu(false) } href="#" className='cursor-pointer hover:text-gray-400'>Testimonials</a></li>
              </ul>
            </div>
        </div>

    </div>
    
  )
}

export default Navbar