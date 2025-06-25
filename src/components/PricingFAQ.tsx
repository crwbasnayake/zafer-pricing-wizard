
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
      <h2 className="text-3xl font-bold text-center mb-8">Zafer Pricing FAQ's</h2>
      <div className="grid gap-6 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{faq.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{faq.answer}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PricingFAQ;
