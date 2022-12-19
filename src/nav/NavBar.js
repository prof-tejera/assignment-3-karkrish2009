import {Link} from 'react-router-dom';
import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>The Workout Machine</h1>
      <div>
        <Link to='/'>About</Link>
        <Link to='/create'>Create Workout</Link>
        <Link to='/execute'>Start Workout</Link>
      </div>
    </nav>
  );
};

export default NavBar;
