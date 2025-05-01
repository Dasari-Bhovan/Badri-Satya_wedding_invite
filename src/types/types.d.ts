// src/types/types.d.ts

declare global {
    interface Window {
      googleTranslateElementInit: () => void;
      google: any;
    }
  }
  
  export {}; // Make sure this is at the bottom to convert this file to a module
  