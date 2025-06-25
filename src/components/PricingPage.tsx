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

  const freePlan = {
    name: 'Starter',
    monthlyPrice: 'Free',
    yearlyPrice: 'Free',
    storage: '2GB (~$0.05)',
    slogan: 'Perfect for trying out Zafer\'s core features',
    availableFeatures: [
      'My Files',
      'Scanner', 
      'Quick Sign',
      '1 User',
      'Self-help only Support'
    ],
    isPopular: false,
    isEnterprise: false,
  };

  const paidPlans = [
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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-purple-700" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Choose the perfect plan for you
          </h1>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            Explore Zafer's packages tailored for individuals, small businesses, and enterprise clients. From data privacy and security to AI-powered solutions, each plan offers secure, seamless workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3"
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3"
            >
              Request Demo
            </Button>
          </div>
        </div>

        {/* Free Plan Section */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Try Zafer for Free</h2>
            <p className="text-white/80">Get started with our core features at no cost</p>
          </div>
          
          <div className="max-w-md mx-auto">
            <Card className="bg-white/95 backdrop-blur-lg border-0 shadow-2xl transition-all duration-300 hover:shadow-3xl hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-gray-800">{freePlan.name}</CardTitle>
                <p className="text-sm text-gray-600 mt-2">{freePlan.slogan}</p>
                
                <div className="mt-4">
                  <div className="text-4xl font-bold text-purple-600">Free</div>
                  <div className="text-lg text-green-600 font-medium mt-1">Forever</div>
                </div>
                
                <div className="text-sm text-gray-600 mt-2">
                  Storage: {freePlan.storage}
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">What's included:</h4>
                  {freePlan.availableFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full mt-6 font-semibold transition-all duration-300 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-transparent"
                  variant="outline"
                >
                  Get Started Free
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Monthly/Yearly Toggle */}
        <PricingToggle isYearly={isYearly} onToggle={setIsYearly} />

        {/* Paid Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {paidPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} isYearly={isYearly} />
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-16">
          <Card className="bg-white/95 backdrop-blur-lg border-0 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-gray-800">Feature Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-4 font-semibold text-gray-800">Features</th>
                      {paidPlans.map((plan) => (
                        <th key={plan.name} className="text-center py-4 px-4 font-semibold min-w-32 text-gray-800">
                          {plan.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature, index) => (
                      <tr key={feature} className={`border-b hover:bg-gray-50 ${index % 2 === 0 ? 'bg-gray-50/50' : ''}`}>
                        <td className="py-3 px-4 font-medium text-gray-700">{feature}</td>
                        {paidPlans.map((plan) => (
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
