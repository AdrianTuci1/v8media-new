import { useState, useEffect, useRef, createContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Context for sharing carousel state with FloatingNav
export const CarouselContext = createContext({
    isCarouselActive: false,
    isFullscreen: false,
    activeSlide: 0,
    totalSlides: 0,
    goNext: () => { },
    goPrev: () => { },
    showDetails: () => { }
});

const Carousel = () => {
    const { t } = useTranslation();
    const [activeSlide, setActiveSlide] = useState(0); // Start from the first slide (index 0)
    const [swiperInstance, setSwiperInstance] = useState(null);
    const containerRef = useRef(null);

    // Scroll progress for the entire container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Animation transforms
    // 0 - 0.2: Initial state (left-aligned, partial next slide visible)
    // 0.2 - 0.6: Expansion phase (fullscreen with padding and border radius)
    // 0.6 - 1.0: Full screen sticky phase

    // Padding around the carousel (0 initially, 40px when expanded)
    const padding = useTransform(scrollYProgress, [0.1, 0.4, 0.8, 1], [0, 40, 40, 0]);

    // Height of the carousel (smaller initially, fullscreen when expanded)
    const height = useTransform(scrollYProgress, [0.1, 0.4, 0.8, 1], ["60vh", "100vh", "100vh", "60vh"]);

    // Border radius changes (0 initially, 24px when expanded)
    const borderRadius = useTransform(scrollYProgress, [0.1, 0.4, 0.8, 1], [0, 24, 24, 0]);

    // Opacity of the "Our Expertise" text
    const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [1, 0, 0, 1]);
    const textY = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, -50, -50, 0]);

    // Track expansion progress for slidesPerView calculation
    const [expansionProgress, setExpansionProgress] = useState(0);

    // Is fullscreen state for conditional rendering/logic
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            setIsFullscreen(latest > 0.35 && latest < 0.85);
            setExpansionProgress(latest);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    // Sample card data with detailed info and tags
    const cards = [
        {
            id: 1,
            title: "Hotel Rivoli",
            description: "We provided comprehensive digital services for Hotel Rivoli, including elegant design solutions, strategic SEO implementation, and engaging social media management to enhance their online presence and attract more guests.",
            image: "/Document.png",
            color: "from-purple-500/20 to-pink-500/20",
            tags: ["Design", "SEO", "Social Media", "Brand Identity", "Content Strategy", "Digital Marketing"]
        },
        {
            id: 2,
            title: "Simplu",
            description: "We developed Simplu, a comprehensive management platform designed for diverse business types. Our solution includes robust development, analytics integration, social media tools, and intuitive UI/UX design to streamline business operations.",
            image: "/Document2.png",
            color: "from-blue-500/20 to-cyan-500/20",
            tags: ["Development", "Analytics", "Social Media", "UI/UX", "Platform Management", "Business Solutions"]
        },
        {
            id: 3,
            title: "Loopalive",
            description: "We created Loopalive, an innovative AI chat solution that can be seamlessly implemented across any website. Our development and marketing expertise ensured a powerful, user-friendly conversational AI that enhances customer engagement.",
            image: "/Document3.png",
            color: "from-orange-500/20 to-yellow-500/20",
            tags: ["Development", "AI Integration", "Marketing", "Chat Solutions", "Customer Engagement", "Technology"]
        }
    ];

    // Get current card data
    const getCurrentCard = () => cards[activeSlide] || cards[0];

    // Expose carousel controls to parent/context
    useEffect(() => {
        const controls = {
            isActive: isFullscreen,
            activeSlide,
            totalSlides: cards.length,
            goNext: () => swiperInstance?.slideNext(),
            goPrev: () => swiperInstance?.slidePrev(),
            getCurrentCard
        };
        window.carouselControls = controls;
    }, [isFullscreen, activeSlide, swiperInstance, cards.length]);

    // Calculate dynamic slidesPerView based on scroll progress
    // Initially shows ~1.3 slides (left-aligned effect), transitions to 1 (fullscreen)
    const getSlidesPerView = () => {
        if (expansionProgress < 0.1) return 1.4;
        if (expansionProgress > 0.4 && expansionProgress < 0.8) return 1;
        if (expansionProgress >= 0.8) {
            // Transition back to showing partial slides
            const exitProgress = (expansionProgress - 0.8) / 0.2;
            return 1 + (0.4 * exitProgress);
        }
        // Transition from 1.4 to 1
        const enterProgress = (expansionProgress - 0.1) / 0.3;
        return 1.4 - (0.4 * enterProgress);
    };

    return (
        <div className="relative">
            {/* Header Text - Fades out */}
            <motion.div
                style={{ opacity: textOpacity, y: textY }}
                className="relative top-20 left-0 right-0 z-10 container mx-auto"
            >
                <div className="text-left mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        {t('carousel.title')} <span className="italic font-serif">{t('carousel.titleHighlight')}</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        {t('carousel.description')}
                    </p>
                </div>
            </motion.div>

            <div ref={containerRef} className="relative h-[300vh]">
                <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">
                    {/* Carousel Container with padding */}
                    <motion.div
                        style={{ padding, height }}
                        className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20"
                    >
                        <motion.div
                            style={{ borderRadius }}
                            className="relative w-full h-full overflow-hidden shadow-2xl"
                        >
                            <Swiper
                                modules={[Navigation, Pagination]}
                                slidesPerView={getSlidesPerView()}
                                centeredSlides={isFullscreen}
                                spaceBetween={isFullscreen ? 0 : 24}
                                initialSlide={0}
                                slidesOffsetBefore={isFullscreen ? 0 : 40}
                                slidesOffsetAfter={isFullscreen ? 0 : 40}
                                onSwiper={setSwiperInstance}
                                onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                                className="h-full w-full"
                            >
                                {cards.map((card, index) => (
                                    <SwiperSlide key={card.id} className="h-full">
                                        <div
                                            className={`relative w-full h-full overflow-hidden transition-all duration-500`}
                                            style={{
                                                borderRadius: isFullscreen ? '0px' : '16px',
                                            }}
                                        >
                                            {/* Background Image */}
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                                                style={{ backgroundImage: `url(${card.image})` }}
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
                                            </div>



                                            {/* Content */}
                                            <div className="relative h-full flex flex-col justify-end p-8 md:p-16 lg:p-24">
                                                <div className={`transition-all duration-500 transform ${isFullscreen && index === activeSlide
                                                    ? 'translate-y-0 opacity-100'
                                                    : 'translate-y-10 opacity-0'
                                                    }`}>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
