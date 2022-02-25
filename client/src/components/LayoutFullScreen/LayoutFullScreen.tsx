import React from 'react'
import './LayoutFullScreen.css'
import { Link } from 'react-router-dom'

interface Props {
  image: string
}

const LayoutFullScreen: React.FC<Props> = ({children, image}) => {
  return (
    <div className='LayoutFullScreen-container'>
      <div className='LayoutFullScreen-text'>
        <Link to="/"><h2>Nina's Cookbook</h2></Link>
        <div className='LayoutFullScreen-text-form'>
          {children}
        </div>
      </div>
      <div className='LayoutFullScreen-img'>
        <img src={image} alt="plate"/>
      </div>  
    </div>
  )
}

export { LayoutFullScreen }