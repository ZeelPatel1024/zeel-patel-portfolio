"use client";

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Home, About, Experience, Projects } from '../sections';

export default function HomePage() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.substring(1);
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
          const yOffset = -80;
          window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <>
      <Home />
      <About />
      <Experience />
      <Projects />
    </>
  );
}
