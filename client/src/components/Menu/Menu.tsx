import React, { useState, useRef, useEffect } from 'react'
import { MenuIcon } from '../icons/MenuIcon'
import './Menu.css'
import { Link } from "react-router-dom"

//https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks

const Menu: React.FC = () => {
  const menuRef = useRef<HTMLElement>(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
    const pageClickEvent = (e: MouseEvent) => {
      if( menuRef.current !== null && !menuRef.current.contains(e.target as HTMLElement)) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    }

  }, [isActive])

  return (
    <div className='menu-container'>
      <MenuIcon onClick={onClick} color="black" className="menu-trigger"/>
      <nav ref={menuRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
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