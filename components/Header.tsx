import React from 'react';
import { Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <>
      {/* Fixed Sticky Navbar */}
      <nav className="fixed top-0 inset-x-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 h-20 px-4 sm:px-8 flex items-center justify-between transition-all duration-200">
        {/* Top Right Image (Start in RTL) */}
        <img 
            src="https://raw.githubusercontent.com/israelichamberit-cmd/images/refs/heads/main/chamber.avif"
            alt="Chamber Logo" 
            className="h-12 w-auto object-contain"
        />

        {/* Top Left Image (End in RTL) - Clickable Link */}
        <a 
          href="https://www.amconsultingai.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img 
            src="https://github.com/israelichamberit-cmd/images/blob/main/AM_Logo.png?raw=true" 
            alt="Logo" 
            className="h-12 w-auto object-contain"
          />
        </a>
      </nav>

      <header className="relative bg-white pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
          {/* Abstract Background pattern */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-50 blur-3xl opacity-60 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-50 blur-3xl opacity-60 pointer-events-none"></div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
              <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 shadow-lg shadow-blue-900/20">
                  <Sparkles className="h-4 w-4 text-yellow-400" />
                  <span>מסלול הכשרה מקיף</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
                  שליטה בבינה מלאכותית
                  <span className="block text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-purple-600 mt-2">
                      מהיסודות ועד לסוכנים אוטונומיים
                  </span>
              </h1>
              
              <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed">
                  תוכנית לימודים מעשית המחולקת לשלוש רמות התמחות. 
                  בחרו מפגש כדי לגלות את הכלים והמיומנויות שירכיבו את ארגז הכלים העתידי שלכם.
              </p>
          </div>
      </header>
    </>
  );
};

export default Header;