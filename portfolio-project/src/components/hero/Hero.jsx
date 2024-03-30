import React from 'react'
import './Hero.scss'
import profilePhoto from '../../assets/profilePhoto.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='imageContainer'>
            <img src={profilePhoto} alt="" />
        </div>
    </div>
  )
}

export default Hero