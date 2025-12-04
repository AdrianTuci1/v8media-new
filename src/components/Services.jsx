import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Monitor, Smartphone, TrendingUp, BrainCircuit } from 'lucide-react';

const services = [
  {
    title: "Branding",
    description: "We build brands that stand out in a crowded market. From visual identity to brand strategy.",
    icon: <Monitor size={32} />
  },
  {
    title: "Optimised Ads",
    description: "Data-driven ad campaigns that maximize ROI and reach your ideal customers effectively.",
    icon: <TrendingUp size={32} />
  },
  {
    title: "App Development",
    description: "Custom mobile and web applications built for performance, scalability and user experience.",
    icon: <Smartphone size={32} />
  },
  {
    title: "Machine Learning & AI",
    description: "Leverage the power of AI to automate processes and gain predictive insights for your business.",
    icon: <BrainCircuit size={32} />
  }
];

const Services = () => {
  const sectionRef = useRef(null);

  // Track scroll progress within the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Transform scroll progress to vertical translation (0px to 400px downward)
  const y = useTransform(scrollYProgress, [0, 1], [0, 400]);

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
              Level up your <br />
              <span className="italic font-serif text-[#d4d4d4]">digital presence</span>
            </h2>
            <p className="text-lg text-gray-400 mb-12 max-w-sm leading-relaxed">
              We help you level up your complete marketing engine. From strategy to content, advertising, and measurement.
            </p>
          </motion.div>

          {/* Right Side - Services List - Enhanced Visuals */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-10 rounded-[2rem] bg-black border border-white/5 hover:bg-[#1a1a1a] hover:border-white/20 transition-all duration-500 cursor-default overflow-hidden"
              >
                {/* Background Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                  <div className="p-5 bg-white/5 rounded-2xl group-hover:bg-white group-hover:text-black transition-colors duration-500 shadow-lg">
                    {service.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
