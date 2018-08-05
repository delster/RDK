import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = props => {
  return (
    <div>
      <nav className="teal darken-2">
        <ul className="container">
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/dashboard">Your Profile</Link>
          </li>
          <li>
            <Link to="/user/1">Sample User</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
