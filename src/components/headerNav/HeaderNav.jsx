import React from "react";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <div className="header-nav">
      <nav>
        <ul className="header-nav_list navigation_lit">
          <li className="header-nav_item navigation_item">
            <Link className="header-nav_link navigation_link" to="/">
              Home
            </Link>
          </li>
          <li className="header-nav_item navigation_item">
            <Link className="header-nav_link navigation_link" to="teachers">
              Teachers
            </Link>
          </li>
          <li className="header-nav_item navigation_item favorites">
            <Link className="header-nav_link navigation_link" to="favorites">
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderNav;
