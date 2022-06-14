import React from "react";
import { HiMenu } from "react-icons/hi";
import $ from "jquery";
import "./StyleNavbar.scss";
import logo from "../../../Images/logo.jpeg";

export default function NavbarComp() {
  return (
    <>
      <div className="inline-div">
        <div className="inline-div navbar">
          <div className="logo">
            <img src={logo} alt="logo"></img>
          </div>
    <div className="spazio"></div>
          <div className="nav-mobile" id="icon-menu">
          
            <HiMenu />
          </div>
        </div>
      </div>
<p className="bella">Ciao</p>
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
    </>
  );
}

$("#icon-menu").on("click", () => {
  console.log("ciao");
  //funziona, ora devo far si che possa cambiare il valore alla variabile scss
});