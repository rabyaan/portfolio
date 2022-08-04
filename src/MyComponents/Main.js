import React from 'react'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from '@iconify/react';
import './main.css'
import mainImg from '../images/Saly13.svg'
import {  Link } from "react-router-dom";




export default function Main() {
  const heading = "HEY, I'M RABYAAN";
    const [mousePosition, setmousePosition] = useState({
      x: 0,
      y: 0
  });

  const [cursorVariants, setcursorVariants] = useState("default")


  useEffect(() => {

  const mouseMove = (e) => {
  setmousePosition({
      x: e.clientX,
      y: e.clientY
  })
  }



      window.addEventListener("mousemove", mouseMove);

      return () => {
          window.removeEventListener("mousemove", mouseMove)
      }
  }, []);


  const variants = {
      default: {
          x: mousePosition.x - 15, // its half the size of cursor i.e (32/2 = 16)
          y: mousePosition.y - 15,

      },
      text: {
        height:90,
        width: 90,
        x: mousePosition.x - 45, // its half the size of cursor i.e (32/2 = 16)
        y: mousePosition.y - 45,
        backgroundColor: "#FFFF00",
        mixBlendMode: "difference"
      },
      textLinks: {
        height:50,
        width: 50,
        x: mousePosition.x - 25, // its half the size of cursor i.e (32/2 = 16)
        y: mousePosition.y - 25,
        backgroundColor: "#FFFF00",
        mixBlendMode: "difference"
      },
  }


  const textEnter = () => setcursorVariants("text")
  const textEnterLinks = () => setcursorVariants("textLinks")
  const textLeave = () => setcursorVariants("default")



  


  return (
    <>

      <div className='App'>

              <main>
        <header className='header'>
          <div onMouseEnter={textEnterLinks} onMouseLeave={textLeave} className='header-div header-div-1'>
            <h1  className='logo'  style={{fontFamily: "Fk-Screamer", fontStyle: "italic", color: "white"}}>
            RABYAAN's PORTFOLIO
            </h1>
          </div>
          <div onMouseEnter={textEnterLinks} onMouseLeave={textLeave} className='header-div header-div-2'>
            <ul className='header-links'>
            <a href="https://www.fiverr.com/rabyaankhan" target="_blank" rel="noopener noreferrer" ><Icon className='icon icon-fiverr' icon="jam:fiverr" color="white" /></a>
            <a href="https://www.upwork.com/freelancers/~0190a7f42f4695b2cc" target="_blank" rel="noopener noreferrer" ><Icon className='icon icon-upwork' icon="cib:upwork" color="white" /></a>
            <Link to="/work" ><span>MY WORK</span></Link>
            <a href="/" className='download-btn' ><span >DOWNLOAD CV   <Icon className='icon icon-arrow' icon="akar-icons:arrow-up-right" color="white" /></span></a>
            </ul>
          </div>
        </header>
              
                <h1 className="main-heading">{heading}</h1>
                <img src={mainImg} alt="Me" className="main-img" />
                <h2 onMouseEnter={textEnter} onMouseLeave={textLeave} className="heading">
                  I'm here to provide a <br />
                  solution to your problem.
                </h2>
        <motion.div className='cursor' variants={variants} animate={cursorVariants}/>
              </main>

        </div>


    </>
  )
}
