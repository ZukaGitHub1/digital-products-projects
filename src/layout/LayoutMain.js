import React from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar'

const LayoutMain =({children}) =>{
    return(
        <>
       <Navbar/>
       <div className="main-content">
       <Sidebar />
       {children}
       </div>
     <footer><Footer/></footer>  
        </>
    )
}

export default LayoutMain;