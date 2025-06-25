
import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PricingCardProps {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  yearlyDiscount?: string;
  storage: string;
  features: {
    [key: string]: boolean | string;
  };
  isPopular?: boolean;
  isEnterprise?: boolean;
  isYearly: boolean;
  slogan: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  monthlyPrice,
  yearlyPrice,
  yearlyDiscount,
  storage,
  features,
  isPopular,
  isEnterprise,
  isYearly,
  slogan
}) => {
  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <X className="w-4 h-4 text-red-500" />
      );
    }
    return <span className="text-sm text-gray-600">{value}</span>;
  };

  return (
    <Card className={`relative ${isPopular ? 'border-blue-500 border-2' : ''} ${isEnterprise ? 'bg-gradient-to-br from-purple-50 to-blue-50' : ''}`}>
      {isPopular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
          Most Popular
        </Badge>
      )}
      
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
        <p className="text-sm text-gray-600 mt-2">{slogan}</p>
        
        <div className="mt-4">
          {!isEnterprise ? (
            <>
              <div className="text-3xl font-bold">
                {isYearly ? yearlyPrice : monthlyPrice}
                {!isYearly && monthlyPrice !== 'Free' && <span className="text-sm text-gray-500">/month</span>}
              </div>
              
              {isYearly && yearlyDiscount && (
                <div className="text-sm text-green-600 font-medium mt-1">
                  {yearlyDiscount}
                </div>
              )}
            </>
          ) : (
            <div className="text-3xl font-bold text-purple-600">Custom</div>
          )}
        </div>
        
        <div className="text-sm text-gray-600 mt-2">
          Storage: {storage}
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {Object.entries(features).map(([feature, value]) => (
          <div key={feature} className="flex items-center justify-between">
            <span className="text-sm">{feature}</span>
            {renderFeatureValue(value)}
          </div>
        ))}
        
        <Button 
          className={`w-full mt-6 ${isEnterprise ? 'bg-purple-600 hover:bg-purple-700' : isPopular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
          variant={isEnterprise || isPopular ? 'default' : 'outline'}
        >
          {isEnterprise ? 'Contact Sales' : name === 'Starter' ? 'Get Started Free' : 'Choose Plan'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
