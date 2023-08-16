import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#27272a]'>
      {/*Container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-gray-300 '>Hi, my name is</p>
        <h1 className='text-4xl  sm:text-7xl text-white'>Orly Santiago</h1>
        <h2 className='text-2xl sm:text-7xl text-[#8892b0]'>Front-end developer.</h2>
        <p className='text-gray-300 py-4 max-w-100px'> A passionate front-end developer with a deep love for creating amazing and functional web experiences, combining visual aesthetics with seamless functionality to deliver digital products that captivate users.</p>
          <button className='text-lg font-medium text-gray-300 px-10 p-3 my-2 hover:text-[white] group relative flex items-center overflow-hidden'>
            <span className='absolute left-0 w-full h-0 transition-all bg-[#27272a] opacity-100 group-hover:h-full group-hover:top-0 duration-200 ease'>
            </span>
            <span className='absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease'>
              <HiArrowNarrowRight className='ml-2'/>
            </span>
            <span className='relative'>
              View More
            </span>
          </button>
      </div>
    </div>

  )
}

export default Home;
