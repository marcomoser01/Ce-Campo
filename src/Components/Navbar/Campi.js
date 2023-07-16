import React, { Component } from "react";

import "./style/style.css";

export default class Campi extends Component {
  render() {
    return (
      <div className="campo-container">
        <div className="campo">
          {this.props.name}
        </div>
      </div>
    );
  }
}
