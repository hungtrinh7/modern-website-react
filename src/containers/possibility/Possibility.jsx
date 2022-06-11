import React from 'react'
import './possibility.css'

import possibilityImg from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImg} alt='possibility' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Get Started</h4>
        <h1 className='gradient__text'>The possiblities are beyond your imagination</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <h4>Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility