import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaXTwitter, FaBars } from "react-icons/fa6";

// the blue color hex- #85d8ff

const Navbar = () => {
    const navItems = [
        {path: "/", link: "Home"},
        {path: "/services", link: "Services"},
        {path: "/about", link: "About"},
        {path: "/blogs", link: "Blogs"},
        {path: "/contact", link: "Contact"},
    ]
  return (
      <header className='bg-black text-white'>
        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
          <a href="/" className='text-xl font-bold text-white'>Design<span className='text-[#85d8ff]'>DK</span></a>
          <ul className='md: flex gap-12 text-lg'>
            {
              navItems.map(({path, link}) => <li className='text-white' key={path}>
                <NavLink to={path}>{link}</NavLink>
              </li>)
            }
          </ul>
          <div className='text-white lg:flex gap-4 items-center hidden' >
            <a href="/" className='hover:text-[#85d8ff] transition-all duration-200 ease-in'><FaFacebook/></a>  
            <a href="/" className='hover:text-[#85d8ff] transition-all duration-200 ease-in'><FaInstagram/></a>  
            <a href="/" className='hover:text-[#85d8ff] transition-all duration-200 ease-in'><FaXTwitter/></a> 
            <button className='bg-[#85d8ff] px-6 py-2 font-medium rounded hover:bg-white hover:text-[#85d8ff] transition-all duration-200 ease-in'>Login</button> 
          </div>

          <div className='md:hidden'>
            <button className='cursor-pointer'><FaBars className='w-5 h-5'/></button>
          </div>
        </nav>
      </header>
  )
}

export default Navbar