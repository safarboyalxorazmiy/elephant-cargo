"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";

const NAV_ITEMS: [string, string][] = [
  ["/services", "SERVICES"],
  ["/shippers", "SHIPPERS"],
  ["/carriers", "CARRIERS"],
  ["/about", "ABOUT"],
  ["/contact", "CONTACT"],
];

export default function Navbar() {
  const pathname = usePathname();
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const cls = ["navbar", scrolled && "scrolled", hidden && "hidden"]
    .filter(Boolean)
    .join(" ");

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <nav className={cls}>
      <div className="container navbar-inner">
        <Link href="/" className="logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/74/74208.png"
            alt="Elephant Cargo"
            className="logo-icon"
          />
          <div className="logo-text">
            <span className="logo-name">ELEPHANT CARGO</span>
            <span className="logo-tagline">SUPPLY CHAIN & TRANSPORTATION</span>
          </div>
        </Link>
        <ul className={`nav-links${mobileOpen ? " active" : ""}`}>
          {NAV_ITEMS.map(([href, label]) => (
            <li key={href}>
              <Link href={href} className={isActive(href) ? "active" : undefined}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <a href="tel:+17404759647" className="btn btn-gold nav-cta">
          <i className="fas fa-phone-alt"></i>
          (740) 475-9647
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
