import React from 'react';

const Grain = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.07] mix-blend-overlay">
      <svg className="h-full w-full">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            stitchTiles="stitch"
            numOctaves="3"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
};

export default Grain;
