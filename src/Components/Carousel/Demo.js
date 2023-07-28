import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import immagine from "../../img/immagini-gratis.jpg"

export default class Demo extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <div>
            <img src={immagine} alt="immagine"/>
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="assets/2.jpeg" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="assets/3.jpeg" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    );
  }
}
