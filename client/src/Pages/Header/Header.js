import React from "react";
import "./Header.css";
import logo from "../../images/evangadi-logo-home.png";

function Header() {
  return (
    <div className="header">
      <nav className="header__nav">
        <div className="header__navLeft">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__navRight">
          <li>Home</li>
          <li>How it Works</li>
          <li>
            <button className="header__navBtn">SIGN IN</button>
          </li>
        </div>
      </nav>
    </div>
  );
}

export default Header;
