import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./reset.css";
import "./Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <nav>
      <div className="navbar">
        <h1 className="logo">Fetch Cart</h1>
        <div className="dropdown">
          <span className="dropbtn">Pet Food</span>

          <ul className="nav-links">
            <li className="nav-items">
              <Link to='/products/food/dog'>Dog </Link>
            </li>
            <li className="nav-items">
            <Link to='/products/food/cat'>Cat </Link>
            </li>
          </ul>
        </div>
        <div className="dropdown2">
          <span className="dropbtn2">Pet Toy</span>

          <ul className="nav-links2">
            <li className="nav-items2">
            <Link to='/products/toy/dog'>Dog </Link>
            </li>

            <li className="nav-items2">
            <Link to='/products/toy/cat'>Cat </Link>
            </li>
          </ul>
        </div>
      </div>
      
       
     
    </nav>
  );
}
}


export default Navbar;
