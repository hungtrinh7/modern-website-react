import React from 'react'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from '../../containers/blog/imports'
import './blog.css'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>Our Blog</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} altImg='blog01' date='June 10th 2022' title='Exploring AI' />
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} altImg='blog02' date='June 10th 2022' title='Exploring AI' />
          <Article imgUrl={blog03} altImg='blog03' date='June 10th 2022' title='Exploring AI' />
          <Article imgUrl={blog04} altImg='blog04' date='June 10th 2022' title='Exploring AI' />
          <Article imgUrl={blog05} altImg='blog05' date='June 10th 2022' title='Exploring AI' />
        </div>
      </div>
    </div>
  )
}

export default Blog