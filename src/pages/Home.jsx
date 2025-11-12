// src/pages/Home.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.jpg"; // keep your existing hero image

export default function Home() {
  // fade-in animation setup
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* === HERO SECTION (UNCHANGED) === */}
      <div
  className="absolute inset-0 bg-contain bg-top bg-no-repeat"
  style={{ backgroundImage: `url(${heroImg})`, backgroundColor: "#000" }}
/>
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Text */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <p className="text-sm text-white/80 uppercase mb-4 tracking-widest">
          Connect Create Collaborate
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight max-w-4xl">
          Evoke Films: <br /> Where Stories Unfold
        </h1>

        <p className="mt-6 text-white/90 max-w-2xl">
          We craft cinematic films and campaigns that connect brands to people.
        </p>

        <a
          href="#expertise"
          className="mt-8 inline-block bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded shadow-lg"
        >
          Explore our Expertise
        </a>
      </div>

      {/* === OUR EXPERTISE SECTION === */}
      <section id="expertise" className="bg-white py-20 relative z-10 reveal">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm text-purple-500 uppercase tracking-widest">
              Our Expertise
            </p>
            <h3 className="mt-4 text-4xl md:text-5xl font-extrabold">
              Crafting Visual Masterpieces
            </h3>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive video production services, from concept to
              final delivery. Evoke Films brings your vision to life with
              creativity.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                to="/work"
                className="inline-flex items-center gap-3 text-purple-700 border border-purple-200 rounded-full px-5 py-3 hover:bg-purple-50"
              >
                <span className="h-10 w-10 rounded-full border border-purple-300 flex items-center justify-center text-lg">
                  →
                </span>
                <span>Our Work</span>
              </Link>
            </div>
          </div>

          {/* Two-column grid */}
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            {/* Left */}
            <div className="text-center md:text-left reveal">
              <p className="text-sm text-purple-400 uppercase tracking-widest mb-3">
                Visual Impact
              </p>
              <h4 className="text-2xl font-semibold mb-3">
                Compelling Storytelling Through Film
              </h4>
              <p className="text-gray-600 mb-6">
                We craft narratives that resonate, evoke emotion.
              </p>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-purple-400" />
                  <span>Storytelling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-purple-400" />
                  <span>Creative Vision</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-purple-400" />
                  <span>Innovation</span>
                </li>
              </ul>
            </div>

            {/* Right */}
            <div className="text-center md:text-left reveal">
              <p className="text-sm text-purple-400 uppercase tracking-widest mb-3">
                Seamless Production
              </p>
              <h4 className="text-2xl font-semibold mb-3">
                Efficient Production, Flawless Execution
              </h4>
              <p className="text-gray-600 mb-6">
                We handle every detail, ensuring a smooth process.
              </p>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-purple-400" />
                  <span>Flawless Execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-purple-400" />
                  <span>Creative Vision</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-purple-400" />
                  <span>Innovation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* === LASTING IMPRESSION SECTION === */}
      <section id="lasting" className="py-20 bg-white reveal">
        <div className="max-w-6xl mx-auto px-6">
          <div className="md:max-w-2xl">
            <p className="text-sm text-purple-400 uppercase tracking-widest mb-3">
              Lasting Impression
            </p>

            <h4 className="text-3xl md:text-4xl font-extrabold mb-4">
              Memorable Films, Enduring Impact
            </h4>

            <p className="text-gray-600 mb-8">
              We create films that leave a lasting impression.
            </p>

            <ul className="space-y-6 text-gray-800 mb-10">
              <li className="flex items-start gap-4">
                <span className="mt-1 h-3 w-3 rounded-full bg-purple-400 shrink-0" />
                <span>Enduring Impact</span>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-1 h-3 w-3 rounded-full bg-purple-400 shrink-0" />
                <span>Lasting Impression</span>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-1 h-3 w-3 rounded-full bg-purple-400 shrink-0" />
                <span>Client Success</span>
              </li>
            </ul>

            {/* circular button */}
            <div className="mt-6">
              <Link
                to="/work"
                className="inline-flex items-center justify-center h-14 w-14 rounded-full border-2 border-purple-300 text-purple-600 hover:bg-purple-50 transition"
                aria-label="Go to Work"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M9 6l6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === PLACEHOLDER WORK SECTION (optional) === */}
      <section id="work" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-6">Our Work</h3>
          <p className="text-gray-600">(Add your reels / thumbnails here)</p>
        </div>
      </section>
    </div>
  );
}
