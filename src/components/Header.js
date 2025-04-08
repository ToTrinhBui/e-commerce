import React from 'react'
import Navbar from './Navbar'
import HeadingBar from './HeadingBar'

export const Header = () => {
  return (
    <div className='header'>
      <HeadingBar />
      <Navbar />
    </div>
  )
}

