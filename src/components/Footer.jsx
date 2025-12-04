import React from 'react';
import { images } from '../constants/images';

export default function Footer() {
  return (
    <footer className="py-24 pb-8">
      <div className="container mx-auto px-6">
        <div className="bg-[#1e2008] rounded-[35px] p-24 text-center relative overflow-hidden">
          {/* Decorative blob */}
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[365px] h-[271px] opacity-30 pointer-events-none">
            <img src={images.imgEllipse3} alt="" className="w-full h-full object-cover" />
          </div>

          <h2 className="text-white font-outfit font-bold text-[64px] leading-tight mb-8 relative z-10">
            Become part of the design revolution
          </h2>
          <div className="text-white font-outfit text-[18px] mb-12 relative z-10">
            <p>Jump on a membership and start</p>
            <p>requesting designs right away!</p>
          </div>

          <button className="bg-[#b9fd50] text-black font-outfit font-medium text-[16px] px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors inline-flex items-center gap-2 relative z-10">
            See Pricing
            <img src={images.imgVector} alt="Arrow" className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-24 flex flex-col md:flex-row justify-between items-center text-white border-t border-[#666] pt-12">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <p className="font-outfit text-[16px] leading-relaxed max-w-[311px]">
              Kornix - the leading digital agency based in the UK, working with top-tier clients, from start-ups to enterprises.
            </p>
          </div>

          <div className="w-full md:w-1/3 flex flex-col items-center mb-8 md:mb-0">
            <div className="flex gap-8 mb-4">
              <a href="#" className="hover:text-[#b9fd50]">Process</a>
              <a href="#" className="hover:text-[#b9fd50]">Benefits</a>
              <a href="#" className="hover:text-[#b9fd50]">Services</a>
              <a href="#" className="hover:text-[#b9fd50]">Portfolio</a>
            </div>
            <div className="flex gap-4">
              <img src={images.imgFrame} alt="Social" className="w-6 h-6" />
              <img src={images.imgFrame1} alt="Social" className="w-6 h-6" />
              <img src={images.imgFrame2} alt="Social" className="w-6 h-6" />
            </div>
          </div>

          <div className="w-full md:w-1/3 flex flex-col items-end text-right">
            <p className="font-poppins text-[16px] mb-2">info@kronix.com</p>
            <p className="font-poppins text-[16px] mb-6">(001) 1231 3435</p>
            <p className="font-jakarta font-medium text-[16px] text-gray-400">
              © 2023 shantogfx - All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

