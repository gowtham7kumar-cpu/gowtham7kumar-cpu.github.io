import { NavLink } from "react-router-dom";
const red = "#d7263d";

const linkBase =
  "relative text-sm px-2 py-1 transition hover:opacity-80";

const linkClass = ({ isActive }) =>
  [
    linkBase,
    isActive ? "text-[#d7263d]" : "text-black",
    // underline indicator
    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full",
    isActive ? "after:bg-[#d7263d]" : "after:bg-transparent",
  ].join(" ");

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-semibold">Evoke Films</NavLink>
        <ul className="hidden md:flex gap-8">
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/work" className={linkClass}>Work</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </ul>
      </nav>
    </header>
  );
}
