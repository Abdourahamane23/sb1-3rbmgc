import React from 'react';
import { translations } from '../translations';

const Hero = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="bg-cover bg-center h-screen flex items-center" style={{backgroundImage: 'url(https://source.unsplash.com/random/1920x1080?tv,movie)'}}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold mb-6 text-white shadow-text">{t.heroTitle}</h1>
        <p className="text-2xl mb-8 text-white shadow-text">{t.heroSubtitle}</p>
        <a href="#pricing" className="netflix-button text-xl">
          {t.getStarted}
        </a>
      </div>
    </section>
  );
};

export default Hero;