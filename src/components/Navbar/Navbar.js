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
      
        <div className="image-links">
          <img
            className="pets"
            alt="dog"
            src="https://images.unsplash.com/photo-1506242395783-cec2bda110e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          />
          <img
            className="pets"
            alt="dcat"
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          />
          <img
            className="pets"
            alt="dog"
            src="https://images.unsplash.com/photo-1590507090789-0e32929a37dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
          />
          <img
            className="pets"
            alt="cat"
            src="https://images.unsplash.com/photo-1585710679266-8a8774703978?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          />
        </div>
     
    </nav>
  );
}
}


export default Navbar;
