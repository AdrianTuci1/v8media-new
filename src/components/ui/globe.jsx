import { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { MeshPhongMaterial, SphereGeometry } from "three";

export function Globe({ globeConfig, data }) {
  const meshRef = useRef();
  
  useEffect(() => {
    if (!meshRef.current) return;
    
    // Create a simple sphere as a replacement for the globe
    const geometry = new SphereGeometry(100, 64, 64);
    const material = new MeshPhongMaterial({
      color: globeConfig?.globeColor || "#1d072e",
      emissive: globeConfig?.emissive || "#000000",
      emissiveIntensity: globeConfig?.emissiveIntensity || 0.1,
      shininess: globeConfig?.shininess || 0.9,
    });
    
    meshRef.current.geometry = geometry;
    meshRef.current.material = material;
  }, [globeConfig]);
  
  return (
    <mesh ref={meshRef} />
  );
}

export function World(props) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [0, 0, 300], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 1, 1]} intensity={0.8} />
        <Globe {...props} />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate={true} />
      </Canvas>
    </div>
  );
}

export default World;
