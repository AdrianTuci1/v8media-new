import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import loopaImage from '../assets/loopa.png';
import rivoliImage from '../assets/rivoli.png';
import simpluImage from '../assets/simplu.png';

const Results = () => {
  const { t } = useTranslation();
  
  // Get results data from translations
  const resultsData = [
    {
      company: t('resultsData.hotelRivoli.company'),
      image: rivoliImage,
      stats: [
        { value: t('resultsData.hotelRivoli.stats.0.value'), label: t('resultsData.hotelRivoli.stats.0.label') },
        { value: t('resultsData.hotelRivoli.stats.1.value'), label: t('resultsData.hotelRivoli.stats.1.label') }
      ]
    },
    {
      company: t('resultsData.loopalive.company'),
      image: loopaImage,
      stats: [
        { value: t('resultsData.loopalive.stats.0.value'), label: t('resultsData.loopalive.stats.0.label') },
        { value: t('resultsData.loopalive.stats.1.value'), label: t('resultsData.loopalive.stats.1.label') }
      ]
    },
    {
      company: t('resultsData.simplu.company'),
      image: simpluImage,
      stats: [
        { value: t('resultsData.simplu.stats.0.value'), label: t('resultsData.simplu.stats.0.label') },
        { value: t('resultsData.simplu.stats.1.value'), label: t('resultsData.simplu.stats.1.label') }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 border-t border-white/10 mx-4 md:mx-8 lg:mx-16">
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

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides={false}
            breakpoints={{
              900: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1224: {
                slidesPerView: 3,
                spaceBetween: 24,
                allowTouchMove: false,
              }
            }}
            className="results-swiper"
          >
            {resultsData.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#101010] p-8 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-[#1a1a1a] transition-all duration-300 group cursor-pointer h-full"
                  style={{ height: '260px' }}
                >
                  <div className="mb-8 flex items-center">
                    <div className="w-8 h-8 bg-white/100 p-[3px] rounded-lg flex items-center justify-center overflow-hidden">
                      <img src={item.image} alt={item.company} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-md font-medium text-white tracking-wider ml-2">{item.company}</span>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Results;

/* Custom Swiper Styles */
const customSwiperStyles = `
.results-swiper .swiper-pagination {
  position: static;
  margin-top: 1.5rem;
}

.results-swiper .swiper-pagination-bullet {
  background-color: rgba(255, 255, 255, 0.3);
  opacity: 1;
  width: 8px;
  height: 8px;
  margin: 0 4px;
}

.results-swiper .swiper-pagination-bullet-active {
  background-color: white;
}

.results-swiper .swiper-button-prev,
.results-swiper .swiper-button-next {
  position: static;
  margin-top: 0;
  width: auto;
  height: auto;
}

.results-swiper .swiper-button-prev::after,
.results-swiper .swiper-button-next::after {
  display: none;
}
`;

// Inject custom styles
if (typeof document !== 'undefined') {
  const styleId = 'results-swiper-styles';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = customSwiperStyles;
    document.head.appendChild(style);
  }
}

