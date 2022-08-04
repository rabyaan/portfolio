import React from 'react';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./testimonial.css"
import adel3d from "../images/adel-3d.png";
import suprovat3d from "../images/suprovat-3d.png";
import munir3d from "../images/munir-3d.png";

export default function Tesimonial (){
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
          backgroundColor: "white",
          mixBlendMode: "difference"
        },
 
    }
  
  
    const textEnter = () => setcursorVariants("text")
    const textLeave = () => setcursorVariants("default")
  
  
  












    return(

        <>
          

    <section className="tes-section">
    <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="sub-heading" style={{color: "#ead108",}}>
        What people are saying
    </h1>
        <div className="tes-card-big">
            <div className="tes-img-div"><img src={adel3d} alt="client" className="tes-img-big"/></div>
            <div className="tes-p-div">
                <p className="tes-p-big">It's going to be tough finding a developer on the level as a Rabyaan. Rabyaan
                    is elite
                    at
                    the work he does and will go above and beyond to satisfy any and all of the customers' needs.
                    Rabyaan is
                    a fantastic communicator and goes to great lengths to ensure he understands exactly what you are
                    looking
                    for. I have never worked with some as prepared and diligent, and as committed and willing as
                    Rabyaan.
                    This was a 5-star service - thank you Rabyaan. Look forward to working with you again in the
                    near
                    future. <span className="tes-name-big">Adel Ahmad</span></p>
            </div>
        </div>
        <section className="tes-section-inner">
            <div className="tes-card">
                <p className="tes-p">I needed some help with the design of a new website. The seller was able to
                    capture
                    the spirit of the brand very quickly and delivered in a short period of time a stunning
                    design
                    that exceeded all my expectations. It was very easy to communicate requirements, ideas and
                    inspirations with the seller, always available to answer questions. I highly recommend it.
                </p>
                <div className="tes-meta">
                    <img className="tes-img" src={suprovat3d}alt="client"/>
                    <span className="tes-name">Suprovat</span>
                </div>
            </div>
            <div className="tes-card">
                <p className="tes-p">Amazing work, he helped me organize everything the way I wanted and was able to
                    solve all of my issues in a very professional manner. Communication was great throughout the
                    process and he accomplish every little thing we needed to accomplish. I highly recommend!
                </p>
                <div className="tes-meta">
                    <img className="tes-img" src={munir3d} alt="client"/>
                    <span className="tes-name">Munir</span>
                </div>
            </div>
            <div className="tes-card">
                <p className="tes-p">I really love to work with Rabyaan. He is one of the best seller I have
                    ever
                    seen. Very happy to work with him. He made my website AdSense approved, custom
                    design, page speed higher, and more. Really thankful for this seller.
                </p>
                <div className="tes-meta">
                    <img className="tes-img" src={suprovat3d}alt="client"/>
                    <span className="tes-name">Suprovat</span>
                </div>
            <motion.div className='cursor-testimonial' variants={variants} animate={cursorVariants}/>
            </div>
        </section>
    </section>





        </>

    )
}