import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar'

const LayoutMain =() =>{
    return(
        <>
       <Navbar/>
       <div className="main-content">
       <Sidebar />
       <Outlet/>
       </div>
     <footer><Footer/></footer>  
        </>
    )
}

export default LayoutMain;