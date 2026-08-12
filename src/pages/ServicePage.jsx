import { useParams, Link, Navigate } from "react-router-dom";
import * as Icons from "lucide-react";
import { CheckCircle2, ArrowUpRight, ArrowRight } from "lucide-react";
import { services, getServiceBySlug } from "../data/services.js";
import PageHero from "../components/PageHero.jsx";
import WaveDivider from "../components/WaveDivider.jsx";

export default function ServicePage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/" replace />;

  const Icon = Icons[service.icon] || Icons.Sparkles;
  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={
          <>
            <span className="service-hero__icon"><Icon size={30} strokeWidth={1.6} /></span>
            {service.name}
          </>
        }
        description={service.tagline}
      />

      <section className="section service-detail">
        <div className="shell service-detail__grid">
          <div className="service-detail__main">
            <h2>Overview</h2>
            <p className="service-detail__summary">{service.summary}</p>

            <h2>What's included</h2>
            <ul className="service-detail__offerings">
              {service.offerings.map((o) => (
                <li key={o}>
                  <CheckCircle2 size={18} strokeWidth={1.7} />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="service-detail__aside card">
            <h3>Why MSV TechHub</h3>
            <ul className="service-detail__aside-list">
              <li>3+ years delivering {service.name.toLowerCase()} projects</li>
              <li>35+ projects completed across industries</li>
              <li>35+ clients who came back for more work</li>
              <li>Transparent timelines and direct communication</li>
            </ul>
            <Link to="/contact" className="btn btn-primary service-detail__aside-cta">
              Get a Free Consultation <ArrowUpRight size={17} />
            </Link>
          </aside>
        </div>
      </section>

      <WaveDivider />

      <section className="section-tight">
        <div className="shell">
          <div className="section-head">
            <span className="eyebrow">Our Process</span>
            <h2 className="section-head__title">How we deliver {service.name.toLowerCase()}.</h2>
          </div>
          <div className="process-grid">
            {service.process.map((step, i) => (
              <div className="process-grid__item" key={step.title}>
                <span className="process-grid__num font-mono">{String(i + 1).padStart(2, "0")}</span>
                <h4>{step.title}</h4>
                <p>{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section related-services">
        <div className="shell">
          <div className="section-head">
            <span className="eyebrow">Explore More</span>
            <h2 className="section-head__title">Other services you might need.</h2>
          </div>
          <div className="related-services__grid">
            {others.map((s) => {
              const OIcon = Icons[s.icon] || Icons.Sparkles;
              return (
                <Link to={`/services/${s.slug}`} className="related-services__item card" key={s.slug}>
                  <span className="service-card__icon"><OIcon size={20} strokeWidth={1.7} /></span>
                  <h4>{s.name}</h4>
                  <p>{s.tagline}</p>
                  <span className="service-card__link">
                    View service <ArrowRight size={15} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="shell cta-band__inner">
          <div>
            <h2>Let's talk about your {service.name.toLowerCase()} project.</h2>
            <p>Book a free consultation — we'll review your goals and outline next steps at no cost.</p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            Book Free Consultation <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
