import React, { Component } from "react";

import "./style/style.css";
import big_logo from "../../img/Logo-chiaro.png";
import small_logo from "../../img/logo.jpeg";
import Campi from "./Campi";
import BurgherMenu from "./BurgherMenu";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <img src={big_logo} className="big-logo" alt="logo" />
          <img src={small_logo} className="small-logo" alt="logo" />
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
