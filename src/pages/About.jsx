import { Link } from "react-router-dom";
import { ArrowUpRight, Target, Eye, HeartHandshake, Layers } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import StatBar from "../components/StatBar.jsx";
import WaveDivider from "../components/WaveDivider.jsx";

const values = [
  {
    icon: Target,
    title: "Outcome-first",
    text: "We measure our work by the results it creates for your business, not just what we ship.",
  },
  {
    icon: Layers,
    title: "Full-stack ownership",
    text: "Development, cloud, marketing and brand under one roof, so nothing falls through the cracks.",
  },
  {
    icon: HeartHandshake,
    title: "Transparent partnership",
    text: "Clear timelines, honest updates, and direct access to the people doing the work.",
  },
  {
    icon: Eye,
    title: "Long-term thinking",
    text: "We build systems that scale with you, not quick fixes that need to be redone in a year.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About MSV TechHub"
        title="A technology partner built to move with you."
        description="MSV TechHub is a technology and digital growth studio helping businesses build, launch and market products that last. For over three years, we've paired engineering discipline with marketing know-how to deliver work our clients trust."
      />

      <StatBar />

      <section className="section about-story">
        <div className="shell about-story__grid">
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="section-head__title">From a small team to a full technology partner.</h2>
            <p className="about-story__text">
              MSV TechHub started with a simple idea: businesses shouldn't have to juggle five different
              vendors to build a website, launch a marketing campaign, and stand up cloud infrastructure.
              Over the past three years, we've grown into a team that handles it all — web and application
              development, IT consulting, cloud computing, AI applications, and the digital marketing and
              brand work that gets your product in front of the right people.
            </p>
            <p className="about-story__text">
              Today, that approach has helped us complete 35+ projects for 35+ clients across a range of
              industries — each one delivered with the same commitment to quality, clear communication and
              measurable outcomes.
            </p>
          </div>
          <div className="about-story__panel card">
            <h3>Our Mission</h3>
            <p>
              To give growing businesses access to senior-level technology and marketing expertise,
              delivered as one accountable, dependable team.
            </p>
            <h3>Our Vision</h3>
            <p>
              To be the technology partner businesses return to for every stage of their growth — from
              first product to full-scale digital transformation.
            </p>
          </div>
        </div>
      </section>

      <WaveDivider />

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <span className="eyebrow">What We Value</span>
            <h2 className="section-head__title">The principles behind every engagement.</h2>
          </div>
          <div className="why-us__grid">
            {values.map(({ icon: Icon, title, text }) => (
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
            <h2>Let's build something worth talking about.</h2>
            <p>Tell us about your project and get a free, no-obligation consultation with our team.</p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            Book Free Consultation <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
