import React from 'react';
import { images } from '../constants/images';

const benefitsList = [
  {
    title: "On-demand requests",
    desc: "Put all your requests in the design queue in Trello, and we’ll knock them out 1 by 1.",
    icon: images.imgRectangle11878
  },
  {
    title: "Top-notch quality",
    desc: "High-end work from a dedicated team of senior designers that's always available when you need it.",
    icon: images.imgRectangle11879
  },
  {
    title: "Powered by - Webflow",
    desc: "We build every site on Webflow, making them dynamic, accessible, and easily scalable. It’s easy for you like Squarespace but better.",
    icon: images.imgRectangle11882 // Guessing icon based on sequence
  },
  {
    title: "Fast. Responsive. Reliable.",
    desc: "Get regular updates on your projects and can expect to receive your designs within 2-3 days.",
    icon: images.imgRectangle11876
  },
  {
    title: "No Lock in contracts",
    desc: "Pay the same every month, no surprises. You can use it for as long as you want and cancel anytime.",
    icon: images.imgRectangle11877
  },
  {
    title: "Great value for money",
    desc: "Get the power of dedicated design team at fraction of the cost of full-time employee. ($54k/yr vs. $112k/yr).",
    icon: images.imgRectangle11880
  },
  {
    title: "Customized for you",
    desc: "We design and build custom for you. We’re never starting from a template unless you want that? You don't, right?",
    icon: images.imgRectangle11881
  },
  {
    title: "Creative paying",
    desc: "We’re here when you need us and not on payroll when you don’t.",
    icon: images.imgRectangle11883
  },
  {
    title: "Expert turnovers",
    desc: "You’re getting 10+ years of design experience with every request. No hand-holding required.",
    icon: images.imgRectangle11883 // Reusing or finding another if needed
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <span className="text-[#b9fd50] uppercase tracking-wider font-outfit text-base block mb-4">BENEFITS</span>
          <h2 className="text-white font-outfit font-semibold text-[48px] md:text-[54px] leading-tight max-w-3xl">
            The design subscription that connects you to your dream team
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {benefitsList.map((item, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="w-[40px] h-[40px] bg-[#b9fd50] mb-6 relative">
                {/* Using mask for icon if possible, or just the image if it's an icon */}
                <div className="absolute inset-0 bg-black" style={{ maskImage: `url(${item.icon})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }}></div>
              </div>
              <h3 className="text-white font-outfit font-medium text-[20px] mb-4">
                {item.title}
              </h3>
              <p className="text-[#9593a4] font-outfit font-normal text-[16px] leading-[1.5]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

