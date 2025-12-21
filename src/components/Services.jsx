import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Monitor, Smartphone, TrendingUp, BrainCircuit, Telescope } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  // Track scroll progress within the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Transform scroll progress to vertical translation (0px to 400px downward)
  const y = useTransform(scrollYProgress, [0, 1], [0, 400]);

  // Get services data from translations
  const services = [
    {
      title: t('services.items.consulting.title'),
      description: t('services.items.consulting.description'),
      icon: <Telescope size={32} />
    },
    {
      title: t('services.items.uxui.title'),
      description: t('services.items.uxui.description'),
      icon: <Monitor size={32} />
    },
    {
      title: t('services.items.ads.title'),
      description: t('services.items.ads.description'),
      icon: <TrendingUp size={32} />
    },
    {
      title: t('services.items.development.title'),
      description: t('services.items.development.description'),
      icon: <Smartphone size={32} />
    },
    {
      title: t('services.items.ml.title'),
      description: t('services.items.ml.description'),
      icon: <BrainCircuit size={32} />
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-32 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left Side - Header with scroll-based descent */}
          <motion.div
            style={{ y }}
            className="lg:col-span-5 h-fit"
          >
            <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
              {t('services.title')} <br />
              <span className="italic font-serif text-[#d4d4d4]">{t('services.titleHighlight')}</span>
            </h2>
            <p className="text-lg text-gray-400 mb-12 max-w-sm leading-relaxed">
              {t('services.description')}
            </p>
          </motion.div>

          {/* Right Side - Services List - Enhanced Visuals */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {services.map((service, index) => {
              return <ServiceCard key={index} service={service} index={index} />;
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["center end", "center start"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Check if the card is roughly in the center of the viewport
    // Adjust these values to fine-tune "center" detection window
    if (latest > 0.43 && latest < 0.58) {
      if (!isFocused) setIsFocused(true);
    } else {
      if (isFocused) setIsFocused(false);
    }
  });

  return (
    <motion.div
      ref={cardRef}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      whileInView="visible"
      animate={{ scale: isFocused ? 1.05 : 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        scale: { duration: 0.2, delay: 0 }
      }}
      className="group relative p-10 rounded-[2rem] bg-black border border-white/5 cursor-default overflow-hidden"
    >
      {/* Animated Green Border Ray - appears when card is in center of screen */}
      {/* Animated Green Border Ray - SVG Implementation */}
      <div className="absolute inset-x-0 inset-y-0 rounded-[2rem] pointer-events-none overflow-visible">
        <motion.svg
          className="w-full h-full" // Size to container
          style={{ overflow: 'visible', borderRadius: '2rem' }} // Ensure rounded corners are respected if overflow were hidden, but we want visible for stroke
        // No viewBox to ensure 1 unit = 1 pixel
        >
          <motion.rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            rx="32"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
            pathLength={100}
            strokeDasharray="20 80"
            strokeDashoffset={0}
            animate={{
              strokeDashoffset: isFocused ? [0, -100] : 0,
              opacity: isFocused ? 1 : 0
            }}
            transition={{
              strokeDashoffset: {
                duration: 3, // slightly faster than 4, user said "Faster animation" in original prompt (1.5s), maybe 3s is good for smooth orbit
                repeat: Infinity,
                ease: "linear",
              },
              opacity: { duration: 0.3 }
            }}
          />
        </motion.svg>
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-start sm:items-center">
        <div className="p-5 bg-white/5 rounded-2xl shadow-lg">
          {service.icon}
        </div>

        <div className="flex-1">
          <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
          <p className="text-gray-400 leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
