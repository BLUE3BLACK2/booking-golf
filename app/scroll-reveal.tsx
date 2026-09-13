"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    let previousY = window.scrollY;
    let direction: "up" | "down" = "down";

    const updateDirection = () => {
      const nextY = window.scrollY;
      if (Math.abs(nextY - previousY) > 3) {
        direction = nextY > previousY ? "down" : "up";
        previousY = nextY;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            element.dataset.revealDirection = direction;
            element.classList.add("is-revealed");
          } else {
            element.classList.remove("is-revealed");
            element.dataset.revealDirection =
              entry.boundingClientRect.bottom < 0 ? "up" : "down";
          }
        });
      },
      { threshold: 0.08, rootMargin: "-4% 0px -6%" },
    );

    window.addEventListener("scroll", updateDirection, { passive: true });
    elements.forEach((element) => observer.observe(element));
    root.classList.add("reveal-ready");

    return () => {
      window.removeEventListener("scroll", updateDirection);
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
