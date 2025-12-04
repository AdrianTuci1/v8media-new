import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
];

const tags = [
  "LinkedIn", "Content", "Google", "Video", "Design", "Motion", "Email", "AI"
];

const Team = () => {
  const { t } = useTranslation();

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



        {/* Two Cards - Left and Right */}
        <div className="relative h-96 flex items-center justify-center gap-2">
          {teamPhotos.map((photo, index) => {
            // Left card tilted left (-18deg), right card tilted right (+18deg)
            const rotation = index === 0 ? -4 : 4;
            const cardWidth = 288; // w-72 = 288px
            const cardHeight = 384; // h-96 = 384px

            return (
              <motion.div
                key={index}
                className="rounded-2xl overflow-hidden border-4 border-black shadow-2xl"
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  transformOrigin: 'center center'
                }}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: rotation }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.2) }}
              >
                <img src={photo} alt="Team member" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </motion.div>
            );
          })}

          {/* CTA Button */}
          <motion.div
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-50 bg-[#4ade80] text-black px-8 py-4 rounded-full flex items-center gap-2 font-bold shadow-xl cursor-pointer hover:bg-white transition-colors"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
          >
            <span className="whitespace-nowrap">{t('team.meetButton') || 'Meet the team'}</span>
            <ArrowUpRight size={18} />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Team;
