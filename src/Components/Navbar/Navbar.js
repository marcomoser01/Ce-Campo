import React, { Component } from "react";

import "./style/style.css";
import logo from "../../img/logo.jpeg";
import Campi from "./Campi";
import BurgherMenu from "./BurgherMenu";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <img src={logo} className="logo" alt="logo" />
          <div className="nome ">C’è Campo</div>
          <div className="campi">
            <Campi name="Chi Siamo" />
            <Campi name="Cosa Facciamo" />
            <Campi name="News" />
            <Campi name="Sostienici" />
            <Campi name="Contatti" />
          </div>
        </div>
        <div className="container-burgher">
          <BurgherMenu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        </div>

      </div>
    );
  }
}
