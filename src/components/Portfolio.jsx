import React from 'react';
import { images } from '../constants/images';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-black font-outfit font-bold text-[48px] leading-tight mb-4">
          Our Beautiful Works
        </h2>
        <p className="text-[rgba(17,18,4,0.8)] font-outfit text-[18px]">
          We help our clients grow their bottom-line with clear and professional websites.
        </p>
      </div>

      <div className="bg-white py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          <div className="aspect-square relative overflow-hidden group">
            <img src={images.imgEdoSquare02Jpg} alt="Work 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div className="aspect-square relative overflow-hidden group">
            <img src={images.imgCvgtSquareJpg} alt="Work 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div className="aspect-square relative overflow-hidden group">
            <img src={images.imgRwhSquare04Jpg} alt="Work 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div className="aspect-square relative overflow-hidden group">
            <img src={images.imgDropbottleSquareJpg} alt="Work 4" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div className="aspect-square relative overflow-hidden group">
            <img src={images.imgDfatPosterJpg} alt="Work 5" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div className="aspect-square relative overflow-hidden group">
            <img src={images.imgAderSquareJpg} alt="Work 6" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button className="border border-[#b9fd50] text-[#222222] font-outfit font-bold uppercase text-[14px] px-8 py-4 rounded-xl hover:bg-[#b9fd50] transition-colors">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
}

