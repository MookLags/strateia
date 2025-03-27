import { useState } from 'react';
import { Link, useLocation } from 'react-router';

const Navbar = () => {
  let location = useLocation();

  return (
    <header className={"navbar-header"}>
      <nav>
        <ul className={"navbar-ul"}>
          <li><Link className={location.pathname === "/" ? "currLoc" : ""} to="/">Home</Link></li>
          <li><Link className={location.pathname === "/about" ? "currLoc" : ""} to="/about">About</Link></li>
          <li><Link className={location.pathname === "/articles" ? "currLoc" : ""} to="/articles">Articles</Link></li>
          <li><Link className={location.pathname === "/videos" ? "currLoc" : ""} to="/videos">Videos</Link></li>
          <li><Link className={location.pathname === "/contact" ? "currLoc" : ""} to="/contact">Contact</Link></li>
          <li><Link className={location.pathname === "/admin" ? "currLoc" : ""} to="/admin">Admin</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
