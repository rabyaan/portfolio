import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { motion } from "framer-motion";
import "./contactForm.css"
import rocket from "../images/rocket.svg"
import emailjs from '@emailjs/browser';





// window.onscroll = function(ev) {
//     if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
//         document.getElementById('form').style.zIndex = '-2';
//     }
//     else {
//         document.getElementById('form').style.zIndex = '1';
//     }
// };






// function isInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)

//     );
// }

// const box = document.querySelector('form');
// const message = document.querySelector('.con-social-h1');

// document.addEventListener('scroll', function () {
//     const messageText = isInViewport(box) ?
//         'The box is visible in the viewport' :
//         'The box is not visible in the viewport';

//     message.textContent = messageText;

// }, {
//     passive: true
// });





export default function ContactForm() {
const [message, setmessage] = useState("Send message");
const [btnclass, setbtnclass] = useState("con-btn");
const [successMsg, setsuccessMsg] = useState("\u00A0");
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
      backgroundColor: "#FFFFFF",
      mixBlendMode: "difference"
    },
    textInput: {
      height: 14,
      width: 14,
      x: mousePosition.x - 7, // its half the size of cursor i.e (32/2 = 16)
      y: mousePosition.y - 7,
      backgroundColor: "#FFFF00",
    },
    textBtn: {
      height: 36,
      width: 36,
      x: mousePosition.x - 18, // its half the size of cursor i.e (32/2 = 16)
      y: mousePosition.y - 18,
      backgroundColor: "#ead108",
    },
}


const textEnter = () => setcursorVariants("text")
const textEnterInput = () => setcursorVariants("textInput")
const textEnterBtn = () => setcursorVariants("textBtn")
const textLeave = () => setcursorVariants("default")




























        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('gmail', 'template_o1wdj48', form.current, 'iTdPfSgJUicxee17R')
            .then((result) => {
                    console.log(result.text);
                    setmessage("Thank You!");
                    setbtnclass("con-btn-success disabled")
                    setsuccessMsg("I've received your message! You will hear from me shortly")
            }, (error) => {
                setmessage("Sorry");
                console.log(error.text);
            });
            setTimeout(() => {
                setmessage(message);
                setbtnclass(btnclass)
                setsuccessMsg(successMsg)
                e.target.reset();
              }, 4000);
         
    
        };








          


return (
    <>
    <form id='form' ref={form} onSubmit={sendEmail}>
      <section className="con-section">
        <section className="con-section-inner-2">
            <div className="con-social-div">
                <div className="con-social-div-inner">
                    <div>
                        <h1  onMouseEnter={textEnter} onMouseLeave={textLeave} className="con-social-h1">Got a project in mind?</h1>
                    </div>
                    <div>
                        <p className="con-social-p">Share with me :) </p>
                    </div>
                    <img className="con-social-img" src={rocket} alt="social" />
                </div>
            </div>
        </section>

        <section className="con-section-inner">
            <label className="con-label">Your full name
                <input onMouseEnter={textEnterInput} onMouseLeave={textLeave} className="con-input" type="text" name="full_name" required/>
            </label>
            <label className="con-label">Your email address
                <input onMouseEnter={textEnterInput} onMouseLeave={textLeave} className="con-input" type="email" name="email" required/>
            </label>
            <label className="con-label">Your message
                <textarea onMouseEnter={textEnterInput} onMouseLeave={textLeave} className="con-textarea" name="message" maxLength="600" required></textarea>
            </label>
            <div style={{marginTop: "1.4vw"}}>
                <label className="con-label">Your budget (USD)
                    <input onMouseEnter={textEnterInput} onMouseLeave={textLeave} className="con-input" type="number" name="budget" required/>
                </label>
                <label className="con-label">Your timeline
                    <input onMouseEnter={textEnterInput} onMouseLeave={textLeave} className="con-input" type="text" name="timeline" required/>
                </label>
            </div>
            <button onMouseEnter={textEnterBtn} onMouseLeave={textLeave} type="submit" value="Send" className={btnclass}>{message}</button>
            <h3 className='success-msg'>{successMsg}</h3>
        </section>
        <motion.div className='cursor-CF' variants={variants} animate={cursorVariants}/>
        </section>        
    </form>
    </>
  )
}
