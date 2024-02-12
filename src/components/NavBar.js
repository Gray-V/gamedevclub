// src/components/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink exact to="/" activeClassName="active">Home</NavLink>
      <NavLink to="/events" activeClassName="active">Events</NavLink>
      <NavLink to="/gallery" activeClassName="active">Gallery</NavLink>
      <NavLink to="/contacts" activeClassName="active">Contacts</NavLink>
      <NavLink to="/about" activeClassName="active">About</NavLink>
    </nav>
  );
};

export default NavBar;