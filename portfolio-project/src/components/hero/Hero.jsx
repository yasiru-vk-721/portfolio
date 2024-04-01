import React from 'react';
import { Cursor } from 'react-simple-typewriter'; // Import Cursor
import { TypeAnimation } from 'react-type-animation' 
import './Hero.scss';
import profilePhoto from '../../assets/profilePhoto.png';
import { BsFacebook } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { GrLinkedinOption } from "react-icons/gr";


import { ImGithub } from "react-icons/im";
import { BsMedium } from "react-icons/bs";

const Hero = () => {
  // const { text } = () => ({
  //   words: ['Developer', 'Designer', 'Writer'],
  //   loop: true, // Set loop to true for continuous looping
  //   typeSpeed: 120,
  //   deleteSpeed: 80,
  // });

  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>Yasiru Katuwandeniya</h2>
          <h1>I'm {' '}
          
          <TypeAnimation 
            sequence={[
              "Frontend Developer",
              1000,
              "Backend  Developer",
              1000,
              "Designer",
              1000,
              "Writer",
              1000
            ]}
            wrapper='span'
            speed={20}
            style={{display: "inline-block", color: 'cyan'}}
            repeat={Infinity}
          ></TypeAnimation>
          </h1>
          <div className='social-images'>
            <a href="https://www.facebook.com/"><BsFacebook/></a>
            <a href="https://www.facebook.com/"><SiInstagram/></a>
            <a href=""><GrLinkedinOption/></a>
            <a href=""><ImGithub/></a>
            <a href="https://medium.com/@viduthyasiru0107"><BsMedium/></a>

            
          </div>
          <div className="buttons">
            <button>See Projects</button>
            <button>Contact Me</button>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src={profilePhoto} alt="" />
      </div>
    </div>
  );
};

export default Hero;
