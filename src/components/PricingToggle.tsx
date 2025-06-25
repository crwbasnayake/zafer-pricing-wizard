
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface PricingToggleProps {
  isYearly: boolean;
  onToggle: (isYearly: boolean) => void;
}

const PricingToggle: React.FC<PricingToggleProps> = ({ isYearly, onToggle }) => {
  return (
    <div className="flex justify-center items-center gap-4 mb-12">
      <span className="text-white/90">Monthly</span>
      <div className="bg-white/20 backdrop-blur-lg rounded-full p-1 border border-white/20">
        <ToggleGroup 
          type="single" 
          value={isYearly ? "yearly" : "monthly"}
          onValueChange={(value) => onToggle(value === "yearly")}
          className="bg-transparent"
        >
          <ToggleGroupItem 
            value="monthly" 
            className="px-6 py-2 rounded-full text-white data-[state=on]:bg-white data-[state=on]:text-purple-600 data-[state=on]:shadow-lg transition-all duration-300 border-0"
          >
            Monthly
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="yearly" 
            className="px-6 py-2 rounded-full text-white data-[state=on]:bg-white data-[state=on]:text-purple-600 data-[state=on]:shadow-lg transition-all duration-300 border-0"
          >
            Yearly
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <span className="text-white/90">Yearly</span>
      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
        Save up to 50%
      </span>
    </div>
  );
};

export default PricingToggle;
