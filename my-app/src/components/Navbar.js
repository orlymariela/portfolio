import React, { useState } from 'react';
//import logo from './assets/logo.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  console.log('Estado de nav:', nav);
  return (
    <div className='fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#27272a] text-gray-300 text-1xl'>
       <div>
        {/*<img src={logo} alt='logo' style={{width: '30px'}}></img>*/}
      </div>
      <ul className='hidden md:flex '>
        <li  className='cursor-pointer hover:text-[#F2910A]'>
          <Link to='home' smooth={true} duration={500}>
          Home
        </Link></li>
        <li  className='cursor-pointer hover:text-[#F2910A]'>
           <Link to='about' smooth={true} duration={500}>
          About
        </Link></li>
        <li  className='cursor-pointer hover:text-[#F2910A]'>
           <Link to='skills' smooth={true} duration={500}>
          Skills
        </Link></li>
        <li  className='cursor-pointer hover:text-[#F2910A]'>
           <Link to='work' smooth={true} duration={500}>
          Work
        </Link></li>
        <li  className='cursor-pointer hover:text-[#F2910A]'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link></li>
      </ul>
     

      
      {/*hamburguer*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*Mobile menu*/}
      <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#27272a] flex flex-col justify-center items-center'}>
        <ul>
          <li className='py-3 text-4xl cursor-pointer hover:text-[#F2910A]'>
            <Link onClick={handleClick} to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='py-3 text-4xl cursor-pointer hover:text-[#F2910A]'>
            {' '}
            <Link onClick={handleClick} to='about' smooth={true} duration={500}>
              About
            </Link></li>
          <li className='py-3 text-4xl cursor-pointer hover:text-[#F2910A]'>
            {' '}
            <Link onClick={handleClick} to='work' smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className='py-3 text-4xl cursor-pointer hover:text-[#F2910A]'>
            {' '}
            <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>

          <li className='py-3 text-4xl cursor-pointer hover:text-[#F2910A]'>
            {' '}
            <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/*Social media*/}
      <div className='hidden lg:flex fixed flex-col top-[25%] right-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-101px] hover:ml-[-90px]  hover:bg-blue-800 duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300 ' href='https://www.linkedin.com/in/orlysantiago/'><FaLinkedin size={30} />Linkedin</a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-101px] hover:ml-[-90px]  hover:bg-[#333333] duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300 ' href='https://github.com/orlymariela'><FaGithub size={30} />Github</a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-101px] hover:ml-[-90px] hover:bg-[#F2901A] duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300 ' href='mailto:omss1336@gmail.com'><HiOutlineMail size={30} />Email </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-101px] hover:ml-[-90px] hover:bg-[#565f69] duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300 ' href='/'>< BsFillPersonLinesFill size={30} />Resume </a>
          </li>
        </ul>

      </div>
    </div>
  )
}
export default Navbar;
