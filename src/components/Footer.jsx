import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { LinkedInIcon, InstagramIcon, FacebookIcon, XIcon, YouTubeIcon } from "./SocialIcons.jsx";
import { services } from "../data/services.js";

const socials = [
  { label: "LinkedIn", icon: LinkedInIcon, href: "https://linkedin.com" },
  { label: "Instagram", icon: InstagramIcon, href: "https://instagram.com" },
  { label: "Facebook", icon: FacebookIcon, href: "https://facebook.com" },
  { label: "X (Twitter)", icon: XIcon, href: "https://x.com" },
  { label: "YouTube", icon: YouTubeIcon, href: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__grid">
        <div className="footer__brand">
          <Link to="/" className="navbar__brand">
            <img src="/logo.jpeg" alt="MSV TechHub logo" className="navbar__logo" />
            <span className="navbar__brand-text">
              MSV <span className="text-gradient">TechHub</span>
            </span>
          </Link>
          <p className="footer__tagline">Innovate today, impact tomorrow.</p>
          <ul className="footer__contact">
            <li>
              <Mail size={16} />
              <a href="mailto:msvtechhub@gmail.com">msvtechhub@gmail.com</a>
            </li>
            <li>
              <Phone size={16} />
              <a href="tel:+919652438545">+91 96524 38545</a>
            </li>
            <li>
              <MapPin size={16} />
              <span>Serving clients globally, remote-first</span>
            </li>
          </ul>

          <div className="footer__socials" aria-label="Social media (coming soon)">
            {socials.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-icon"
                aria-label={label}
                title={`${label} — updates coming soon`}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.name}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>More Services</h4>
          <ul>
            {services.slice(5).map((s) => (
              <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.name}</Link></li>
            ))}
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Get Started</h4>
          <p className="footer__cta-text">Have a project in mind? Get a free consultation with our team.</p>
          <Link to="/contact" className="btn btn-primary">Book Free Consultation</Link>
        </div>
      </div>

      <div className="shell footer__bottom">
        <p>© {new Date().getFullYear()} MSV TechHub. All rights reserved.</p>
        <p className="footer__bottom-note">3+ Years of Experience &middot; 35+ Projects &middot; 35+ Happy Clients</p>
      </div>
    </footer>
  );
}
