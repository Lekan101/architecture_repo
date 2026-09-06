"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Pages", href: "#page" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Shop", href: "#shop" },
  { label: "Blog", href: "#blog" },
  { label: "Landing", href: "#landing" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, closeMenu]);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarInner}>
          <div className={styles.desktopNav}>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <a href="#home" className={styles.logoLink}>
            <Image
              src="/logo.png"
              alt="Architecture Studio"
              width={213}
              height={20}
              priority
            />
          </a>

          <button
            className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`}
        onClick={closeMenu}
      />

      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}>
        <div className={styles.mobileMenuHeader}>
          <a href="#home" onClick={closeMenu}>
            <Image
              src="/logo.png"
              alt="Architecture Studio"
              width={180}
              height={18}
              priority
            />
          </a>
        </div>
        <ul className={styles.mobileNavLinks}>
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              style={{ transitionDelay: isOpen ? `${100 + i * 60}ms` : "0ms" }}
              className={isOpen ? styles.mobileNavItemVisible : ""}
            >
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.mobileMenuFooter}>
          <p>Willie house in Bergen</p>
          <p>Architecture <strong>heritage</strong></p>
        </div>
      </div>
    </>
  );
}
