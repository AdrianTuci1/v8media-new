import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft, Check, Menu, Minus } from 'lucide-react';

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [showNav, setShowNav] = useState(false);

  // Carousel State
  const [isCarouselActive, setIsCarouselActive] = useState(false);
  const [carouselControls, setCarouselControls] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);

  // Form State
  const [needs, setNeeds] = useState([]);
  const [experts, setExperts] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    let hasAutoOpened = false;
    let wasInFooter = false;

    const handleScroll = () => {
      setShowNav(window.scrollY > 100);

      // Auto-open/close when reaching/leaving footer
      const footer = document.getElementById('contact');
      if (footer && !isCarouselActive) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if footer is in view
        const isInFooter = footerRect.top < windowHeight * 0.5 && footerRect.bottom > 0;

        // When entering footer zone - auto open
        if (isInFooter && !wasInFooter && !hasAutoOpened) {
          hasAutoOpened = true;
          setIsOpen(true);
          setStep(0);
        }

        // When leaving footer zone - auto close
        if (!isInFooter && wasInFooter) {
          setIsOpen(false);
          hasAutoOpened = false; // Reset so it can open again next time
        }

        wasInFooter = isInFooter;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isCarouselActive]);

  // Poll for carousel controls
  useEffect(() => {
    const checkCarouselState = () => {
      if (window.carouselControls) {
        setIsCarouselActive(window.carouselControls.isActive);
        setCarouselControls(window.carouselControls);
        if (window.carouselControls.getCurrentCard) {
          setCurrentCard(window.carouselControls.getCurrentCard());
        }
      } else {
        setIsCarouselActive(false);
      }
    };

    const interval = setInterval(checkCarouselState, 100);
    return () => clearInterval(interval);
  }, []);

  // Close details when carousel becomes inactive
  useEffect(() => {
    if (!isCarouselActive) {
      setShowDetails(false);
    }
  }, [isCarouselActive]);

  const resetForm = () => {
    setStep(0);
    setNeeds([]);
    setExperts([]);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(resetForm, 500);
  };

  const toggleSelection = (list, setList, item) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const needOptions = [
    "hire a dedicated designer or developer",
    "build a new product (MVP)",
    "give my website or app a fresh redesign",
    "turn my idea into a clickable prototype",
    "help with something else"
  ];

  const expertOptions = [
    "UX Designer", "UI Designer", "Motion Designer",
    "Front-End Developer", "Back-End Developer", "Project Manager",
    "DevOps & Cloud", "QA tester"
  ];

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold mb-4">Let's get started!</h3>
            <p className="text-gray-400 mb-8 max-w-sm mx-auto">
              Please share a few basic details with us so we can start the conversation.
            </p>
            <button
              onClick={() => setStep(1)}
              className="bg-white text-black text-lg font-bold py-4 px-12 rounded-full hover:bg-gray-200 transition-colors w-full md:w-auto"
            >
              Start
            </button>
          </motion.div>
        );

      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-2xl font-bold mb-6">I need to...</h3>
            <div className="space-y-3 mb-8 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
              {needOptions.map((option, idx) => (
                <div
                  key={idx}
                  onClick={() => toggleSelection(needs, setNeeds, option)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between group ${needs.includes(option)
                    ? 'bg-white text-black border-white'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-sm font-mono ${needs.includes(option) ? 'text-black/50' : 'text-gray-500'}`}>
                      0{idx + 1}
                    </span>
                    <span className="font-medium">{option}</span>
                  </div>
                  {needs.includes(option) && <Check size={18} />}
                </div>
              ))}
            </div>
            <button
              onClick={() => setStep(2)}
              disabled={needs.length === 0}
              className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full"
            >
              Continue
            </button>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-2xl font-bold mb-6">Which expert would you like to hire?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
              {expertOptions.map((option, idx) => (
                <div
                  key={idx}
                  onClick={() => toggleSelection(experts, setExperts, option)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${experts.includes(option)
                    ? 'bg-white text-black border-white'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-sm font-mono ${experts.includes(option) ? 'text-black/50' : 'text-gray-500'}`}>
                      0{idx + 1}
                    </span>
                    <span className="font-medium">{option}</span>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setStep(3)}
              disabled={experts.length === 0}
              className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full"
            >
              Continue
            </button>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-2xl font-bold mb-6">Almost there!</h3>
            <p className="text-gray-400 mb-6">Tell us a bit about yourself to wrap it up.</p>

            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Your name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Your email address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Tell us more (optional)</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-white/30 transition-colors h-24 resize-none"
                  placeholder="Any specific details..."
                />
              </div>
            </div>

            <button
              onClick={handleClose}
              disabled={!formData.name}
              className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full"
            >
              Send
            </button>
          </motion.div>
        );
    }
  };

  // Carousel Details Expanded View
  const renderCarouselDetails = () => {
    if (!currentCard) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-[#141414] rounded-[24px] p-8 md:p-12 shadow-2xl w-full max-w-4xl"
      >
        {/* Content Grid */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-8">
          {/* Left - Title */}
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              {currentCard.title}
            </h2>
          </div>

          {/* Right - Description */}
          <div className="md:w-2/3">
            <p className="text-gray-400 text-lg leading-relaxed">
              {currentCard.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {currentCard.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-white/10 pt-6">
          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => carouselControls?.goPrev()}
                className="text-gray-400 hover:text-white transition-colors p-2"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => carouselControls?.goNext()}
                className="text-gray-400 hover:text-white transition-colors p-2"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowDetails(false)}
              className="text-gray-400 hover:text-white transition-colors p-2"
            >
              <Minus size={24} />
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  // Carousel Closed Navigation Bar
  const renderCarouselNav = () => {
    return (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="bg-[#1a1a1a] rounded-[16px] p-1.5 shadow-2xl flex items-center gap-1"
      >
        {/* Left Arrow */}
        <button
          onClick={() => carouselControls?.goPrev()}
          className="bg-[#2a2a2a] px-5 py-3 rounded-[10px] hover:bg-[#333] transition-colors"
        >
          <ChevronLeft size={20} className="text-gray-400" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => carouselControls?.goNext()}
          className="bg-[#2a2a2a] px-5 py-3 rounded-[10px] hover:bg-[#333] transition-colors"
        >
          <ChevronRight size={20} className="text-gray-400" />
        </button>

        {/* Details Button with Menu Icon */}
        <button
          onClick={() => setShowDetails(true)}
          className="bg-[#2a2a2a] px-5 py-3 rounded-[10px] hover:bg-[#333] transition-colors text-gray-400 hover:text-white font-medium flex items-center gap-3"
        >
          <Menu size={20} />
          <span>Details</span>
        </button>
      </motion.div>
    );
  };

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      <AnimatePresence>
        {showNav && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="pointer-events-auto w-full max-w-xl flex justify-center"
          >
            {isOpen ? (
              <motion.div
                layoutId="nav-container"
                className="bg-black border border-white/10 rounded-[2rem] p-6 md:p-8 shadow-2xl relative overflow-hidden w-full"
              >
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 h-1 bg-white/10 w-full">
                  <motion.div
                    className="h-full bg-white"
                    animate={{ width: `${((step + 1) / 4) * 100}%` }}
                  />
                </div>

                <div className="flex justify-between items-center mb-8">
                  <div className="flex gap-2">
                    {[0, 1, 2, 3].map((s) => (
                      <div
                        key={s}
                        className={`w-2 h-2 rounded-full transition-colors ${s <= step ? 'bg-white' : 'bg-white/20'}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={handleClose}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="min-h-[300px] flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    {renderStep()}
                  </AnimatePresence>
                </div>
              </motion.div>
            ) : (
              <>
                {isCarouselActive && carouselControls ? (
                  // Carousel Navigation Mode
                  <AnimatePresence mode="wait">
                    {showDetails ? (
                      renderCarouselDetails()
                    ) : (
                      renderCarouselNav()
                    )}
                  </AnimatePresence>
                ) : (
                  // Default Mode
                  <motion.div
                    layoutId="nav-container"
                    className="bg-[#1a1a1a] rounded-[16px] p-1.5 shadow-2xl flex items-center gap-1"
                  >
                    <button
                      onClick={() => setIsOpen(true)}
                      className="bg-[#2a2a2a] px-5 py-3 rounded-[10px] hover:bg-[#333] transition-colors flex items-center gap-3 group"
                    >
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="font-medium text-gray-300">Tell us about your needs</span>
                      <ChevronRight size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                    </button>
                  </motion.div>
                )}
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingNav;

