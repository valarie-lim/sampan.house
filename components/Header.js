// app/components/Header.js

"use client"; // Required to use hooks like useState and useEffect

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle sticky header state cleanly based on window scroll height
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header id="main-header" className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <Link href="/" className="logo-container">
        <img src="/img/logo-sampan-house.png" alt="Sampan House Restaurant Kuching Logo" className="logo-img" />
      </Link>
      <nav>
        {/* Adds 'open' class based on menu state */}
        <ul className={`navlist ${isMenuOpen ? "open" : ""}`}>
          <li><Link href="/" className="active-link" onClick={closeMenu}>Home</Link></li>
          <li><Link href="/about" onClick={closeMenu}>About Us</Link></li>    
          <li><Link href="/menu" onClick={closeMenu}>Menu</Link></li>
          <li><Link href="/event" onClick={closeMenu}>Events Space</Link></li>
          <li><Link href="/contact" onClick={closeMenu}>Contact Us</Link></li>
        </ul>
      </nav>

      <div className="social-icons">
        <a href="https://www.facebook.com/profile.php?id=61563174569797" target="_blank" rel="noreferrer"><i className="ri-facebook-box-fill"></i></a>
        <a href="https://www.instagram.com/sampan.house" target="_blank" rel="noreferrer"><i className="ri-instagram-fill"></i></a>
        <a href="https://www.tiktok.com/@sampan.house" target="_blank" rel="noreferrer"><i className="ri-tiktok-fill"></i></a>
      </div>
      
      {/* Dynamic icon class switches from hamburger to 'X' when open */}
      <div 
        className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"}`} 
        id="menu-icon" 
        onClick={toggleMenu}
      ></div>
    </header>
  );
}