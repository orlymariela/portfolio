import React, {useState} from 'react';
import logo from './assets/logo.png';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {MiOutlineMail} from 'react-icons/hi';
import {BaFillPersonalLinesFill} from 'react-icons/bs'
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#27272a] text-gray-300 text-1xl'>
      <div>
        {/*<img src={logo} alt='logo' style={{width: '30px'}}></img>*/}
      </div>
      
        <ul className='hidden md:flex'>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      {/*hamburguer*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>
      {/*Mobile menu*/}
      <div className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#27272a] flex flex-col justify-center items-center'}>
        <ul>
          <li className='py-3 text-4xl'>About</li>
          <li className='py-3 text-4xl'>Skills</li>
          <li className='py-3 text-4xl'>Works</li>
          <li className='py-3 text-4xl'>Contact</li>
        </ul>
      </div>
      {/*Social media*/}
      <div className='flex fixed flex-col top-[35%] letf-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  hover:bg-blue-600 duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300 ' href=''>Linkedin <FaLinkedin size={30}/></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300 ' href=''>Github <FaGithub size={30}/></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300 ' href=''>Gmail <FaLinkedin size={30}/></a>
          </li>
        </ul>

      </div>
    </div>
  )
}
export default Navbar;
