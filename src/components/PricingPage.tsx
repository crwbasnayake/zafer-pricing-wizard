
import React from 'react';
import PricingCard from './PricingCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

const PricingPage = () => {
  const pricingData = [
    {
      name: 'Starter',
      monthlyPrice: 'Free',
      yearlyPrice: 'Free',
      storage: '2GB (~$0.05)',
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
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From individual users to enterprise teams, we have the right solution for your document management and e-signature needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {pricingData.map((plan, index) => (
            <PricingCard key={index} {...plan} />
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

        {/* FAQ or Additional Info Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-gray-600 mb-6">
            Our team is here to help you find the perfect plan for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Contact Sales
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
