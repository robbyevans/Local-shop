import React from 'react'
import "./Footer.css"


const Footer = () => {
  return (
    <>

    <div class="footer-wrap">
      <div className='footer-container'>
        <h3>Social Media</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Linkedin</li>
        </ul>
      </div>

      <div className='footer-container'>
      <h3>Quick links</h3>
        <ul>
          <li>Home</li>
          <li>Why Us</li>
          <li>Comments</li>
          <li>Feedback</li>
        </ul>
      </div>

      <div className='footer-container'>
        <h3>Talk to us</h3>
        <ul>
          <li>tel:+254798883985</li>
          <li>email:localshop@gmail.com</li>
          <li>twitter@localshop</li>
          <li>careers</li>
        </ul>
      </div>
    </div>
    <div className='legal'>
      <p>LocalShop © 2022 All Rights Reserved.</p>
        </div>
  </>
  )
}

export default Footer
