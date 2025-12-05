import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Results from './components/Results';
import Team from './components/Team';
import Carousel from './components/Carousel';
import FloatingNav from './components/FloatingNav';
import PixelGrid from './components/PixelGrid';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#101010] relative">
      {/* Pixel Grid Decoration - Right Middle */}
      <div className="absolute right-0 top-[40vh] -translate-y-1/2 z-0 md:top-[50vh]">
        <PixelGrid className="w-24 h-24 md:w-36 md:h-36" />
      </div>

      {/* Pixel Grid Decoration - Bottom Middle */}
      <div className="absolute top-[90vh] left-1/2 -translate-x-1/2 z-0 md:top-[96vh]">
        <PixelGrid className="w-24 h-24 md:w-36 md:h-36" />
      </div>

      <div className="absolute top-[150vh] left-[20px] -translate-x-1/2 z-0 md:left-[150px] md:top-[170vh]">
        <PixelGrid className="w-24 h-24 md:w-36 md:h-36" />
      </div>

      <div className="absolute top-[120vh] right-[10px] -translate-x-1/2 z-0 md:top-[130vh]">
        <PixelGrid className="w-24 h-24 md:w-36 md:h-36" />
      </div>

      <div className="absolute top-[200vh] left-2/5 -translate-x-1/2 hidden lg:block z-0">
        <PixelGrid className="w-36 h-36" />
      </div>

      <div className="absolute top-[320vh] right-[50px] -translate-x-1/2 hidden lg:block z-0">
        <PixelGrid className="w-36 h-36" />
      </div>

      <div className="absolute top-[310vh] left-[50px] -translate-x-1/2 hidden lg:block z-0">
        <PixelGrid className="w-36 h-36" />
      </div>

      <div className="absolute top-[650vh] right-[0px] -translate-x-1/2 hidden lg:block z-0">
        <PixelGrid className="w-36 h-36" />
      </div>

      <div className="absolute top-[680vh] left-[20px] -translate-x-1/2 z-0 hidden lg:block z-0">
        <PixelGrid className="w-24 h-24 md:w-36 md:h-36" />
      </div>

      <div className="absolute bottom-[50vh] left-[20px] -translate-x-1/2 z-0 md:left-[100px] md:bottom-[60vh]">
        <PixelGrid className="w-24 h-24 md:w-36 md:h-36" />
      </div>

      <div className="absolute bottom-[30vh] right-0 -translate-x-1/2 z-0 md:bottom-[40vh]">
        <PixelGrid className="w-24 h-24 md:w-36 md:h-36" />
      </div>

      <div className="absolute bottom-[10vh] left-[50px] -translate-x-1/2 z-0 md:left-[300px] md:bottom-0">
        <PixelGrid className="w-24 h-24 md:w-36 md:h-36" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <section id="hero">
            <Hero />
          </section>
          <section id="results">
            <Results />
          </section>
          <section id="services">
            <Services />
          </section>

          <section id="carousel">
            <Carousel />
          </section>

          <section id="team">
            <Team />
          </section>
        </main>

        <FloatingNav />

        <footer id="contact" className="min-h-screen border-t border-white/10 text-center text-gray-500 flex flex-col relative mx-4 md:mx-8 lg:mx-16">
          {/* Main content - centered */}
          <div className="flex-1 flex flex-col items-center justify-start pt-20 pb-32">
            <h2 className="text-3xl font-bold text-white mb-2">{t('footer.title')}</h2>
            <h1 className="text-8xl font-bold text-white mb-2">{t('footer.magic')}</h1>
            <p className="text-xl text-white">{t('footer.description')}</p>
          </div>

          {/* Copyright - fixed at bottom */}
          <p className="absolute bottom-0 left-0 right-0 text-sm">{t('footer.copyright')}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
