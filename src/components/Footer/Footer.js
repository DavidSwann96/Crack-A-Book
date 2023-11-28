import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className='footer-container'>
        <div className='foot-container'>
            <div className='footer-forms'>
                <div className='footer-link'>
                    <a href='#' className='nav-links'>About Us</a>
                </div>
                <div className='footer-link'>
                    <a href='#' className='nav-links'>Contact Us</a>
                </div>
            </div>
            <div className='footer-nav'>
                <div className='footer-link'>
                    <a href='/' className='nav-links'>Home</a>
                </div>
                <div className='footer-link'>
                    <a href='/books' className='nav-links'>Books</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
