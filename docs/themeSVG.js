window.themeToggleSVGString = `
<svg class="theme-toggle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Stars (Night) -->
  <g class="stars">
    <circle cx="30" cy="25" r="1.5" />
    <circle cx="70" cy="20" r="1" />
    <circle cx="80" cy="50" r="1.5" />
    <circle cx="20" cy="60" r="1.2" />
    <circle cx="50" cy="15" r="2" opacity="0.8" />
  </g>

  <!-- Sun (Day) - Elegant sun with a soft glow -->
  <g class="sun">
    <circle cx="50" cy="52" r="24" fill="#FFD700" opacity="0.15" />
    <circle cx="50" cy="52" r="14" fill="#FFD700" />
  </g>

  <!-- Mountains - Stay hidden at night, share colors naturally -->
  <g class="mountains">
    <polygon points="30,100 75,55 120,100" fill="#cbd5e1" opacity="0.7" />
    <polygon points="-20,100 35,65 90,100" fill="#94a3b8" />
  </g>

  <!-- Crescent Moon (Night) - Premium soft silver/moonstone instead of harsh white -->
  <path class="moon" fill="#e2e8f0" d="M48 26 A 18 18 0 1 0 70 48 A 22 22 0 1 1 48 26 Z" />
</svg>
`;
