import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Replace with your actual Stripe publishable key
const stripePromise = loadStripe('pk_test_your_publishable_key');

const StripeCheckout = ({ plan, duration, price }) => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    
    // Call your backend to create a Checkout Session
    const response = await fetch('/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ plan, duration, price }),
    });
    
    const session = await response.json();
    
    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    
    if (result.error) {
      // Handle any errors from Stripe
      console.error(result.error);
    }
  };

  return (
    <button onClick={handleCheckout} className="netflix-button w-full">
      Subscribe Now
    </button>
  );
};

export default StripeCheckout;