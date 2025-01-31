import { JSX } from "preact";

export function BackgroundCubes({ class: className }: { class?: string }) {
  return (
    <div class="fixed inset-0 -z-10 perspective-1000">
      {/* 3D Grid */}
      <div class="absolute inset-0 grid-3d" />
      
      {/* Floating Cubes */}
      {[...Array(15)].map((_, i) => {
        const size = `${Math.random() * 1.5 + 0.5}rem`;
        const x = `${Math.random() * 100}%`;
        const y = `${Math.random() * 100}%`;
        const z = `${Math.random() * 100 - 50}px`;
        const delay = `${Math.random() * 20}s`;

        return (
          <div
            key={i}
            class={`cube cube-${i + 1} absolute`}
            style={`--size:${size}; --x:${x}; --y:${y}; --z:${z}; --delay:${delay}`}
          />
        );
      })}
    </div>
  );
} 