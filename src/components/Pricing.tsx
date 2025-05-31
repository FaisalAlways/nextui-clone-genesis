
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for personal projects and learning",
    features: [
      "50+ React components",
      "Basic templates",
      "Community support",
      "MIT License",
      "Regular updates"
    ],
    popular: false,
    cta: "Get Started"
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "Best for professional developers and teams",
    features: [
      "Everything in Free",
      "100+ Premium components",
      "Advanced templates",
      "Priority support",
      "Custom themes",
      "Figma resources",
      "Early access to new features"
    ],
    popular: true,
    cta: "Start Free Trial"
  },
  {
    name: "Team",
    price: "$49",
    period: "per month",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Team collaboration tools",
      "Custom components",
      "Dedicated support",
      "SLA guarantee",
      "Custom integrations"
    ],
    popular: false,
    cta: "Contact Sales"
  }
];

export const Pricing = () => {
  return (
    <section className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
              Simple, transparent pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that's right for you and start building amazing interfaces today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''} bg-white/80 backdrop-blur-sm`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};
