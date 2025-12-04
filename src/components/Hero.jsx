import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState, useCallback } from 'react';
import Anouncement from './Anouncement';

const CursorTrail = () => {
  const containerRef = useRef(null);
  const [cells, setCells] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const timeoutRef = useRef(null);
  const cellSize = 30; // Size of each grid cell (matches PixelGrid)
  const trailLength = 6; // Number of trailing cells
  const trailDuration = 300; // How long cells last (3 seconds - reduced from 8)
  const mousePositions = useRef([]);

  const updateGrid = useCallback((mouseX, mouseY) => {
    if (!containerRef.current) return;

    // Set active state when mouse moves
    setIsActive(true);
    
    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Set timeout to deactivate after mouse stops
    timeoutRef.current = setTimeout(() => {
      setIsActive(false);
      setCells([]); // Clear cells when inactive
    }, 500); // Disappear after 500ms of inactivity

    const rect = containerRef.current.getBoundingClientRect();
    const relX = mouseX - rect.left;
    const relY = mouseY - rect.top;

    // Calculate grid position
    const gridX = Math.floor(relX / cellSize);
    const gridY = Math.floor(relY / cellSize);

    // Check if we already have this position recently
    const lastPos = mousePositions.current[0];
    if (lastPos && lastPos.x === gridX && lastPos.y === gridY) return;

    // Add new position to trail
    mousePositions.current.unshift({ x: gridX, y: gridY, time: Date.now() });

    // Keep only recent positions
    if (mousePositions.current.length > trailLength) {
      mousePositions.current.pop();
    }

    // Create cells from trail positions - deduplicate by position
    const uniqueCells = new Map();
    mousePositions.current.forEach((pos) => {
      const key = `${pos.x}-${pos.y}`;
      if (!uniqueCells.has(key)) {
        uniqueCells.set(key, {
          x: pos.x,
          y: pos.y,
          time: pos.time,
          id: key
        });
      }
    });

    setCells(Array.from(uniqueCells.values()));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      updateGrid(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [updateGrid]);

  // Fade out cells over time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      mousePositions.current = mousePositions.current.filter(
        pos => now - pos.time < trailDuration
      );

      // Create cells from trail positions - deduplicate by position
      const uniqueCells = new Map();
      mousePositions.current.forEach((pos) => {
        const key = `${pos.x}-${pos.y}`;
        if (!uniqueCells.has(key)) {
          uniqueCells.set(key, {
            x: pos.x,
            y: pos.y,
            time: pos.time,
            id: key
          });
        }
      });

      setCells(Array.from(uniqueCells.values()));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }} // Behind content
    >
      {isActive && cells.map((cell, index) => {
        // Calculate opacity based on position in the trail
        // First cell (index 0) has max opacity, last cell has min opacity
        const opacity = Math.max(0.1, 1 - (index * 0.15));
        
        return (
          <motion.div
            key={cell.id}
            initial={{ opacity: 0 }}
            animate={{ opacity }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute"
            style={{
              left: cell.x * cellSize,
              top: cell.y * cellSize,
              width: cellSize - 2,
              height: cellSize - 2,
              backgroundColor: '#1a2e1a',
              // Only show in the left and right margins, avoiding center content area
              display: (cell.x * cellSize) < (window.innerWidth * 0.15) || 
                       (cell.x * cellSize) > (window.innerWidth * 0.85) ? 'block' : 'none'
            }}
          />
        );
      })}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center px-4 md:px-8 lg:px-16 pt-20 overflow-hidden">
      <CursorTrail />

      <div className="absolute bottom-[50px] right-[-140px] -translate-x-1/2 hidden md:block z-0">
        <Anouncement />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl relative"
        >
          <div className="relative">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8 relative z-10">
              We build <span className="italic font-serif text-[#d4d4d4]">high-</span> <br />
              <span className="italic font-serif text-[#d4d4d4]">performing</span> marketing <br />
              engines and applications.
            </h1>
            
 
          </div> 

          <div className="mt-12 pt-8 relative">


            <div className="flex flex-col items-start gap-8">
              <p className="text-lg md:text-xl text-gray-300 max-w-xl">
                We build, optimize, and scale marketing engines that generate pipeline and improve marketing ROI.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2 text-white px-6 py-3 font-medium "
              >
                Discover more
                <div className="bg-white text-black p-1 rounded-lg transition-colors">
                  <ArrowDown size={16} />
                </div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
