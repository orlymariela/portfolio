import React from 'react';
import logo from './assets/logo.png';
import {FaBars, FaTimes} from 'react-icons/fa';
export default function navbar() {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#27272a] text-gray-300'>
      <div>
        <img src={logo} alt='logo' style={{width: '30px'}}></img>
      </div>
      
        <ul className='hidden md:flex'>
          <li>About</li>
          <li>Skills</li>
          <li>Works</li>
          <li>Contact</li>
        </ul>
      {/*hamburguer*/}
      <div className='hidden'>
        <FaBars/>
      </div>
      {/*Mobile menu*/}
      <div className='hidden'>
        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Works</li>
          <li>Contact</li>
        </ul>
      </div>

    </div>
  )
}
