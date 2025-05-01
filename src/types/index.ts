export interface SocialMediaLinks {
  instagram?: string;
  facebook?: string;
  twitter?: string;
}
export interface GoogleTranslateConfig {
  defaultLanguage: string; // Default language to be set initially
  supportedLanguages: string[]; // List of supported languages
  init: () => void; // Initialization function to setup Google Translate
  setLanguage: (languageCode: string) => void; // Function to set the language dynamically
  getCurrentLanguage: () => string; // Function to retrieve the current language
}

export interface GalleryImage {
  url: string;
  caption: string;
}

export interface EventDetails {
  date: string;
  time: string;
  location: string;
  address: string;
  mapLink: string;
  dresscode?: string;
}

export interface BankAccount {
  name: string;
  accountNumber: string;
  accountHolder: string;
}

export interface EWallet {
  name: string;
  number: string;
  logo: string;
} 