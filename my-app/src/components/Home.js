import React, { useEffect } from 'react'
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  useEffect(() => {
    console.log(document.getElementById("Home")); // Debería mostrar el elemento si existe
  }, []);

  return (
    <div id='home' className='w-full h-screen bg-[#27272a]'>
      {/*Container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-gray-300 '>Hi, my name is</p>
        <h1 className='text-4xl  sm:text-7xl text-white'>Orly Santiago</h1>
        <h2 className='text-2xl sm:text-7xl text-[#8892b0]'>Front-end developer.</h2>
     
        <p className='text-gray-300 py-4 max-w-100px'> A passionate front-end developer with a deep love for creating amazing and functional web experiences, combining visual aesthetics with seamless functionality to deliver digital products that captivate users.</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#8892b0] hover:border-[#8892b0] hover:text-[#27272a]'>
          <Link to='about' smooth={true} duration={500}>
          View more
        </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
          
      </div>
    </div>

  )
}

export default Home;
