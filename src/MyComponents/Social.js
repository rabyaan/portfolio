import React from 'react'
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import "./social.css"
import contactImg from "../images/contact-img-2.png"


// window.onscroll = function(ev) {
//     if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
//         document.getElementById('social-section-id').style.zIndex = "0";
//     }
//     else {
//         document.getElementById('social-section-id').style.zIndex = "-1";
//     }
// };



export default function Social() {
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
          backgroundColor: "#ffd42d",
          mixBlendMode: "difference"
        },
        textIcon: {
          height: 18,
          width: 18,
          x: mousePosition.x - 9, // its half the size of cursor i.e (32/2 = 16)
          y: mousePosition.y - 9,
          mixBlendMode: "multiply"
       
        },
    }
    
    
    const textEnter = () => setcursorVariants("text")
    const textEnterIcon = () => setcursorVariants("textIcon")
    const textLeave = () => setcursorVariants("default")
















  return (
   <>
   <section id='social-section-id' className="social-section">
        <section className="social-section-inner">
            <div className="social-div">
                <div className="social-div-inner">
                    <div>
                        <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="social-h1">Lets Connect</h1>
                    </div>

                    <div className="social-icons">
                        <a target="_blank" rel="noopener noreferrer" onMouseEnter={textEnterIcon} onMouseLeave={textLeave} href="https://www.linkedin.com/in/rabyaan-khan-3a9876205/" className="fa fa-linkedin"></a>
                        <a target="_blank" rel="noopener noreferrer" onMouseEnter={textEnterIcon} onMouseLeave={textLeave} href="https://twitter.com/rabyaan_" className="fa fa-twitter"></a>
                        <a target="_blank" rel="noopener noreferrer" onMouseEnter={textEnterIcon} onMouseLeave={textLeave} href="https://www.facebook.com/rabyaan23" className="fa fa-facebook"></a>
                        <a target="_blank" rel="noopener noreferrer" onMouseEnter={textEnterIcon} onMouseLeave={textLeave} href="https://www.instagram.com/rabyaan._x/" className="fa fa-instagram"></a>
                    </div>
                </div>
                <img className="social-img" src={contactImg} alt="social"/>
            </div>
            <motion.div className='cursor-social' variants={variants} animate={cursorVariants}/>
        </section>
    </section>
    
   </>
  )
}
