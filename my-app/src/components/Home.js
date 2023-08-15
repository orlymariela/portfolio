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
        <p className='text-gray-300 py-4 max-w-100px'>A passionate front-end developer with a deep love for creating amazing and functional web experiences, combining visual aesthetics with seamless functionality to deliver digital products that captivate users.</p>
        <div>
          <button className='relative flex items-center justify-center overflow-hidden trasition duration-300 ease-out group border-2 px-6 py-4 my-2 text-gray-300 '>
            <HiArrowNarrowRight className='absolute flex items-center w-full h-full text-white duration-300 -translate-x-full bg-[#27272a] group-hover:translate-x-0 ease' />
            <span className='absolute flex items-center justify-center w-full h-full text-blue-200 transition-all duration-300 transform group-hover:translate-x-0 ease'>View more
            </span> </button>
        </div>
      </div>
    </div>

  )
}

export default Home;
