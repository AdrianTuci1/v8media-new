import React from 'react';
import { images } from '../constants/images';

export default function Process() {
    return (
        <section id="process" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <span className="text-[#b9fd50] uppercase tracking-wider font-outfit text-base block mb-4">How We Work</span>
                    <h2 className="text-white font-outfit font-semibold text-[48px] md:text-[54px] leading-tight max-w-2xl">
                        Get a dedicated design team at fraction of the cost.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Step 1 */}
                    <div className="relative">
                        <div className="relative w-[93px] h-[93px] mb-6 flex items-center justify-center">
                            <img src={images.imgEllipse233} alt="Background" className="absolute inset-0 w-full h-full" />
                            <div className="relative w-[45px] h-[45px]">
                                <div className="absolute inset-0 bg-black" style={{ maskImage: `url(${images.imgRectangle11859})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }}></div>
                            </div>
                        </div>
                        <p className="font-outfit font-light text-[18px] text-[rgba(255,255,255,0.8)] leading-[1.4]">
                            Submit as many design tasks as you need without worrying about individual project fees.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative">
                        <div className="relative w-[93px] h-[93px] mb-6 flex items-center justify-center">
                            <img src={images.imgEllipse233} alt="Background" className="absolute inset-0 w-full h-full" />
                            <div className="relative w-[45px] h-[45px]">
                                <div className="absolute inset-0 bg-black" style={{ maskImage: `url(${images.imgRectangle11860})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }}></div>
                            </div>
                        </div>
                        <p className="font-outfit font-light text-[18px] text-[rgba(255,255,255,0.8)] leading-[1.4]">
                            Our designers get to work to deliver your request. Receive your design within a few days.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative">
                        <div className="relative w-[93px] h-[93px] mb-6 flex items-center justify-center">
                            <img src={images.imgEllipse233} alt="Background" className="absolute inset-0 w-full h-full" />
                            <div className="relative w-[45px] h-[45px]">
                                <div className="absolute inset-0 bg-black" style={{ maskImage: `url(${images.imgRectangle11861})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }}></div>
                            </div>
                        </div>
                        <p className="font-outfit font-light text-[18px] text-[rgba(255,255,255,0.8)] leading-[1.4]">
                            Custom designs, prompt replies and as many revisions as you need.
                        </p>
                    </div>
                </div>

                <div className="mt-20 flex justify-between items-end border-b border-[#222222] pb-12">
                    <div className="text-white font-outfit font-medium text-[26px]">
                        Subscribe & get started
                    </div>
                    <div className="text-white font-outfit font-medium text-[26px]">
                        Polished designs - on time
                    </div>
                    <div className="text-white font-outfit font-medium text-[26px]">
                        Revisions made simple
                    </div>
                </div>
            </div>
        </section>
    );
}

