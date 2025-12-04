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
      <div className="absolute right-0 top-[50vh] -translate-y-1/2 hidden lg:block z-0">
        <PixelGrid className="w-36 h-36" />
      </div>

      {/* Pixel Grid Decoration - Bottom Middle */}
      <div className="absolute top-[96vh] left-1/2 -translate-x-1/2 hidden md:block z-0">
        <PixelGrid className="w-36 h-36" />
      </div>

      <div className="absolute top-[170vh] left-[150px] -translate-x-1/2 hidden md:block z-0">
        <PixelGrid className="w-36 h-36" />
      </div>

      <div className="absolute top-[130vh] right-[10px] -translate-x-1/2 hidden md:block z-0">
        <PixelGrid className="w-36 h-36" />
      </div>

      <div className="absolute top-[200vh] left-2/5 -translate-x-1/2 hidden md:block z-0">
        <PixelGrid className="w-36 h-36" />
      </div>

      <div className="absolute top-[290vh] right-[50px] -translate-x-1/2 hidden md:block z-0">
        <PixelGrid className="w-36 h-36" />
      </div>

      <div className="absolute top-[310vh] left-[50px] -translate-x-1/2 hidden md:block z-0">
        <PixelGrid className="w-36 h-36" />
      </div>

      <div className="absolute top-[630vh] right-[0px] -translate-x-1/2 hidden md:block z-0">
        <PixelGrid className="w-36 h-36" />
      </div>

      <div className="absolute top-[680vh] left-[100px] -translate-x-1/2 hidden md:block z-0">
        <PixelGrid className="w-36 h-36" />
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

        <footer id="contact" className="min-h-screen border-t border-white/10 text-center text-gray-500 flex flex-col relative">
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
