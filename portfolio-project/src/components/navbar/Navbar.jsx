import React from 'react'
import "./Navbar.scss"
import {motion} from "framer-motion"
import Sidebar from '../sidebar/sidebar'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Sidebar/>
        <div className='wrapper'>
            <motion.span initial={{opacity:0, scale:1}} animate={{opacity:1, scale:1}} transition={{duration:1}}>Yasiru.</motion.span>
            <div className='links'>
                <a href="#">Me</a>
                <a href="#">Skills</a>
                <a href="#">Projects</a>
                <a href="#">Contact Me</a>
            </div>

        </div>


    </div>
    
    
  )
}

export default Navbar