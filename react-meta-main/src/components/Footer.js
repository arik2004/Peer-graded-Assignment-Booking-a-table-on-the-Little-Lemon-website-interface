import React from 'react'
import Logo from '../assets/Logo.svg'
export const Footer = () => {
  return (
    <footer className='footer'>
      <div style={{backgroundColor:"white", borderRadius:"5px", padding:"0.2rem 0.6rem"}}>
        <img src={Logo} alt="Little lemon logo" width={"200rem"}/>
      </div>
      <nav className="footer-nav">
        <h2>Navigation</h2>
          <ul className="footer-links">
            <li><a className='nav-link' href="/">Home</a></li>
            <li><a className='nav-link' href="/about">About</a></li>
            <li><a className='nav-link' href="/menu">Menu</a></li>
            <li><a className='nav-link' href="/reservations">Reservations</a></li>
            <li><a className='nav-link' href="/order-online">Order</a></li>
            <li><a className='nav-link' href="/login">Login</a></li>
          </ul>

      </nav>

      <div className='footer-contact'>
        <h2>Contact us</h2>
        <address>local 109</address>
        <a href="tel:123-456-7890">123-456-7890</a>
        <a href = "mailto: abc@example.com">Send Email</a>
      </div>

      <div >
        <h2>Social Media</h2>
        <ul className="footer-social-media">
          <li><a href="">Facebook</a></li>
          <li><a href="">Youtube</a></li>
          <li><a href="">tiktok</a></li>
          <li><a href="">Instagram</a></li>
        </ul>
      </div>
    </footer>
  )
}
