import React, { useState, lazy, Suspense } from 'react';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';

const Hero = lazy(() => import('./components/Hero'));
const Features = lazy(() => import('./components/Features'));
const Pricing = lazy(() => import('./components/Pricing'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [currentLang, setCurrentLang] = useState('en');

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-black text-white">
        <Header currentLang={currentLang} setCurrentLang={setCurrentLang} />
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <Hero currentLang={currentLang} />
          <Features currentLang={currentLang} />
          <Pricing currentLang={currentLang} />
          <Footer currentLang={currentLang} />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;