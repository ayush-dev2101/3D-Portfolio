import { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { TextHoverEffect } from "./ui/text-hover-effect";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 15);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
        <div className="inner">
          <a href="#hero" className="h-10 w-40">
            <TextHoverEffect text="AYUSH" />
          </a>
          <nav className="desktop">
            <ul>
              {navLinks.map(({ link, name }) => (
                <li key={name} className="group">
                  <a href={link}>
                    <span>{name}</span>
                    <span className="underline" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a href="#contact" className="contact-btn group">
            <div className="inner">
              <span>Contact Me</span>
            </div>
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
