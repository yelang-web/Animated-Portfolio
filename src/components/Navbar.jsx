import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <span className='mx-2 w-10 text-2xl'>Naresh</span>

      </div>
      <div className='flex items-center m-8 justify-center gap-4 text-2xl cursor-pointer'>
        <a href="https://www.linkedin.com/in/naresh9810/" target='_blank'> <FaLinkedin /> </a>
        <a href="https://www.facebook.com/naresh9810" target='_blank'>  <FaFacebook /> </a>
        <a href="https://www.instagram.com/naresh____khatri/">  <FaInstagram /> </a>
        <a href="https://github.com/nareshkhatri98">  <FaGithub /> </a>
      </div>

    </nav>
  )
}

export default Navbar