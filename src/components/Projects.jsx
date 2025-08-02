import React from 'react'
import { assets, projectsData } from '../assets/assets'
import { useState } from 'react'
import { useEffect } from 'react'
import { motion } from "motion/react"

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [cardsToShow, setCardsToShow] = useState(1)

    useEffect(() => {
        const updateCardsToShow = () => {
            if(window.innerWidth >= 1024) {
                setCardsToShow(projectsData.length)
            } else {
                setCardsToShow(1)
            }
        }
            updateCardsToShow()

            window.addEventListener('resize', updateCardsToShow)
            return () => window.removeEventListener('resize', updateCardsToShow)
    })

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }
    const prevProject = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length -1 : prevIndex -1)
    }

  return (
    <motion.div 
        initial={{opacity: 0, x:-200}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, x:0}}
        viewport={{once: true}}
        className='container overflow-hidden mx-auto py-4 px-6 md:px-20 lg:px-32 my-20 w-full' id='Projects'>
        <h2 className='text-2xl md:text-4xl font-bold mb-2 text-center'>Projects <span className='underline underline-offset-4 decoration-1 under font-light '>Completed</span></h2>
        <p className='text-gray-500 max-w-80 mb-8 text-center mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae?</p>

        <div className='flex justify-end items-center mb-8'>
            <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2 cursor-pointer' aria-label='Previous Project'>
                <img src={assets.left_arrow} alt="" />
            </button>
            <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2 cursor-pointer' aria-label='Next Project'>
                <img src={assets.right_arrow} alt="" />
            </button>
        </div>

        <div className='overflow-hidden'>
            <div className='flex gap-8 transition-transform duration-500 ease-in-out' 
            style={{transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`}}>
                {projectsData.map((project, index)=>(
                    <div key={index} className='relative shrink-0 w-full sm:w-1/4'>

                        <img src={project.image} alt={project.title} className='w-full h-auto mb-14'/>
                        <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                        <div className='inline-block bg-white w-3/4 px-3 py-2 shadow-md'>
                            <h2 className='text-xl font-semibold text-gray-800'>
                                {project.title}
                            </h2>
                            <p className='text-sm text-gray-500'>
                                {project.price} <span> | </span> {project.location}
                            </p>
                        </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>

    </motion.div>
  )
}

export default Projects