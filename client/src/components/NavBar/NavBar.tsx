import React from "react";
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar: React.FC = () => {
  return (
    <div className="nav-bar">
      <Link to='/'>
        <h1>Nina's Cookbook</h1>
      </Link>
    </div>
  )
} 

export {NavBar}