import React from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import $ from "jquery";
import "./StyleNavbarMobile.scss";
import logo from "../../../Images/logo.jpeg";

export default function NavbarComp() {
  return (
    <>
      <div className="inline-div-mobile">
        <div className="inline-div-mobile navbar-mobile">
          <div className="logo-mobile">
            <img src={logo} alt="logo"></img>
          </div>
          <div className="spazio"></div>
          <div
            className="nav-mobile"
            onClick={() => menuIconClick("#campi-navbar-visibili")}
          >
            <HiMenu id="hi-menu" />
            <IoClose id="io-close"/>
          </div>
        </div>
      </div>
      
      <div className="inline-div-mobile" id="campi-navbar-visibili">
        
        <div className="campi-navbar-mobile">
          <div className="testo-campi-mobile" id="chi-siamo-mobile">
            <p>Chi siamo</p>
          </div>
          <div className="testo-campi-mobile" id="cosa-facciamo-mobile">
            <p>Cosa Facciamo</p>
          </div>
          <div className="testo-campi-mobile" id="news-mobile">
            <p>News</p>
          </div>
          <div className="testo-campi-mobile" id="coro-mania-mobile">
            <p>Coro*Mania</p>
          </div>
        </div>

      </div>
    </>
  );
}

function menuIconClick(classe) {
  let display = $(classe).css("display");
  if (display === "none") {
    $(classe).css({ display: "flex" });
    $('#hi-menu').css({ display: "none"});
    $('#io-close').css({ display: "flex"});
  } else {
    $(classe).css({ display: "none" });
    $('#io-close').css({ display: "none"});
    $('#hi-menu').css({ display: "flex"});
  }
}
