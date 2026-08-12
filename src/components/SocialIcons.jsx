const baseProps = ({ size = 17, ...rest }) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  ...rest,
});

export function LinkedInIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="8" y1="10" x2="8" y2="17" />
      <circle cx="8" cy="6.7" r="0.6" fill="currentColor" stroke="none" />
      <path d="M12 17v-4.2c0-1.6 1-2.6 2.4-2.6s2.1 1 2.1 2.6V17" />
      <line x1="12" y1="10" x2="12" y2="17" />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <path d="M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h2.6l.4-4H13V7a1 1 0 0 1 1-1h2z" />
    </svg>
  );
}

export function XIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <line x1="4" y1="4" x2="20" y2="20" />
      <line x1="20" y1="4" x2="4" y2="20" />
    </svg>
  );
}

export function YouTubeIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" />
      <path d="M11 9.7v4.6l4-2.3z" fill="currentColor" stroke="none" />
    </svg>
  );
}
