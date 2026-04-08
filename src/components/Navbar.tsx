"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScroll = useRef(0);

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setScrolled(y > 80);
    if (y > 200) {
      if (y > lastScroll.current + 5) setHidden(true);
      else if (y < lastScroll.current - 5) setHidden(false);
    } else {
      setHidden(false);
    }
    lastScroll.current = y;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const cls = ["navbar", scrolled && "scrolled", hidden && "hidden"]
    .filter(Boolean)
    .join(" ");

  return (
    <nav className={cls}>
      <div className="container navbar-inner">
        <a href="#" className="logo" onClick={(e) => scrollTo(e, "home")}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/74/74208.png"
            alt="Elephant Cargo"
            className="logo-icon"
          />
          <div className="logo-text">
            <span className="logo-name">Elephant Cargo</span>
            <span className="logo-tagline">Freight Brokerage</span>
          </div>
        </a>
        <ul className={`nav-links${mobileOpen ? " active" : ""}`}>
          {[
            ["home", "Home"],
            ["about", "About"],
            ["services", "Services"],
            ["why-us", "Why Us"],
            ["process", "How It Works"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={(e) => scrollTo(e, id)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="btn btn-cta nav-cta"
          onClick={(e) => scrollTo(e, "contact")}
        >
          Get a Quote
        </a>
        <button
          className={`mobile-toggle${mobileOpen ? " active" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
