
import React from 'react';
import { Button } from '@/components/ui/button';

const PricingFooter = () => {
  return (
    <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-6 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Shaping a Zafer future</h2>
      <p className="text-lg mb-6 max-w-2xl mx-auto">
        Experience the future of digital transformation with Zafer. Get started with a free trial and unlock powerful features designed to streamline your workflow.
      </p>
      <Button 
        size="lg" 
        className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3"
      >
        Start Free Trial
      </Button>
    </div>
  );
};

export default PricingFooter;
