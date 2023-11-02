import React, { Component } from "react";

import "./Header.css"

import Navbar from "../Navbar/Navbar.js";
import Carousel from "../Carousel/Carousel.js";

export default class Header extends Component{
  render() {
    return (
      <>
        <div className="carousel">
          <Carousel />
        </div>
        <div className="navbar">
          <Navbar />
        </div>
      </>
    );
  }
}
