import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const resultsData = [
  {
    company: "Online Payment Platform",
    stats: [
      { value: "200%", label: "More inbound sales calls" },
      { value: "53%", label: "More qualified pipeline" }
    ]
  },
  {
    company: "Bluebird",
    stats: [
      { value: "60+", label: "Inbound Leads" },
      { value: "66%", label: "Win rate" }
    ]
  },
  {
    company: "Focus-on",
    stats: [
      { value: "12%", label: "More Leads" },
      { value: "400%", label: "High-intent Downloads" }
    ],
  }
];

const Results = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          {/* Left side - Title */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {t('results.title')} <span className="italic font-serif text-[#d4d4d4]">{t('results.titleHighlight')}</span>
            </h2>
          </div>

          {/* Right side - Paragraph + Button */}
          <div className="md:w-1/2 flex flex-col items-start md:items-start gap-6">
            <p className="text-lg text-gray-300 max-w-md md:text-left">
              {t('results.description')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              {t('results.exploreButton')}
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resultsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black p-8 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-[#1a1a1a] transition-all duration-300 group cursor-pointer"
            >
              <div className="mb-8">
                <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">{item.company}</span>
              </div>

              <div className="border-t border-white/10 pt-6">
                <div className="flex items-end justify-between">
                  <div className="flex gap-8">
                    {item.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white/5 p-2 rounded-full group-hover:bg-white group-hover:text-black transition-colors">
                    <ArrowUpRight className="text-gray-400 group-hover:text-black transition-colors" size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;

