import React from 'react'
import { Link } from 'react-scroll';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#27272a] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='sm:text-right md:pb-8 md:pl-2'>
          <p className='text-4xl md:text-4xl text-white border-b-4 inline'>About</p>
        </div>
        <div className='max-w-[1000px] w-full grid md:grid-cols-2 gap-8 md:px-14 md:pt-1 px-6'>
          <div className='text-lg sm:text-right'>
            <p className='text-[#F2910A] pt-4 text-center md:text-right hover:text-[#d76e08] cursor-pointer'>
              <Link to='work' smooth={true} duration={500} className=''>
                Nice to meet you. Please take a look around.
              </Link>
            </p>
          </div>
          <div className='text-justify'>
            <p className=''>Enthusiastic and passionate about creating exceptional web experiences, I transform designs into captivating and responsive interfaces. I forged solid skills as a Front-End Developer, translating creative concepts into functional prototypes with a balance between functionality and aesthetics. My goal is to exceed expectations, creating attractive, usable and accessible solutions. I constantly seek to learn new technologies and trends in front-end development, facing unique challenges in each project to expand my knowledge and overcome obstacles in an innovative way.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

