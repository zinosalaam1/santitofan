export const JumiaLogo = () => (
  <svg viewBox="0 0 120 40" className="w-full h-full">
    <rect x="0" y="0" width="120" height="40" fill="#F68B1E" rx="4"/>
    <text x="60" y="26" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="white" textAnchor="middle">
      JUMIA
    </text>
  </svg>
);

export const KongaLogo = () => (
  <svg viewBox="0 0 120 40" className="w-full h-full">
    <rect x="0" y="0" width="120" height="40" fill="#ED017F" rx="4"/>
    <text x="60" y="26" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="white" textAnchor="middle">
      KONGA
    </text>
  </svg>
);

export const JijiLogo = () => (
  <svg viewBox="0 0 120 40" className="w-full h-full">
    <defs>
      <linearGradient id="jijiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#FF6B6B', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#4ECDC4', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="120" height="40" fill="url(#jijiGradient)" rx="4"/>
    <text x="60" y="26" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle">
      jiji.ng
    </text>
  </svg>
);

export const InstagramLogo = () => (
  <svg viewBox="0 0 120 40" className="w-full h-full">
    <defs>
      <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#FED373', stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: '#F15245', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#D92E7F', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="120" height="40" fill="url(#instagramGradient)" rx="4"/>
    <circle cx="20" cy="20" r="8" fill="none" stroke="white" strokeWidth="2"/>
    <circle cx="20" cy="20" r="4" fill="none" stroke="white" strokeWidth="2"/>
    <circle cx="30" cy="12" r="2" fill="white"/>
    <text x="70" y="26" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">
      Instagram
    </text>
  </svg>
);
