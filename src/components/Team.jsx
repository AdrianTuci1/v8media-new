import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const skills = [
  { name: "Content", x: 0, y: -280 },
  { name: "Google", x: 240, y: -200 },
  { name: "Video", x: 350, y: 0 },
  { name: "Design", x: 240, y: 200 },
  { name: "Motion", x: 0, y: 280 },
  { name: "Email", x: -240, y: 200 },
  { name: "AI", x: -350, y: 0 },
  { name: "LinkedIn", x: -240, y: -200 },
];

const teamPhotos = [
  "/victor.png",
  "/tuci.png"
];

const tags = [
  "Data Analysis", "Content", "UI/UX", "Marketing", "Design", "Development", "Machine Learning", "AI"
];

const Team = () => {
  const { t } = useTranslation();
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <section className="py-20 px-4 min-h-screen flex flex-col items-center">

      {/* Intro Content */}
      <div className="max-w-7xl mx-auto w-full mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h4 className="text-[#d4d4d4] font-serif italic text-2xl mb-4">{t('team.title')}</h4>
          <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-8">
            {t('team.heading')} <br />
            <span className="italic font-serif text-[#d4d4d4]">{t('team.headingHighlight')}</span> {t('team.headingRest')}
          </h2>
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            {t('team.description')}
          </p>

          <div className="flex flex-wrap gap-3">
            {tags.map((tag, i) => (
              <span key={i} className="px-4 py-2 rounded-full border border-white/20 text-sm hover:bg-white hover:text-black transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Visualization */}
      <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center py-20">

        {/* Desktop Layout - Two Cards Side by Side */}
        <div className="hidden md:flex relative h-96 items-center justify-center gap-2">
          {teamPhotos.map((photo, index) => {
            // Left card tilted left (-4deg), right card tilted right (+4deg)
            const rotation = index === 0 ? -4 : 4;
            const cardWidth = 288; // w-72 = 288px
            const cardHeight = 384; // h-96 = 384px

            return (
              <motion.div
                key={index}
                className="rounded-2xl overflow-hidden border-4 border-black shadow-2xl relative"
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  transformOrigin: 'center center'
                }}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: rotation }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.2) }}
                onMouseEnter={() => setHoveredImage(index)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img src={photo} alt="Team member" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                

              </motion.div>
            );
          })}

          {/* Arrow above left image - Desktop only */}
          <motion.div
            className="absolute -bottom-20 -right-[32%] -translate-x-1/2 z-40"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0 }}
          >
            <div className={`px-4 py-2 rounded-full border border-white/20 text-sm text-white text-center mt-2 font-semibold transition-colors cursor-default ${hoveredImage === 1 ? 'bg-[#4ade80] text-black' : 'hover:bg-white hover:text-black'} translate-x-8 translate-y-2`}>
              Software Engineer
            </div>
            <img src="/Arrow 13.png" alt="Arrow" className="w-24 h-24 rotate-220" />
          </motion.div>

          {/* Arrow below right image - Desktop only */}
          <motion.div
            className="absolute -top-15 -left-[5%] -translate-x-1/2 z-40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0 }}
          >
            <img src="/Arrow 13.png" alt="Arrow" className="w-24 h-24 rotate-20" />
            <div className={`px-4 py-2 rounded-full border border-white/20 text-sm text-white text-center mt-2 font-semibold transition-colors cursor-default ${hoveredImage === 0 ? 'bg-[#4ade80] text-black' : 'hover:bg-white hover:text-black'} -translate-x-18 -translate-y-4`}>
              Marketing specialist
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout - Column */}
        <div className="md:hidden flex flex-col items-center justify-center gap-8 w-full">
          {teamPhotos.map((photo, index) => (
            <motion.div
              key={`mobile-${index}`}
              className="rounded-2xl overflow-hidden border-4 border-black shadow-2xl relative w-72 h-96"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.2) }}
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img src={photo} alt="Team member" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              
              {/* Tag on card */}
              <div className={`absolute bottom-4 left-4 px-4 py-2 rounded-full border border-white/20 text-sm text-white font-semibold transition-colors cursor-default ${hoveredImage === index ? 'bg-[#4ade80] text-black' : 'bg-black/50 backdrop-blur-sm'}`}>
                {index === 0 ? 'Marketing Specialist' : 'Software Engineer'}
              </div>
              
              {/* Name below tag */}
              <div className={`absolute bottom-16 left-4 text-lg font-bold transition-colors ${hoveredImage === index ? 'text-white' : 'text-white/80'}`}>
                {index === 0 ? 'Victor Georgescu' : 'Adrian Tucicovenco'}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
