"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    // Defer observation until after the new route has committed its DOM.
    // Without this, Link-based client-side navigation leaves the new page's
    // `.reveal` elements unobserved and they stay invisible forever.
    const rafId = requestAnimationFrame(() => {
      const reveals = document.querySelectorAll<HTMLElement>(
        ".reveal:not(.visible)"
      );
      reveals.forEach((el) => observer.observe(el));
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
