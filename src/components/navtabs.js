import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/Home" className={location.pathname === "/Home" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/signup"
          className={location.pathname === "/signup" ? "nav-link active" : "nav-link"}
        >
         Signup
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Verify"
          className={location.pathname === "/verify" ? "nav-link active" : "nav-link"}
        >
          Verify
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Profile"
          className={location.pathname === "/Profile" ? "nav-link active" : "nav-link"}
        >
          Profile
        </Link>
      </li>
      
    </ul>
  );
}

export default NavTabs;
