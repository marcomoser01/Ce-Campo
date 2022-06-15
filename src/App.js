import React from "react";
import "./App.css";
import { default as DeskNavbar } from "./Components/Desktop/Navbar/NavbarComp";
import { default as MobNavbar } from "./Components/Mobile/Navbar/NavbarComp";


const mobileSize = 800;
const timerRisize = 500;

export default function App() {
  let isMobile = IsMobile();
  let result;

  if (isMobile) {
    result = (
      <>
        <MobNavbar />
      </>
    );
  } else {
    result = (
      <>
        <DeskNavbar />
      </>
    );
  }

  return result;
}

function IsMobile() {
  let isMobile = false;
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, timerRisize);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  if (dimensions.width < mobileSize) {
    isMobile = true;
  }

  return isMobile;
}

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}
