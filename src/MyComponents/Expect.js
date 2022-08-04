import React from 'react';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./expect.css"
import agency from '../images/agency.png'
import blog from '../images/blog.png'
import personal from '../images/personal.png'
import ecomm from '../images/ecomm.png'




export default function Expect() {
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
            x: mousePosition.x - 16, // its half the size of cursor i.e (32/2 = 16)
            y: mousePosition.y - 16,
  
        },
        text: {
          height:90,
          width: 90,
          x: mousePosition.x - 45, // its half the size of cursor i.e (32/2 = 16)
          y: mousePosition.y - 45,
          backgroundColor: "#ffd42d",
          mixBlendMode: "difference"
        },
        textLinks: {
          height:50,
          width: 50,
          x: mousePosition.x - 25, // its half the size of cursor i.e (32/2 = 16)
          y: mousePosition.y - 25,
          backgroundColor: "#ffd42d",
          mixBlendMode: "difference"
        },
    }
  
  
    const textEnter = () => setcursorVariants("text")
    const textEnterLinks = () => setcursorVariants("textLinks")
    const textLeave = () => setcursorVariants("default")
  










    return (
        <>
            <section className="expect-section">
                <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="sub-heading" style={{color: "#1c1c1a", marginTop: "0vw", paddingBottom: "5vw", background: "none"}}>
                    What you can expect
                </h1>
                <section className="expect-section-inner">
                    <div className="expect-card-grid-1">
                        <div className="expect-card expect-card-1">
                            <h2 className="expect-heading">
                                BUSINESS/AGENCY WEBSITE
                            </h2>
                            <img className="expect-img" src={agency} alt="agency"/>
                        </div>
                    </div>
                    <div className="expect-card-grid-2">
                        <div className="expect-card expect-card-2">
                            <h2 className="expect-heading">
                                BLOG
                            </h2>
                            <img className="expect-img" src={blog} alt="blog"/>
                        </div>
                        <div className="expect-card expect-card-3">
                            <h2 className="expect-heading">
                                PERSONAL WEBSITE
                            </h2>
                            <img className="expect-img" src={personal} alt="personal"/>
                        </div>
                    </div>
                </section>
                <div className="expect-card-grid-3">
                    <div className="expect-card expect-card-4">
                        <h2 className="expect-heading">
                            E-COMMERCE WEBSITE
                        </h2>
                        <img className="expect-img" src={ecomm} alt="ecommerce"/>
                    </div>
                </div>
                <span onMouseEnter={textEnterLinks} onMouseLeave={textLeave} className="expect-span">AND MORE...</span>
                <motion.div className='cursor-expect' variants={variants} animate={cursorVariants}/>
            </section>
        </>
    )
}