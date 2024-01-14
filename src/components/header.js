import React from "react";
import { Link } from "react-router-dom";

function Header() {
   return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">

    <ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">NavBar</a>
  </li>
  <li className="nav-item">
    <Link to="/" className="nav-link">Home</Link>
  </li>
  <li className="nav-item">
  <Link to="/add" className="nav-link">Create Post</Link>
  </li>
  
</ul>

</nav>
   )
}

export default Header;