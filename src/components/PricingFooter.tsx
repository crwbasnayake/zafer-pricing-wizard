
import React from 'react';
import { Button } from '@/components/ui/button';

const PricingFooter = () => {
  return (
    <div className="mt-16 text-center text-white">
      <h2 className="text-4xl font-bold mb-4">Shaping a Zafer future</h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
        Experience the future of digital transformation with Zafer. Get started with a free trial and unlock powerful features designed to streamline your workflow.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          size="lg" 
          className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Start Free Trial
        </Button>
        <Button 
          size="lg" 
          variant="outline"
          className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3 backdrop-blur-sm transition-all duration-300"
        >
          Request Demo
        </Button>
      </div>
    </div>
  );
};

export default PricingFooter;
