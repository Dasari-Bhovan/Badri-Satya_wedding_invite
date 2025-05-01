import { useEffect } from 'react';
import Script from 'next/script';

const GoogleTranslate = () => {
  useEffect(() => {
    // Ensure Google Translate is initialized when the script loads
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en', // Default language (English)
          includedLanguages: 'en,te,kn,hi', // English (en), Telugu (te), Kannada (kn), Hindi (hi)
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false, // Don't auto-display the Google Translate widget on page load
        },
        'google_translate_element'
      );
    };
  }, []);

  return (
    <>
      {/* Load Google Translate script */}
      <Script
        strategy="afterInteractive"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      />
      {/* Container for the Google Translate widget */}
      <div id="google_translate_element"></div>
    </>
  );
};

export default GoogleTranslate;
