import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav"; // match exact file name (case-sensitive)
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}
