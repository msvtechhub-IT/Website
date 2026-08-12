export default function WaveDivider({ flip = false }) {
  return (
    <div className={`wave-divider ${flip ? "wave-divider--flip" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="wave-divider__svg">
        <defs>
          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e4fce" />
            <stop offset="30%" stopColor="#2f6fed" />
            <stop offset="60%" stopColor="#4f8ff0" />
            <stop offset="85%" stopColor="#7bc4f0" />
            <stop offset="100%" stopColor="#bfe6f7" />
          </linearGradient>
        </defs>
        <path
          className="wave-divider__path"
          d="M0,30 C120,-10 220,70 340,30 C460,-10 560,70 680,30 C800,-10 900,70 1020,30 C1100,4 1160,4 1200,30"
          fill="none"
          stroke="url(#waveGrad)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
