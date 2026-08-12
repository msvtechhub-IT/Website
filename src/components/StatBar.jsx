const stats = [
  { value: "3+", label: "Years of Experience" },
  { value: "35+", label: "Projects Delivered" },
  { value: "35+", label: "Happy Clients" },
  { value: "100%", label: "Commitment to Quality" },
];

export default function StatBar() {
  return (
    <div className="stat-bar">
      <div className="shell stat-bar__grid">
        {stats.map((s) => (
          <div className="stat-bar__item" key={s.label}>
            <span className="stat-bar__value font-mono">{s.value}</span>
            <span className="stat-bar__label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
