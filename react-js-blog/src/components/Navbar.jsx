import React from 'react'

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
      <header className='bg-black'>
        <nav className='px-4 py-4'>
          <a href="/" className='text-xl font-bold text-white'>Design<span className='text-[#85d8ff]'>DK</span></a>
          <ul>
            {
              navItems.map(({path, link}) => <li>
                <NavLink></NavLink>
              </li>)
            }
          </ul>
        </nav>
      </header>
  )
}

export default Navbar