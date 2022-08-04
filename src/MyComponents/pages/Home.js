import React, {Suspense} from 'react';
import './home.css'
// import Main from '../Main';
// import Solutions from '../Solutions';
// import Expect from '../Expect';
// import About from '../About';
// import Testimonial from '../Testimonial';
// import ContactForm from '../ContactForm';
// import Social from '../Social';

const Main = React.lazy(() => import('../Main'));
const Solutions = React.lazy(() => import('../Solutions'));
const Expect = React.lazy(() => import('../Expect'));
const About = React.lazy(() => import('../About'));
const Testimonial = React.lazy(() => import('../Testimonial'))
const ContactForm = React.lazy(() => import('../ContactForm'))
const Social = React.lazy(() => import('../Social'))



window.onload = function(){ 
  const div = document.querySelector(".App")
  const divAbt = document.querySelector("#abt-section")
  const divSol = document.querySelector("#ser-section")
  const divExpect = document.querySelector(".expect-section")
  const divTesti = document.querySelector(".tes-section")
  const divCF = document.querySelector("#form")
  const divSocial = document.querySelector("#social-section-id")
  let cursorApp = document.querySelector(".cursor")
  let cursorAbt = document.querySelector(".cursor-abt")
  let cursorSol = document.querySelector(".cursor-sol")
  let cursorExpect = document.querySelector(".cursor-expect")
  let cursorTestimonial = document.querySelector(".cursor-testimonial")
  let cursorCF = document.querySelector(".cursor-CF")
  let cursorSocial = document.querySelector(".cursor-social")
  cursorApp.style.display = "none"
  cursorAbt.style.display = "none"
  cursorSol.style.display = "none"
  cursorExpect.style.display = "none"
  cursorTestimonial.style.display = "none"
  cursorCF.style.display = "none"
  cursorSocial.style.display = "none"


  div.onmouseenter = () => {
    cursorApp.style.display = "block"
    cursorAbt.style.display = "none"
    cursorSol.style.display = "none"
    cursorTestimonial.style.display = "none"
    cursorExpect.style.display = "none"
    cursorSocial.style.display = "none"
  }
  div.onmouseleave = () => {
    cursorApp.style.display = "none"
    cursorAbt.style.display = "block"
    cursorSol.style.display = "block"
    cursorExpect.style.display = "block"
  }


  divAbt.onmouseenter = () => {
    cursorSol.style.display = "none"
    cursorExpect.style.display = "none"
    cursorTestimonial.style.display = "none"
    cursorAbt.style.display = "block"
  }
  divAbt.onmouseleave = () => {
    cursorSol.style.display = "block"
    cursorExpect.style.display = "block"
    cursorAbt.style.display = "none"
  }


  divSol.onmouseenter = () => {
    cursorSol.style.display = "block"
    cursorExpect.style.display = "none"
    cursorTestimonial.style.display = "none"
  }
  divSol.onmouseleave = () => {
    cursorSol.style.display = "none"
    cursorExpect.style.display = "block"
  }


  divExpect.onmouseenter = () => {
    cursorExpect.style.display = "block"
    cursorTestimonial.style.display = "none"
  }
  divExpect.onmouseleave = () => {
    cursorExpect.style.display = "none"
    cursorTestimonial.style.display = "block"
  }


  divTesti.onmouseenter = () => {
    cursorTestimonial.style.display = "block"
  }
  divTesti.onmouseleave = () => {
    cursorTestimonial.style.display = "none"
  }

  divCF.onmouseenter = () => {
    cursorCF.style.display = "block"
    cursorSocial.style.display = "none"
  }
  divCF.onmouseleave = () => {
    cursorCF.style.display = "none"
 }

  divSocial.onmouseenter = () => {
    cursorSocial.style.display = "block"
    cursorApp.style.display = "none"
    cursorAbt.style.display = "none"
    cursorSol.style.display = "none"
    cursorExpect.style.display = "none"
    cursorCF.style.display = "none"

  }
  divSocial.onmouseleave = () => {
    cursorSocial.style.display = "none"
 }


};





export default function Home() {

    return(
        <>
      <Suspense fallback={<div>Loading...</div>}>
        <Main />
        <About />
        <Solutions />
        <Expect />
        <Testimonial />
        <ContactForm />
        <Social />
      </Suspense>
        </>
    )

}