import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FiYoutube} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>NABIL</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>

     <div className="footer__social">

        <a href="https://facebook.com" target='_blank'><FaFacebookF/></a>
        <a href="https://linkedin.com" target='_blank'><FaLinkedinIn/></a>
        <a href="https://youtube.com" target='_blank'><FiYoutube/></a>
       </div>
       <div className="footer__copyright">
         <small>&copy; Nabil's Portal.</small>
       </div>

    </footer>
  )
}

export default Footer