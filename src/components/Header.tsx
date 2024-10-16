import React, { useState } from 'react';
import { Tv, Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
  { code: 'pt', name: 'Português' },
  { code: 'ru', name: 'Русский' },
];

const Header = ({ currentLang, setCurrentLang }) => {
  return (
    <header className="bg-black bg-opacity-90 text-white fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Tv size={32} className="mr-2 text-red-600" />
          <span className="text-3xl font-bold text-red-600">IPTVPLUSML</span>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-6 mr-6">
            <li><a href="#features" className="hover:text-red-600 transition duration-300">Features</a></li>
            <li><a href="#pricing" className="hover:text-red-600 transition duration-300">Pricing</a></li>
            <li><a href="#contact" className="hover:text-red-600 transition duration-300">Contact</a></li>
          </ul>
          <div className="relative group">
            <button className="flex items-center hover:text-red-600 transition duration-300">
              <Globe size={20} className="mr-1" />
              <span>{languages.find(lang => lang.code === currentLang)?.name}</span>
            </button>
            <ul className="absolute right-0 mt-2 py-2 w-48 bg-gray-900 rounded-md shadow-xl z-20 hidden group-hover:block">
              {languages.map((lang) => (
                <li key={lang.code}>
                  <button
                    onClick={() => setCurrentLang(lang.code)}
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white w-full text-left transition duration-300"
                  >
                    {lang.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;