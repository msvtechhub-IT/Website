import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { services } from "../data/services.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="shell navbar__inner">
        <Link to="/" className="navbar__brand" aria-label="MSV TechHub home">
          <img src="/logo.jpeg" alt="MSV TechHub logo" className="navbar__logo" />
          <span className="navbar__brand-text">
            MSV <span className="text-gradient">TechHub</span>
          </span>
        </Link>

        <nav className="navbar__links" aria-label="Primary">
          <NavLink to="/" end className="navbar__link">Home</NavLink>

          <div
            className="navbar__dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="navbar__link navbar__link--btn"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
            >
              Services <ChevronDown size={14} />
            </button>
            {servicesOpen && (
              <div className="navbar__menu">
                {services.map((s) => (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="navbar__menu-item">
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/about" className="navbar__link">About Us</NavLink>
          <NavLink to="/contact" className="navbar__link">Contact</NavLink>
        </nav>

        <div className="navbar__cta">
          <Link to="/contact" className="btn btn-primary navbar__cta-btn">Free Consultation</Link>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="navbar__mobile">
          <NavLink to="/" end className="navbar__mobile-link">Home</NavLink>
          <p className="navbar__mobile-heading">Services</p>
          {services.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="navbar__mobile-link navbar__mobile-link--sub">
              {s.name}
            </Link>
          ))}
          <NavLink to="/about" className="navbar__mobile-link">About Us</NavLink>
          <NavLink to="/contact" className="navbar__mobile-link">Contact</NavLink>
          <Link to="/contact" className="btn btn-primary navbar__mobile-cta">Free Consultation</Link>
        </div>
      )}
    </header>
  );
}
