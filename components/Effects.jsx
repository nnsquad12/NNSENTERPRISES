"use client";

import { useEffect } from "react";

export default function Effects() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Release headline clipping after the intro animation so descenders show fully
    const heroH1 = document.querySelector(".hero h1");
    let t;
    if (heroH1) t = setTimeout(() => heroH1.classList.add("done"), reduced ? 0 : 1500);

    // Scroll reveals
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    // Scroll progress + hero monogram parallax
    const progress = document.getElementById("progress");
    const heroMark = document.getElementById("heroMark");
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - innerHeight;
      if (progress) progress.style.width = (max ? (y / max) * 100 : 0) + "%";
      if (!reduced && heroMark && y < innerHeight * 1.2) {
        heroMark.style.transform =
          "translateY(-50%) rotate(" + y * 0.03 + "deg) scale(" + (1 + y * 0.0004) + ")";
      }
    };
    const handler = () => requestAnimationFrame(onScroll);
    addEventListener("scroll", handler, { passive: true });

    // Magnetic buttons (desktop, motion allowed)
    const cleanups = [];
    if (!reduced && matchMedia("(pointer:fine)").matches) {
      document.querySelectorAll(".magnetic").forEach((btn) => {
        const move = (e) => {
          const r = btn.getBoundingClientRect();
          const dx = e.clientX - (r.left + r.width / 2);
          const dy = e.clientY - (r.top + r.height / 2);
          btn.style.transform = "translate(" + dx * 0.15 + "px," + dy * 0.2 + "px)";
        };
        const leave = () => (btn.style.transform = "");
        btn.addEventListener("mousemove", move);
        btn.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          btn.removeEventListener("mousemove", move);
          btn.removeEventListener("mouseleave", leave);
        });
      });
    }

    return () => {
      clearTimeout(t);
      io.disconnect();
      removeEventListener("scroll", handler);
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return <div id="progress" aria-hidden="true" />;
}
