import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { translations } from '../translations';
import StripeCheckout from './StripeCheckout';

const plans = [
  {
    name: 'Standard Plan',
    prices: {
      Monthly: 10,
      '3 Months': 27,
      '6 Months': 51,
      Yearly: 90
    },
    features: [
      'Access to a broad range of live TV channels',
      'High definition (HD) streaming',
      'Access on 2 devices simultaneously',
      'DVR features (up to 100 hours of recording)',
      'Some VOD (Video On Demand) content'
    ]
  },
  {
    name: 'Premium Plan',
    prices: {
      Monthly: 17.5,
      '3 Months': 47.25,
      '6 Months': 89.25,
      Yearly: 157.5
    },
    features: [
      'Full access to all live TV channels',
      'Ultra HD/4K streaming',
      'Access on up to 4 devices simultaneously',
      'Unlimited DVR recording',
      'Exclusive VOD content (movies, series)'
    ]
  }
];

const Pricing = ({ currentLang }) => {
  const [selectedDuration, setSelectedDuration] = useState('Monthly');
  const t = translations[currentLang];

  const getDiscount = (plan) => {
    const monthlyPrice = plan.prices.Monthly;
    const currentPrice = plan.prices[selectedDuration];
    const months = selectedDuration === 'Yearly' ? 12 : parseInt(selectedDuration);
    const discount = ((monthlyPrice * months - currentPrice) / (monthlyPrice * months)) * 100;
    return `Save ${discount.toFixed(0)}%`;
  };

  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-red-600">{t.choosePlan}</h2>
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {['Monthly', '3 Months', '6 Months', 'Yearly'].map((duration) => (
              <button
                key={duration}
                type="button"
                className={`px-4 py-2 text-sm font-medium ${
                  selectedDuration === duration
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                } border border-gray-700 ${
                  duration === 'Monthly' ? 'rounded-l-lg' : ''
                } ${duration === 'Yearly' ? 'rounded-r-lg' : ''}`}
                onClick={() => setSelectedDuration(duration)}
              >
                {duration}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="netflix-card p-8">
              <h3 className="text-2xl font-bold mb-4 text-red-600">{plan.name}</h3>
              <p className="text-4xl font-bold mb-2">
                ${plan.prices[selectedDuration].toFixed(2)}
                <span className="text-sm font-normal text-gray-400">
                  /{selectedDuration.toLowerCase()}
                </span>
              </p>
              {selectedDuration !== 'Monthly' && (
                <p className="text-sm text-green-500 mb-4">{getDiscount(plan)}</p>
              )}
              <ul className="mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2 text-gray-300">
                    <Check size={20} className="text-red-600 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <StripeCheckout
                plan={plan.name}
                duration={selectedDuration}
                price={plan.prices[selectedDuration]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;