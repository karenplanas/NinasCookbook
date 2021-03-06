import React, { useState, useRef, useEffect } from 'react';
import './Menu.css';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';
import { Burguer } from '../icons/Burguer';

//https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks

const Menu: React.FC = () => {
  const menuRef = useRef<HTMLElement>(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  const { logout, user } = useUserContext();

  useEffect(() => {
    const pageClickEvent = (e: MouseEvent) => {
      if ( menuRef.current !== null && !menuRef.current.contains(e.target as HTMLElement)) 
      {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isActive]);

  const navigate = useNavigate();

  return (
    <div className="menu-container">
      <Burguer onClick={onClick} className="menu-trigger"/>
      <nav
        onClick={onClick}
        ref={menuRef}
        className={`menu ${isActive ? 'active' : 'inactive'}`}
      >
        <ul>
          <Link to={'/new-recipe'}>
            <li>Add new Recipe</li>
          </Link>
          <Link to="/user/recipes">
            <li>My Recipes</li>
          </Link>
          <Link to="/user/recipes">
            <li>My Profile</li>
          </Link>
          {
            user && 
              <li 
                className="clickable" 
                onClick={() => {
                  logout();
                  navigate('/');
                }}
              >
                Logout
              </li>
          }
        </ul>
      </nav>
    </div>
  );
};

export { Menu };
