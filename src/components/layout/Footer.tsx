import { useState, useEffect, useRef, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/wedding-config';
import { activeTheme } from '@/config/theme-config';
import { Globe } from 'lucide-react';

export default function Footer() {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const menuRef = useRef<HTMLDivElement | null>(null);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'te', name: 'తెలుగు' }, // Telugu
    { code: 'kn', name: 'ಕನ್ನಡ' }, // Kannada
    { code: 'hi', name: 'हिन्दी' }, // Hindi
  ];

  useEffect(() => {
    // Google Translate Initialization (hidden)
    const script = document.createElement('script');
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      // Add non-null assertion since we know this will be available
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,te,kn,hi',
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    // Handle clicks outside the language menu
    const handleClickOutside = (event: MouseEvent): void => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowLanguageMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside as unknown as EventListener);
    return () => document.removeEventListener('mousedown', handleClickOutside as unknown as EventListener);
  }, []);

  const changeLanguage = (languageCode: string, languageName: string): void => {
    // This function triggers Google Translate
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = languageCode;
      select.dispatchEvent(new Event('change'));
      setCurrentLanguage(languageName);
      setShowLanguageMenu(false);
    }
  };

  return (
    <footer className="py-12 text-center" style={{ backgroundColor: activeTheme.primary }}>
      <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto space-y-6"
    >
      <h2 className="text-4xl font-serif font-semibold text-white tracking-wide">
        {weddingConfig.couple.bride.name} &amp; {weddingConfig.couple.groom.name}
      </h2>

      <p className="text-lg text-white/90 leading-relaxed">
        Our heartfelt gratitude for your presence and blessings as we begin this beautiful journey together.
      </p>

      <div className="border-t border-white/20 pt-6 text-sm text-white/70">
        <p>Made with ❤️ by <span className="font-medium text-white">Bhovan</span></p>
        <p className="mt-1">© {new Date().getFullYear()} All rights reserved</p>
      </div>

          {/* Hidden Google Translate Element */}
          <div id="google_translate_element" className="hidden"></div>

          {/* Custom Language Dropdown */}
          <div className="mt-8 relative inline-block" ref={menuRef}>
            <button
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              className="flex items-center px-5 py-2 bg-white text-black rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300"
              style={{ focusRingColor: activeTheme.accent }}
              aria-expanded={showLanguageMenu}
              aria-haspopup="true"
            >
              <Globe size={16} className="mr-2" />
              <span className="mr-2">{currentLanguage}</span>
              <span className="text-sm">
                {showLanguageMenu ? '▲' : '▼'}
              </span>
            </button>

            {/* Language Menu */}
            {showLanguageMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => changeLanguage(language.code, language.name)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                    role="menuitem"
                  >
                    {language.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}