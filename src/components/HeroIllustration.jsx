export default function HeroIllustration() {
  return (
    <svg viewBox="0 0 480 480" className="hero-illo" role="img" aria-label="Illustration of design tools floating over a soft color wash">
      <defs>
        <radialGradient id="blobPink" cx="35%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#FBD8E2" />
          <stop offset="100%" stopColor="#FBD8E2" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="blobYellow" cx="70%" cy="65%" r="60%">
          <stop offset="0%" stopColor="#FEEBBE" />
          <stop offset="100%" stopColor="#FEEBBE" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="blobTeal" cx="55%" cy="20%" r="45%">
          <stop offset="0%" stopColor="#D3F1EF" />
          <stop offset="100%" stopColor="#D3F1EF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* soft watercolor wash */}
      <circle cx="200" cy="230" r="200" fill="url(#blobPink)" />
      <circle cx="290" cy="290" r="180" fill="url(#blobYellow)" />
      <circle cx="260" cy="160" r="140" fill="url(#blobTeal)" />

      {/* confetti bits */}
      <rect x="60" y="90" width="14" height="14" rx="3" fill="#F7B6C8" transform="rotate(18 67 97)" />
      <rect x="400" y="340" width="16" height="16" rx="3" fill="#9FE0DA" transform="rotate(-12 408 348)" />
      <circle cx="430" cy="140" r="6" fill="#FBD8E2" />
      <circle cx="55" cy="350" r="7" fill="#FEEBBE" />
      <path d="M75 300 l10 10 M75 310 l10 -10" stroke="#F5A8BF" strokeWidth="3" strokeLinecap="round" />
      <path d="M420 250 l10 10 M420 260 l10 -10" stroke="#7FD3CB" strokeWidth="3" strokeLinecap="round" />

      {/* floating browser / app card */}
      <g transform="translate(120 130)">
        <rect x="0" y="0" width="220" height="150" rx="14" fill="#FFFFFF" stroke="#E7E2D8" strokeWidth="1.5" />
        <rect x="0" y="0" width="220" height="28" rx="14" fill="#F4F1EA" />
        <circle cx="18" cy="14" r="4" fill="#F5A8BF" />
        <circle cx="32" cy="14" r="4" fill="#FBD98F" />
        <circle cx="46" cy="14" r="4" fill="#93DDD3" />
        <rect x="16" y="44" width="120" height="10" rx="5" fill="#1CA7B0" />
        <rect x="16" y="64" width="188" height="7" rx="3.5" fill="#E7E2D8" />
        <rect x="16" y="80" width="150" height="7" rx="3.5" fill="#E7E2D8" />
        <rect x="16" y="102" width="70" height="30" rx="8" fill="#1CA7B0" opacity=".14" />
        <rect x="94" y="102" width="70" height="30" rx="8" fill="#F5A8BF" opacity=".18" />
        <rect x="172" y="102" width="32" height="30" rx="8" fill="#FBD98F" opacity=".3" />
      </g>

      {/* cursor */}
      <g transform="translate(300 250) rotate(-8)">
        <path d="M0 0 L0 34 L8 26 L14 38 L20 35 L14 23 L24 23 Z" fill="#1CA7B0" stroke="#0E8A94" strokeWidth="1.5" strokeLinejoin="round" />
      </g>

      {/* color swatch stack */}
      <g transform="translate(320 330)">
        <circle cx="0" cy="0" r="16" fill="#F5A8BF" />
        <circle cx="22" cy="10" r="16" fill="#FBD98F" />
        <circle cx="44" cy="0" r="16" fill="#7FD3CB" />
      </g>

      {/* pencil */}
      <g transform="translate(90 220) rotate(35)">
        <rect x="0" y="0" width="12" height="70" rx="3" fill="#FDE7B8" />
        <rect x="0" y="0" width="12" height="14" rx="3" fill="#F5A8BF" />
        <path d="M0 70 L6 84 L12 70 Z" fill="#C99A5B" />
      </g>
    </svg>
  );
}
