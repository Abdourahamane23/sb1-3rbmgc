import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { translations } from '../translations';

const Footer = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <footer id="contact" className="bg-black text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-600">IPTVPLUSML</h3>
            <p className="mb-4">Experience the future of television with our premium IPTV service.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-600 transition duration-300"><Facebook size={24} /></a>
              <a href="#" className="hover:text-red-600 transition duration-300"><Twitter size={24} /></a>
              <a href="#" className="hover:text-red-600 transition duration-300"><Instagram size={24} /></a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-600">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-red-600 transition duration-300">{t.features}</a></li>
              <li><a href="#pricing" className="hover:text-red-600 transition duration-300">{t.pricing}</a></li>
              <li><a href="#" className="hover:text-red-600 transition duration-300">FAQ</a></li>
              <li><a href="#" className="hover:text-red-600 transition duration-300">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-600">{t.contact}</h3>
            <p className="mb-2">Email: support@iptvplusml.com</p>
            <p className="mb-2">Phone: +1 (555) 123-4567</p>
            <p>Address: 123 IPTV Street, Streamville, ST 12345</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2024 IPTVPLUSML. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;