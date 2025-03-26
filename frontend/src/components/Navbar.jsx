import { useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {

  return (
    <header className={"navbar-header"}>
      <nav>
        <ul className={"navbar-ul"}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/articles">Articles</Link></li>
          <li><Link to="/videos">Videos</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
