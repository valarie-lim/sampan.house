// components/ScrollToTop.js
"use client";
import "./ScrollToTop.css";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false); // Fix: setVisible changed to setIsVisible

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button onClick={scrollToTop} id="scrolltoTopBtn" title="Go to top">
      <i className="bx bx-chevron-up"></i>
    </button>
  );
}
