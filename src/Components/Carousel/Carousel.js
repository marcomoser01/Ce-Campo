import ImageSlider from "./ImageSlider";
import "./style.css";

const Carousel = () => {
  const slides = [
    { url: "http://localhost:3000/test/img1.jpg", title: "Img1" },
    { url: "http://localhost:3000/test/img2.jpg", title: "Img2" },
    { url: "http://localhost:3000/test/img3.jpg", title: "Img3" },
  ];

  return (
    <div className="container-carousel">
      <ImageSlider slides={slides} />
    </div>
  );
};

export default Carousel;
