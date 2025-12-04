import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'ro' ? 'en' : 'ro';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold tracking-tighter mix-blend-difference flex align-center">
          <img src="/logo.jpg" alt="" className="w-8 h-8 rounded-lg" />
          <span className="ml-2">V8MEDIA</span>
        </a>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="text-sm font-medium hover:text-gray-300 transition-colors uppercase tracking-wide"
            aria-label="Toggle language"
          >
            {i18n.language === 'ro' ? 'EN' : 'RO'}
          </button>
          
          <a href="mailto:hello@v8media.agency" className="text-sm font-medium hover:text-gray-300 transition-colors uppercase tracking-wide">
            {i18n.language === 'ro' ? 'Spune-ne' : 'Say Hello'}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
