import React from 'react'

import css from './assets/css.png';
import github from './assets/github.png';
import html from './assets/html.png';
import javascript from './assets/javascript.png';
import mongo from './assets/mongo.png';
import node from './assets/node.png';
import react from './assets/react.png';
import tailwind from './assets/tailwind.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full min-h-screen bg-[#27272a] text-gray-300'>
      <div className='max-w-[1000px] mx-auto px-4 flex-col justify-center w-full h-full pt-8'>
        <div className='flex flex-col justify-center items-center pt-7'>
          <p className='text-4xl text-white border-b-4'>Skills</p>
          <p className='py-6'>These are technologies I've a worked with</p>
        </div>
        <div className='w-full grid grid-cols-4 sm:grid-cols-4 gap-4 text-center pt-8'>
          <div className='shadow-md shadow-[#202022] hover:scale-110 duration-300'>
            <img className="w-20 mx-auto" src={html} alt='html'></img>
            <p className='my-4'>HTML</p>
          </div>

        <div className='shadow-md shadow-[#202022] hover:scale-110 duration-300'>
          <img className="w-20 mx-auto" src={css} alt='html'></img>
          <p className='my-4'>CSS</p>
        </div>
        <div className='shadow-md shadow-[#202022] hover:scale-110 duration-300'>
          <img className="w-20 mx-auto" src={javascript} alt='javascript'></img>
          <p className='my-4'>JAVASCRIPT</p>
        </div>
        <div className='shadow-md shadow-[#202022] hover:scale-110 duration-300'>
          <img className="w-20 mx-auto" src={react} alt='react'></img>
          <p className='my-4'>REACT</p>
        </div>
        <div className='shadow-md shadow-[#202022] hover:scale-110 duration-300'>
          <img className="w-20 mx-auto" src={node} alt='html'></img>
          <p className='my-4'>NODE</p>
        </div>
        <div className='shadow-md shadow-[#202022] hover:scale-110 duration-300'>
          <img className="w-20 mx-auto" src={mongo} alt='mongo'></img>
          <p className='my-4'>MONGO DB</p>
        </div>
        <div className='shadow-md shadow-[#202022] hover:scale-110 duration-300'>
          <img className="w-20 mx-auto" src={tailwind} alt='tailwind'></img>
          <p className='my-4'>TAILWIND CSS</p>
        </div>
        <div className='shadow-md shadow-[#202022] hover:scale-110 duration-300'>
          <img className="w-20 mx-auto" src={github} alt='github'></img>
          <p className='my-4'>GITHUB</p>
        </div>
      </div>
      </div>
      </div>
  )
}

export default Skills
