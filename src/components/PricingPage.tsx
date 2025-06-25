import React from 'react';
import PricingCard from './PricingCard';
import PricingToggle from './PricingToggle';
import PricingFAQ from './PricingFAQ';
import PricingFooter from './PricingFooter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

const PricingPage = () => {
  const [isYearly, setIsYearly] = React.useState(false);

  const pricingData = [
    {
      name: 'Starter',
      monthlyPrice: 'Free',
      yearlyPrice: 'Free',
      storage: '2GB (~$0.05)',
      slogan: 'Perfect for trying out Zafer\'s core features',
      features: {
        'My Files': true,
        'Scanner': true,
        'Quick Sign': true,
        'e-Sign': '1/month',
        'No of Users': '1',
        'AI Grammar Correction': false,
        'AI Summary': false,
        'Templates': false,
        'Bulk Sign': false,
        'AI Search / Document Chat': false,
        'Token / Msg Limit': false,
        'Team Vault & Management': false,
        'Role-based Permissions': false,
        'Delegation / Sendback': false,
        'Support': 'Self-help only',
        'API & SDK Access': false,
        'Custom Branding & Hosting': false,
      },
      isPopular: false,
      isEnterprise: false,
    },
    {
      name: 'Individual',
      monthlyPrice: '$9.99',
      yearlyPrice: '$59.99',
      yearlyDiscount: '(4.99$/m) 50% off',
      storage: '10GB (~$0.23)',
      slogan: 'Essential features for individual productivity',
      features: {
        'My Files': true,
        'Scanner': true,
        'Quick Sign': true,
        'e-Sign': '20/month',
        'No of Users': '1',
        'AI Grammar Correction': true,
        'AI Summary': true,
        'Templates': false,
        'Bulk Sign': false,
        'AI Search / Document Chat': false,
        'Token / Msg Limit': '100',
        'Team Vault & Management': false,
        'Role-based Permissions': false,
        'Delegation / Sendback': false,
        'Support': 'Email (72h)',
        'API & SDK Access': false,
        'Custom Branding & Hosting': false,
      },
      isPopular: false,
      isEnterprise: false,
    },
    {
      name: 'Professional',
      monthlyPrice: '$19.99',
      yearlyPrice: '$149.99',
      yearlyDiscount: '(12.49$/m) 37.5% off',
      storage: '40GB (~$0.92)',
      slogan: 'Advanced features for power users and professionals',
      features: {
        'My Files': true,
        'Scanner': true,
        'Quick Sign': true,
        'e-Sign': '50/month',
        'No of Users': '1',
        'AI Grammar Correction': true,
        'AI Summary': true,
        'Templates': true,
        'Bulk Sign': true,
        'AI Search / Document Chat': true,
        'Token / Msg Limit': '250',
        'Team Vault & Management': false,
        'Role-based Permissions': false,
        'Delegation / Sendback': false,
        'Support': 'Email (72h)',
        'API & SDK Access': false,
        'Custom Branding & Hosting': false,
      },
      isPopular: true,
      isEnterprise: false,
    },
    {
      name: 'Team/Business',
      monthlyPrice: '$39.99',
      yearlyPrice: '$359.99',
      yearlyDiscount: '(29.99$/m) 25% off',
      storage: '100GB/user (~$2.30)',
      slogan: 'Complete solution for small to medium teams',
      features: {
        'My Files': true,
        'Scanner': true,
        'Quick Sign': true,
        'e-Sign': true,
        'No of Users': '2-30',
        'No of Signers': '5 Signers / 1 BUL ($10 per each signer)',
        'AI Grammar Correction': true,
        'AI Summary': true,
        'Templates': true,
        'Bulk Sign': true,
        'AI Search / Document Chat': true,
        'Token / Msg Limit': '1000',
        'Team Vault & Management': true,
        'Role-based Permissions': true,
        'Delegation / Sendback': true,
        'Support': 'Priority Email (24h)',
        'API & SDK Access': false,
        'Custom Branding & Hosting': false,
      },
      isPopular: false,
      isEnterprise: false,
    },
    {
      name: 'Enterprise',
      monthlyPrice: 'Contact us',
      yearlyPrice: 'Contact us',
      storage: 'Contact us',
      slogan: 'Tailored solutions for large organizations',
      features: {
        'My Files': true,
        'Scanner': true,
        'Quick Sign': true,
        'e-Sign': true,
        'No of Users': 'Contact us',
        'AI Grammar Correction': true,
        'AI Summary': true,
        'Templates': true,
        'Bulk Sign': true,
        'AI Search / Document Chat': true,
        'Token / Msg Limit': 'Contact us',
        'Team Vault & Management': true,
        'Role-based Permissions': true,
        'Delegation / Sendback': true,
        'Support': '24×7 Support',
        'API & SDK Access': true,
        'Custom Branding & Hosting': true,
      },
      isPopular: false,
      isEnterprise: true,
    },
  ];

  const comparisonFeatures = [
    'My Files',
    'Scanner',
    'Quick Sign',
    'e-Sign',
    'No of Users',
    'AI Grammar Correction',
    'AI Summary',
    'Templates',
    'Bulk Sign',
    'AI Search / Document Chat',
    'Token / Msg Limit',
    'Team Vault & Management',
    'Role-based Permissions',
    'Delegation / Sendback',
    'Support',
    'API & SDK Access',
    'Custom Branding & Hosting',
  ];

  const renderComparisonValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-500 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-red-500 mx-auto" />
      );
    }
    return <span className="text-sm text-center block">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose the perfect plan for you
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Explore Zafer's packages tailored for individuals, small businesses, and enterprise clients. From data privacy and security to AI-powered solutions, each plan offers secure, seamless workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
            >
              Request Demo
            </Button>
          </div>
        </div>

        {/* Monthly/Yearly Toggle */}
        <PricingToggle isYearly={isYearly} onToggle={setIsYearly} />

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {pricingData.map((plan, index) => (
            <PricingCard key={index} {...plan} isYearly={isYearly} />
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Feature Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold">Features</th>
                      {pricingData.map((plan) => (
                        <th key={plan.name} className="text-center py-3 px-4 font-semibold min-w-32">
                          {plan.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature) => (
                      <tr key={feature} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{feature}</td>
                        {pricingData.map((plan) => (
                          <td key={`${plan.name}-${feature}`} className="py-3 px-4 text-center">
                            {renderComparisonValue(plan.features[feature])}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <PricingFAQ />

        {/* Footer */}
        <PricingFooter />
      </div>
    </div>
  );
};

export default PricingPage;
