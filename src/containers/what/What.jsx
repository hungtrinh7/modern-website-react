import React from 'react'
import { Feature } from '../../components'
import './what.css'

const What = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='what'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='Lorem ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        <p>Explore</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title='Lorem ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
        <Feature title='Lorem ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
        <Feature title='Lorem ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
      </div>
    </div>
  )
}

export default What