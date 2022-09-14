import React, { useState } from 'react'


const Navbar = () => {
    const navlinks = require('./links.json') ;
    const [navbarlinks, setNavbarlinks] = useState(navlinks)
  return (
         <div className='main-navbar'>
        {navbarlinks.map(index => (
               <li><a href="/">{index.name}</a></li> 
        ))}
        </div>
   
  )
}

export default Navbar
