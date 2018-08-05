import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/user/1">User 1</Link>
          </li>
          <li>
            <Link to="/match/1">Push Match 1</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
