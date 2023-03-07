import React from 'react'
import Logo from '../assets/MG.png'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] px-4 flex justify-between items-center bg-black text-gray-300">
      <div>
        <img src={Logo} alt="Logo image" style={{ width: '120px' }} />
      </div>
      {/* Menu */}
      <div>
        <ul className="flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* Hamburger */}
      <div className="hidden">
        <FaBars />
      </div>
      {/* Mobile Menu */}
      <ul className="hidden">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
      {/* Social icons */}
      <div className="hidden"></div>
    </div>
  )
}

export default Navbar
