import React from "react";
import Logo from "../assets/logo.png";
import {
  avatarSVG,
  searchIconSVG,
  entriesSVG,
  homeSVG,
  arrowDropDownSVG,
  bellSVG,
  opportunitySVG,
} from "../components/NonComponent/svgs";

const Navbar = () => {
  return (
    <div className="navbar--container">
      <div className="logo--container">
        <div className="logo">
          <img src={Logo} alt="" srcset="" />
        </div>
        <div className="logo-text">FE Engineer Test 1</div>
      </div>

      <div className="inner-nav--container">
        <ul className="list-nav">
          <li className="nav-item">
            <span className="icon">{homeSVG()}</span>
            Home
          </li>
          <li className="nav-item">
            <span className="icon">{entriesSVG()}</span>
            Entries
          </li>
          <li className="nav-item">
            <span className="icon">{opportunitySVG()}</span>
            Divisions
          </li>
        </ul>

        <div className="left-items-nav">
          <div className="search-bar">
            <input type="search" name="" id="" className="input" />
            <div className="search-icon">{searchIconSVG()}</div>
          </div>
          <div className="profile--container">
            <div className="notifications">{bellSVG()}</div>
            <div className="avatar">{avatarSVG()}</div>
            <div className="arrow-dropdown">{arrowDropDownSVG()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
