import React, { useEffect } from 'react'
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi'
import selfie2 from './assets/Selfie2.jpg'

const Home = () => {
  useEffect(() => {
    console.log(document.getElementById("Home")); // Debería mostrar el elemento si existe
  }, []);

  return (
    <>
    <div id='home' className='w-full h-screen bg-[#27272a] flex justify-center'>
  <div className='max-w-[1000px] ml-10 md:px-8 px-6 pt-10 flex flex-col justify-center h-full '>
    <div className='grid grid-flow-col md:ml-0 mt-2'>
    <div className='col-span-5 gap-3'>
        <div className='max-w-[100px] h-[100px] md:max-w-[200px] md:h-[200px] md:ml-10 md:my-10 mt-14'>
          <img src={selfie2} alt='Selfie' className='w-full h-full rounded-full md:border-4 border-2 border-[#F2910A] shadow-lg'/>       
        </div>
      </div>
      <div className='col-span-7 mt-8'>
        <br/>
        <p className='text-gray-300 text-base sm:text-lg '>&nbsp;Hi, my name is</p>
        <h1 className='md:text-7xl text-3xl text-white pt-2'>Orly Santiago</h1>
        <h3 className='md:text-6xl text-2xl text-[#F2910A] md:pt-1'>Front-end developer</h3>        
      </div>
      
    </div>
    <p className='text-gray-300 py-5 md:py-2 max-w-100px md:ml-10'> A passionate front-end developer with a deep love for creating amazing and functional web experiences, combining visual aesthetics with seamless functionality to deliver digital products that captivate users.</p>
    <div className='md:ml-10'>
      <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#565f69] hover:border-[#565f69] hover:text-[white]'>
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
</>
    
  )
}

export default Home;
