import React from "react";
import './NavBar.css'
import { Link } from 'react-router-dom'
import { Menu } from "../Menu/Menu";
import { SearchBar } from "../SearchBar/SearchBar";


const NavBar: React.FC = () => {

  return (
    <div className="nav-bar">
      <Link to='/'> <h1>Nina's Cookbook</h1> </Link>
      <div className="nav-menu">
        <SearchBar />
        <Link to="/login"> <h4>Login</h4> </Link>
        <Menu />
      </div>
    </div>
  )
} 

export {NavBar}