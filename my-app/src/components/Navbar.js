import React, { useState } from 'react';
//import logo from './assets/logo.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#27272a] text-gray-300 text-1xl'>
      <div>
        {/*<img src={logo} alt='logo' style={{width: '30px'}}></img>*/}
      </div>

      <ul className='hidden md:flex'>
        <li> <Link to='home' smooth={true} duration={500}>
          Home
        </Link></li>
        <li> <Link to='about' smooth={true} duration={500}>
          About
        </Link></li>
        <li> <Link to='skills' smooth={true} duration={500}>
          Skills
        </Link></li>
        <li> <Link to='work' smooth={true} duration={500}>
          Work
        </Link></li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/*hamburguer*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*Mobile menu*/}
      <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#27272a] flex flex-col justify-center items-center'}>
        <ul>
          <li className='py-3 text-4xl'>
            <Link onClick={handleClick} to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='py-3 text-4xl'>
          {' '}
            <Link onClick={handleClick} to='about' smooth={true} duration={500}>
              About
            </Link></li>
          <li className='py-3 text-4xl'>
          {' '}
            <Link onClick={handleClick} to='work' smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className='py-3 text-4xl'>
          {' '}
            <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/*Social media*/}
      <div className='hidden lg:flex fixed flex-col top-[35%] letf-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-101px] hover:ml-[-17px]  hover:bg-blue-800 duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300 ' href='https://www.linkedin.com/in/orlysantiago/'>Linkedin <FaLinkedin size={30} /></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-101px] hover:ml-[-17px]  hover:bg-[#333333] duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300 ' href='https://github.com/orlymariela'>Github <FaGithub size={30} /></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-101px] hover:ml-[-17px] hover:bg-[#146739] duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300 ' href='omss1336@gmail.com'>Email <HiOutlineMail size={30} /></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-101px] hover:ml-[-17px] hover:bg-[#565f69] duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300 ' href=''>Resume < BsFillPersonLinesFill size={30} /></a>
          </li>
        </ul>

      </div>
    </div>
  )
}
export default Navbar;
