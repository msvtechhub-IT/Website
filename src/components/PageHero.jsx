export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="page-hero">
      <div className="shell">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="page-hero__title">{title}</h1>
        {description && <p className="page-hero__desc">{description}</p>}
      </div>
      <div className="page-hero__glow" aria-hidden="true" />
    </section>
  );
}
