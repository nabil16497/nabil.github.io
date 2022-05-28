import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/dp.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  
  return (
    <header>
      <div className="container__glass">
      <div className="container header__container">
      <h5> Hi, I'm</h5>
      <h1>M M Nabil</h1>
      <h5 className='text-light'></h5>  
      <CTA/>
      <HeaderSocials />
      <div className='me'>
        <img src={ME} alt="Me" />
      </div>

      <a href='#footer' className='scroll__down'>Scroll Down</a>
      </div>
      </div>
    </header>
  )
}

export default Header