import React, { Component } from "react";
import "./StyleNavbar.scss";
import logo from "../../../Images/logo.jpeg";


export default class NavbarComp extends Component {
  
  render() {
    return (
      <div className="inline-div">
        <div className="inline-div navbar">
          <div className="logo">
            <img src={logo} alt="logo"></img>
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