
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PricingFAQ = () => {
  const faqs = [
    {
      question: "How many users can I add in a business plan?",
      answer: "You can add between 2-30 users (including yourself) in your business plan. For larger teams, please consider our Enterprise plan."
    },
    {
      question: "Does Zafer include a free trial package?",
      answer: "Yes! We offer a free trial for all our paid plans. You can start your trial without requiring credit card details to lower the entry barrier and improve your experience."
    },
    {
      question: "Is it possible to get a custom package?",
      answer: "Absolutely! Our Enterprise plan offers custom solutions tailored to your organization's specific needs. Contact our sales team to discuss your requirements."
    },
    {
      question: "Can Zafer be integrated to our in-house system?",
      answer: "Yes, Zafer offers API & SDK access with our Enterprise plan, allowing seamless integration with your existing systems and workflows."
    }
  ];

  return (
    <div className="mt-16">
      <Card className="bg-white/95 backdrop-blur-lg border-0 shadow-2xl">
        <CardHeader>
          <CardTitle className="text-3xl text-center text-gray-800">Zafer Pricing FAQ's</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default PricingFAQ;
