import React, { useState, useEffect } from "react";
import "./style.css";

const ImageSlider = ({ slides, intervalDuration }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function goToPrevious() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function goToNext() {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  function goToSlide(slideIndex) {
    setCurrentIndex(slideIndex);
  }

  useEffect(() => {
    // Utilizza setInterval per cambiare automaticamente le immagini ogni 5 secondi
    const intervalId = setInterval(() => {
      goToNext();
    }, intervalDuration); // Cambia ogni 5 secondi (5000 millisecondi)

    // Pulisci l'intervallo quando il componente si smonta per evitare perdite di memoria
    return () => {
      clearInterval(intervalId);
    };
  }); // Aggiungi slides come dipendenza per gestire i cambiamenti delle immagini

  const slideStylesWidthBackground = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  function imageInteraction() {
    return (
      <div>
        <div onClick={goToPrevious} className="left-arrow">
          ❰
        </div>
        <div onClick={goToNext} className="right-arrow">
          ❱
        </div>
        <div className="descrizione-immagine">
          <p>{slides[currentIndex].description}</p>
          <input type="button" className="bottone-descrizione" />
        </div>
      </div>
    );
  };

  return (
    <div className="slider">
      {/* Usa la classe CSS "slider" */}
      <div className="slide" style={slideStylesWidthBackground}></div>
      <div className="dots-container">
        {slides.map((slide, slideIndex) => (
          <div
            className="dot"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>

      {imageInteraction()}
    </div>
  );
};

export default ImageSlider;
