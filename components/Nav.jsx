"use client";

import { useEffect, useRef, useState } from "react";

const LINKS = [
  ["#home", "Home"],
  ["#about", "About"],
  ["#services", "Services"],
  ["#founder", "Founder"],
  ["#contact", "Contact"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      const nav = navRef.current;
      if (nav) {
        if (y > 400 && y > lastY) nav.classList.add("hide");
        else nav.classList.remove("hide");
      }
      lastY = y;
    };
    const handler = () => requestAnimationFrame(onScroll);
    addEventListener("scroll", handler, { passive: true });
    return () => removeEventListener("scroll", handler);
  }, []);

  return (
    <nav id="nav" ref={navRef} aria-label="Main navigation">
      <div className="nav-inner">
        <a href="#home" className="logo">
          <img src="/mark-black.png" alt="NNS monogram" className="logo-mark" />
          NNS<span>&nbsp;ENTERPRISES</span>
        </a>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="navlinks"
          onClick={() => setOpen(!open)}
        >
          MENU
        </button>
        <ul className={`nav-links${open ? " open" : ""}`} id="navlinks">
          {LINKS.map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta">
          Contact Us
        </a>
      </div>
    </nav>
  );
}
