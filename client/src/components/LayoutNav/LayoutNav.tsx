import React from 'react'
import { NavBar } from '../NavBar/NavBar'
import './LayoutNav.css'

const LayoutNav : React.FC = ({children}) => {
  return (
    <>    
      <header className="App-header">
        <NavBar />
      </header>
      <div className='container'>
        {children}
      </div>
    </>
  )
}

export { LayoutNav }