import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Join Us Into the Future</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={logo} />
          <p>Address</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Link1</p>
          <p>Link2</p>
          <p>Link3</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Link1</p>
          <p>Link2</p>
          <p>Link3</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Link1</p>
          <p>Link2</p>
          <p>Link3</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>@ 2022 All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer