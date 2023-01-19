import { useState, useEffect } from "react";

export type Dimensions = {
  height: number;
  width: number;
  isMobile: boolean;
};

function getWindowDimensions(): Dimensions {
  const { innerWidth: width, innerHeight: height } = window;
  const isMobile: boolean = width <= 1000;
  return {
    width,
    height,
    isMobile,
  };
}

export default function useWindowDimensions(): Dimensions {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
}
