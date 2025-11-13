// src/components/nav.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header className="absolute top-0 left-0 w-full z-30">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Evoke Films</h2>

        <nav className="hidden md:flex gap-8 items-center">
          <NavLink to="/" end className="text-white/90 hover:text-white">Home</NavLink>
          <NavLink to="/about" className="text-white/90 hover:text-white">About</NavLink>
          <NavLink to="/work" className="text-white/90 hover:text-white">Work</NavLink>
          <NavLink to="/services" className="text-white/90 hover:text-white">Services</NavLink>
          <NavLink to="/contact" className="text-white/90 hover:text-white">Contact</NavLink>
        </nav>

        {/* mobile hamburger (simple) */}
        <div className="md:hidden text-white">
          <button aria-label="open menu">☰</button>
        </div>
      </div>
    </header>
  );
}
