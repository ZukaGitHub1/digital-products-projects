import React, { useContext, useState } from 'react'





const Navbar = () => {
    const navlinks = require('./links.json') ;
    const [navbarlinks, setNavbarlinks] = useState(navlinks)

  return (
         <div className='main-navbar'>
        
        
        {navbarlinks.map(index => (
               <li key={index.id}><a href="/main">{index.name}</a></li> 
        ))}
        
        </div>
        
  )
}

export default Navbar
