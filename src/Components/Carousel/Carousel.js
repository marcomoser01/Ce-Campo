import ImageSlider from "./ImageSlider";
import "./style.css";

const Carousel = () => {
  const slides = [
    { url: "http://localhost:3000/test/img2.jpg", title: "Img2", description: "Descrizione immagine 2 dfdsfsdfsdfdsfsdfsdfsdfdfdsfsdfsdfdsfsdfsdfgfgdfgdfgdfgdfgdfg" },
    { url: "http://localhost:3000/test/img1.jpg", title: "Img1", description: "Descrizione immagine 1" },
    { url: "http://localhost:3000/test/img3.jpg", title: "Img3", description: "Descrizione immagine 3" },
  ];

  return (
    <div className="container-carousel">
      <ImageSlider slides={slides} intervalDuration={5000} />
    </div>
  );
};

export default Carousel;
