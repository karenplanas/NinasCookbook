import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { Menu } from '../Menu/Menu';
import { SearchBar } from '../SearchBar/SearchBar';
import { useUserContext } from '../../contexts/UserContext';

const NavBar: React.FC = () => {
  const { user } = useUserContext();

  return (
    <div className="nav-bar">
      <Link to="/">
        {' '}
        <h1>Nina's Cookbook</h1>{' '}
      </Link>
      <div className="nav-menu">
        <SearchBar />
        {!user ? (
          <Link to="/login">
            {' '}
            <h4>Login</h4>{' '}
          </Link>
        ) : (
          <p>Welcome {user.firstName}</p>
        )}
        <Menu />
      </div>
    </div>
  );
};

export { NavBar };
