
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface PricingToggleProps {
  isYearly: boolean;
  onToggle: (isYearly: boolean) => void;
}

const PricingToggle: React.FC<PricingToggleProps> = ({ isYearly, onToggle }) => {
  return (
    <div className="flex justify-center mb-8">
      <ToggleGroup 
        type="single" 
        value={isYearly ? "yearly" : "monthly"}
        onValueChange={(value) => onToggle(value === "yearly")}
        className="bg-gray-100 p-1 rounded-lg"
      >
        <ToggleGroupItem 
          value="monthly" 
          className="px-6 py-2 rounded-md data-[state=on]:bg-white data-[state=on]:shadow-sm"
        >
          Monthly
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="yearly" 
          className="px-6 py-2 rounded-md data-[state=on]:bg-white data-[state=on]:shadow-sm"
        >
          Yearly <span className="ml-2 text-green-600 font-medium">(Save up to 50%)</span>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default PricingToggle;
