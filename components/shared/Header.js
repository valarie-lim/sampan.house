"use client";
import { useState, useEffect } from "react";
import "./Header.css";
import Link from "next/link";
import Image from "next/image";
import brandLogo from "../../public/img/logo-sampan-house.png";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // 2. Initialize it

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // 3. Define the active check logic
  const isActive = (path) => pathname === path;

  return (
    <header id="main-header" className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <Link href="/" className="logo-container">
        <Image src={brandLogo} alt="Sampan House Logo" className="logo-img" priority />
      </Link>

      <nav>
        <ul className={`navlist ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link href="/" onClick={closeMenu} className={isActive("/") ? "active-link" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={closeMenu} className={isActive("/about") ? "active-link" : ""}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/menu" onClick={closeMenu} className={isActive("/menu") ? "active-link" : ""}>
              Menu
            </Link>
          </li>
          <li>
            <Link href="/event" onClick={closeMenu} className={isActive("/event") ? "active-link" : ""}>
              Events Space
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu} className={isActive("/contact") ? "active-link" : ""}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      <div className="social-icons">
        <a href="https://www.facebook.com/profile.php?id=61563174569797" target="_blank" rel="noreferrer">
          <i className="ri-facebook-box-fill"></i>
        </a>
        <a href="https://www.instagram.com/sampan.house" target="_blank" rel="noreferrer">
          <i className="ri-instagram-fill"></i>
        </a>
        <a href="https://www.tiktok.com/@sampan.house" target="_blank" rel="noreferrer">
          <i className="ri-tiktok-fill"></i>
        </a>
      </div>

      <div className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"}`} id="menu-icon" onClick={toggleMenu}></div>
    </header>
  );
}
