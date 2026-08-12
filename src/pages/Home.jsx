import { Link } from "react-router-dom";
import { ArrowUpRight, ShieldCheck, Rocket, Users2, Award } from "lucide-react";
import { services } from "../data/services.js";
import ServiceCard from "../components/ServiceCard.jsx";
import StatBar from "../components/StatBar.jsx";
import WaveDivider from "../components/WaveDivider.jsx";

const whyUs = [
  {
    icon: Rocket,
    title: "Full-Stack Expertise",
    text: "From code to campaigns, one team covers your development and growth needs end-to-end.",
  },
  {
    icon: ShieldCheck,
    title: "Proven Delivery",
    text: "35+ projects shipped on time, with quality checks built into every stage of the build.",
  },
  {
    icon: Users2,
    title: "35+ Happy Clients",
    text: "Long-term partnerships built on transparent communication and measurable results.",
  },
  {
    icon: Award,
    title: "3+ Years in the Field",
    text: "Deep, hands-on experience across web, cloud, AI and digital marketing engagements.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__glow" aria-hidden="true" />
        <div className="shell hero__grid">
          <div className="hero__copy">
            <span className="eyebrow">Web &middot; Cloud &middot; AI &middot; Marketing</span>
            <h1 className="hero__title">
              Innovate today,
              <br />
              <span className="text-gradient">impact tomorrow.</span>
            </h1>
            <p className="hero__desc">
              MSV TechHub partners with ambitious teams to design, build and market technology that
              works — from web platforms and cloud infrastructure to AI applications and full-funnel
              digital campaigns.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn-primary">
                Get a Free Consultation <ArrowUpRight size={17} />
              </Link>
              <Link to="/about" className="btn btn-ghost">About MSV TechHub</Link>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <img src="/logo.jpeg" alt="" className="hero__logo-img" />
          </div>
        </div>
      </section>

      <StatBar />

      <section className="section" id="services">
        <div className="shell">
          <div className="section-head">
            <span className="eyebrow">What We Do</span>
            <h2 className="section-head__title">
              Eight services, <span className="text-gradient">one accountable team.</span>
            </h2>
            <p className="section-head__desc">
              Every engagement is scoped, built and measured by the same team — so nothing
              gets lost between strategy, design, engineering and marketing.
            </p>
          </div>

          <div className="service-grid">
            {services.map((s, i) => (
              <ServiceCard service={s} index={i} key={s.slug} />
            ))}
          </div>
        </div>
      </section>

      <WaveDivider />

      <section className="section why-us">
        <div className="shell">
          <div className="section-head">
            <span className="eyebrow">Why MSV TechHub</span>
            <h2 className="section-head__title">Built for teams who need it done right.</h2>
          </div>
          <div className="why-us__grid">
            {whyUs.map(({ icon: Icon, title, text }) => (
              <div className="why-us__item" key={title}>
                <span className="why-us__icon"><Icon size={20} strokeWidth={1.7} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="shell cta-band__inner">
          <div>
            <h2>Ready to start your next project?</h2>
            <p>Book a free consultation and get a clear plan for your website, app or campaign — no obligation.</p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            Book Free Consultation <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
