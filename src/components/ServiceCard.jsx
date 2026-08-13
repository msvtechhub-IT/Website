import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ service, index }) {
  const Icon = Icons[service.icon] || Icons.Sparkles;
  return (
    <Link to={`/services/${service.slug}`} className="service-card card">
      <div className="service-card__top">
        
        <span className="service-card__icon">
          <Icon size={22} strokeWidth={1.7} />
        </span>
      </div>
      <h3 className="service-card__title">{service.name}</h3>
      <p className="service-card__tagline">{service.tagline}</p>
      <span className="service-card__link">
        Explore service <ArrowUpRight size={16} />
      </span>
    </Link>
  );
}
