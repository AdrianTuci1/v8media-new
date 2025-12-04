import React from "react";
import { motion } from "framer-motion";
import World from "./ui/globe";

// Sample data for globe connections
const globeData = [
  {
    order: 1,
    startLat: 40.7128,
    startLng: -74.0060,
    endLat: 51.5074,
    endLng: -0.1278,
    arcAlt: 0.3,
    color: "#00d4ff",
  },
  {
    order: 2,
    startLat: 51.5074,
    startLng: -0.1278,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.3,
    color: "#00d4ff",
  },
  {
    order: 3,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.3,
    color: "#00d4ff",
  },
  {
    order: 4,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: -23.5505,
    endLng: -46.6333,
    arcAlt: 0.3,
    color: "#00d4ff",
  },
  {
    order: 5,
    startLat: -23.5505,
    startLng: -46.6333,
    endLat: 40.7128,
    endLng: -74.0060,
    arcAlt: 0.3,
    color: "#00d4ff",
  },
];

const globeConfig = {
  pointSize: 1,
  globeColor: "#1d072e",
  showAtmosphere: true,
  atmosphereColor: "#ffffff",
  atmosphereAltitude: 0.1,
  polygonColor: "rgba(255,255,255,0.7)",
  emissive: "#000000",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  arcTime: 2000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  ambientLight: "#ffffff",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
};

export default function GlobeDemo() {
  return (
    <div className="flex flex-row items-center justify-center h-full w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full px-4">
        <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
          <World globeConfig={globeConfig} data={globeData} />
        </div>
      </div>
    </div>
  );
}
