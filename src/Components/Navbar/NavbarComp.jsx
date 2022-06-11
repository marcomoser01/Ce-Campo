import React, { Component } from "react";
import "./StyleNavbar.scss";
import "./EventListener.js";
import logo from "../../Images/logo.jpeg";


export default class NavbarComp extends Component {
  
  render() {
    return (
      <div className="inline-div">
        <div className="inline-div navbar">
          <div className="logo">
            <img src={logo} alt="logo"></img>
          </div>

          <div className="nav-mobile">
            <a id="nav-toggle" href="#!">
              <span></span>
            </a>
          </div>

          <div className="campi-navbar">
            <div className="inline-div" id="campi">
              <div className="testo-campi" id="chi-siamo">
                <p>Chi siamo</p>
              </div>
              <div className="testo-campi" id="cosa-facciamo">
                <p>Cosa Facciamo</p>
              </div>
              <div className="testo-campi" id="news">
                <p>News</p>
              </div>
              <div className="testo-campi" id="coro-mania">
                <p>Coro*Mania</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

/*
  <br /> <br />
        <br /> <br />
        <br /> <br />
        <br /> <br />
        <section className="navigation">
          <div className="nav-container">
            <div className="brand">
              <img src={logo} alt="logo"></img>
            </div>

            <nav>
              <div className="nav-mobile">
                <p id="nav-toggle">
                  <span></span>
                </p>
              </div>
              <ul className="nav-list">
                <li>
                  <p>Home</p>
                </li>
                <li>
                  <p>About</p>
                </li>
                <li>
                  <p>Services</p>
                  <ul className="nav-dropdown">
                    <li>
                      <p>Web Design</p>
                    </li>
                    <li>
                      <p>Web Development</p>
                    </li>
                    <li>
                      <p>Graphic Design</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Pricing</p>
                </li>
                <li>
                  <p>Portfolio</p>
                  <ul className="nav-dropdown">
                    <li>
                      <p>Web Design</p>
                    </li>
                    <li>
                      <p>Web Development</p>
                    </li>
                    <li>
                      <p>Graphic Design</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Contact</p>
                </li>
              </ul>
            </nav>
          </div>
        </section>
*/
