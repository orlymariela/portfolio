import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#27272a] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-2'>
            <p className='text-4xl text-white border-b-4 inline'>About</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='text-2xl sm:text-right '>
            <p>Hi!  I'm Orly, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>Enthusiastic and passionate about creating exceptional web experiences, I transform designs into captivating and responsive interfaces. I forged solid skills as a Front-End Developer, translating creative concepts into functional prototypes with a balance between functionality and aesthetics. My goal is to exceed expectations, creating attractive, usable and accessible solutions. I constantly seek to learn new technologies and trends in front-end development, facing unique challenges in each project to expand my knowledge and overcome obstacles in an innovative way.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

