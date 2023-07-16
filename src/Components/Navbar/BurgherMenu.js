import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import "./style/Burgher_Menu.css";

export default class BurgherMenu extends Component {
  render() {
    return (
      <Menu width={'30%'}>
        <a className="menu-item" href="/">
          Home
        </a>
        <a className="menu-item" href="/salads">
          Chi Siamo
        </a>
        <a className="menu-item" href="/pizzas">
          Cosa Facciamo
        </a>
        <a className="menu-item" href="/desserts">
          News
        </a>
        <a className="menu-item" href="/desserts">
          Sostienici
        </a>
        <a className="menu-item" href="/desserts">
          Contatti
        </a>
      </Menu>
    );
  }
}
