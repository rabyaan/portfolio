import React from 'react';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./about.css"





export default function About (){
    const [mousePosition, setmousePosition] = useState({
        x: 0,
        y: 0
    });
    
    const [cursorVariantsAbt, setcursorVariants] = useState("default")
    
    
    useEffect(() => {
    
    const mouseMoveAbt = (e) => {
    setmousePosition({
        x: e.clientX,
        y: e.clientY
    })
    }
    
    
    
        window.addEventListener("mousemove", mouseMoveAbt);
    
        return () => {
            window.removeEventListener("mousemove", mouseMoveAbt)
        }
    }, []);
    
    
    const variantsAbt = {
        default: {
            x: mousePosition.x - 16, // its half the size of cursor i.e (32/2 = 16)
            y: mousePosition.y - 16,
    
        },
        text: {
          height:90,
          width: 90,
          x: mousePosition.x - 45, // its half the size of cursor i.e (32/2 = 16)
          y: mousePosition.y - 45,
          backgroundColor: "#FFFF00",
          mixBlendMode: "difference"
        },
    }
    
    
    const textEnterAbt = () => setcursorVariants("text")
    const textLeaveAbt = () => setcursorVariants("default")
    
    
    


    return(
<>
<section id="abt-section">
        <div className="abt-bg">
        <motion.div  className='cursor-abt' variants={variantsAbt} animate={cursorVariantsAbt}/>
            <div className="abt-frame">
                <h1 onMouseEnter={textEnterAbt} onMouseLeave={textLeaveAbt} className="abt-heading">ABOUT ME</h1>
                <p className="abt-para">
                    My name is Rabyaan and I am a web developer. I offer a
                    range of services, including front-end development, Wordpress
                    development, UI/UX design, SEO and more. I have been working in
                    the web development industry for many years, and during that
                    time I have gained a wealth of experience and knowledge. My focus
                    is on creating intuitive, user-friendly websites that are easy to
                    use and navigate. I firmly believe in providing excellent customer
                    service, so I am always available to answer any questions or
                    concerns my clients may have. I am confident in my ability to
                    deliver high-quality work that exceeds expectations.
                </p>
            </div>
        </div>
    </section>
</>

    )
}