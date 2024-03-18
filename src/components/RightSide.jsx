import { useState } from "react";
import image from "../assets/illustration-sign-up-desktop.svg";
import imageForMobile from "../assets/illustration-sign-up-mobile.svg";
import { useLayoutEffect } from "react";
export default function RightSide() {
  const [screenWidth, setScreen] = useState(window.innerWidth);

  useLayoutEffect(function () {
    function handleResize() {
      setScreen(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="imgContainer">
      {screenWidth > 600 ? (
        <img src={image} alt="sign-up-desktop" />
      ) : (
        <img src={imageForMobile} alt="sign-up-mobile" />
      )}
    </div>
  );
}
