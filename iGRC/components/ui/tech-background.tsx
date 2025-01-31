import { JSX } from "preact";

export function TechBackground(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} class={`absolute inset-0 overflow-hidden ${props.class ?? ''}`}>
      {/* Base gradient */}
      <div class="absolute inset-0 bg-gradient-to-br from-white via-brand-light/20 to-white" />
      
      {/* Circuit patterns */}
      <div class="absolute inset-0">
        <svg width="100%" height="100%" class="opacity-[0.07]">
          <pattern id="circuit" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
            {/* Horizontal lines */}
            <path 
              d="M0 50h300 M0 150h300 M0 250h300"
              class="text-brand-blue stroke-[1]"
              stroke="currentColor"
              fill="none"
            />
            
            {/* Vertical lines */}
            <path 
              d="M50 0v300 M150 0v300 M250 0v300"
              class="text-brand-blue stroke-[1]"
              stroke="currentColor"
              fill="none"
            />

            {/* Circuit paths */}
            <path
              d="M50 50h50v50h50 M150 150h50v-50h50
                 M50 250h50v-50h50 M250 50v50h-50
                 M150 50v50h-50 M250 250v-50h-50"
              class="text-brand-blue stroke-[1.5]"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            {/* Connection dots */}
            <g class="text-brand-blue fill-current">
              <circle cx="50" cy="50" r="3" opacity="0.5" />
              <circle cx="150" cy="50" r="3" opacity="0.5" />
              <circle cx="250" cy="50" r="3" opacity="0.5" />
              <circle cx="50" cy="150" r="3" opacity="0.5" />
              <circle cx="150" cy="150" r="3" opacity="0.5" />
              <circle cx="250" cy="150" r="3" opacity="0.5" />
              <circle cx="50" cy="250" r="3" opacity="0.5" />
              <circle cx="150" cy="250" r="3" opacity="0.5" />
              <circle cx="250" cy="250" r="3" opacity="0.5" />
            </g>

            {/* Circuit components */}
            <g class="text-brand-blue fill-current">
              {/* IC chips */}
              <rect x="70" y="70" width="30" height="20" opacity="0.2" />
              <rect x="170" y="170" width="30" height="20" opacity="0.2" />
              
              {/* Small components */}
              <rect x="145" y="45" width="10" height="10" opacity="0.2" />
              <rect x="245" y="145" width="10" height="10" opacity="0.2" />
              <circle cx="100" cy="200" r="5" opacity="0.2" />
              <circle cx="200" cy="100" r="5" opacity="0.2" />
            </g>
          </pattern>
          
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Glowing orbs */}
      <div class="absolute inset-0">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            class="absolute rounded-full bg-brand-blue/3 animate-pulse-slow blur-3xl"
            style={{
              width: `${Math.random() * 40 + 30}rem`,
              height: `${Math.random() * 40 + 30}rem`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle overlay */}
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white/70" />
    </div>
  );
} 