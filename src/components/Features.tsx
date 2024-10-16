import React from 'react';
import { Tv, Globe, Clock, Smartphone } from 'lucide-react';
import { translations } from '../translations';

const features = [
  { icon: Tv, title: 'Thousands of Channels', description: 'Access a vast library of international channels.' },
  { icon: Globe, title: 'Global Content', description: 'Enjoy content from around the world in multiple languages.' },
  { icon: Clock, title: '24/7 Support', description: 'Our team is always available to assist you.' },
  { icon: Smartphone, title: 'Multi-device Support', description: 'Watch on your TV, computer, tablet, or smartphone.' },
];

const Features = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="features" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-red-600">{t.whyChoose}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center netflix-card p-6">
              <feature.icon size={48} className="mx-auto mb-4 text-red-600" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;