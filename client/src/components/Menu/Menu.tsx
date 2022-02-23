import React, { useState } from 'react'
import { MenuIcon } from '../icons/MenuIcon'
import './Menu.css'
import { Link } from "react-router-dom"

const Menu: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className='menu-container'>
      <MenuIcon onClick={onClick} color="black" className="menu-trigger"/>
      <nav className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          <li><Link to="/new-recipe">Add new Recipe</Link></li>
          <li><a href="/my-favorites">My Favorites</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export {Menu}