import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PixelGrid = ({ className = "" }) => {
    // 5x5 grid = 25 cells
    const [cells, setCells] = useState(Array(25).fill(0));

    // Indices of the corners in a 5x5 grid
    const corners = [0, 4, 20, 24];

    useEffect(() => {
        const interval = setInterval(() => {
            setCells(current => current.map(() => Math.random()));
        }, 2000); // Much slower update (2s)

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`grid grid-cols-5 grid-rows-5 gap-[1px] ${className}`} aria-hidden="true">
            {cells.map((val, i) => {
                const isCorner = corners.includes(i);

                return (
                    <motion.div
                        key={i}
                        animate={isCorner ? {} : {
                            opacity: val > 0.6 ? 0.6 : 0.05, // Lower max opacity for subtler effect
                            backgroundColor: val > 0.8 ? '#4ade80' : '#1a2e1a'
                        }}
                        transition={{ duration: 1.5, ease: "easeInOut" }} // Slower, smoother transition
                        className={`w-full h-full ${isCorner ? 'bg-transparent' : 'bg-[#1a2e1a]'}`}
                    />
                );
            })}
        </div>
    );
};

export default PixelGrid;
