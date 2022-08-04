import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./solutions.css"
import uiImg from "../images/ui-img.svg"
import frontImg from "../images/front-img.svg"
import marketImg from "../images/market-img.svg"








export default function Solutions(){    
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
          backgroundColor: "#FFFFFF",
          mixBlendMode: "difference"
        },
        textCards: {
            height:50,
            width: 50,
            x: mousePosition.x - 25, // its half the size of cursor i.e (32/2 = 16)
            y: mousePosition.y - 25,
            backgroundColor: "#ffd42d",
                     
          },
    }
  
  
    const textEnter = () => setcursorVariants("text")
    const textEnterCard = () => setcursorVariants("textCards")

    const textLeave = () => setcursorVariants("default")
  
  
  







    return(

        <>
            <section id="ser-section">
                <div>

            <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="sub-heading" style={{paddingTop: "3vw"}}>
                I offer solutions for
            </h1>
                </div>
                <div className="ser-card-section-new">

                <div onMouseEnter={textEnterCard} onMouseLeave={textLeave} className="ser-card">
                    <h2  className="ser-heading" style={{marginLeft: "-10px"}}>
                        UI/UX<br/>DESIGN
                    </h2>
                    <img className="ser-img" src={uiImg} alt="UI/UX" style={{marginLeft: "-10px"}} />
                </div>
                <div onMouseEnter={textEnterCard} onMouseLeave={textLeave} className="ser-card">
                    <h2 className="ser-heading">FRONTEND<br />DEVELOPMENT</h2>
                    <img className="ser-img" src={frontImg} alt="FRONTEND" />
                </div>
                <div onMouseEnter={textEnterCard} onMouseLeave={textLeave} className="ser-card">
                    <h2  className="ser-heading">WEBSITE<br />MARKETING</h2>
                    <img className="ser-img" src={marketImg} alt="MARKETING" />
                </div>
                </div>
                
                    <motion.div className='cursor-sol' variants={variants} animate={cursorVariants}/>
            </section>
        </>
    )
}