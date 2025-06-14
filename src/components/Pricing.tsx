
import { Check, Star, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Open Source",
    price: "Free",
    period: "forever",
    description: "Perfect for personal projects and learning",
    features: [
      "50+ React components",
      "Basic templates",
      "Community support",
      "MIT License",
      "Regular updates",
      "TypeScript support"
    ],
    popular: false,
    cta: "Get Started",
    github: true
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "Best for professional developers and teams",
    features: [
      "Everything in Open Source",
      "100+ Premium components",
      "Advanced templates",
      "Priority support",
      "Custom themes",
      "Figma design system",
      "Early access features",
      "Commercial license"
    ],
    popular: true,
    cta: "Start Free Trial",
    github: false
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "per month",
    description: "For large teams and organizations",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Custom components",
      "Dedicated support",
      "SLA guarantee",
      "Custom integrations",
      "On-premise deployment",
      "Training & consultation"
    ],
    popular: false,
    cta: "Contact Sales",
    github: false
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50/50 to-blue-50/50 dark:from-gray-950/50 dark:to-blue-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-blue-900 dark:from-gray-100 dark:to-blue-100 bg-clip-text text-transparent">
              Simple, transparent pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            Choose the plan that fits your needs. Start with our open-source components, upgrade when you need more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative hover:shadow-2xl transition-all duration-500 ${plan.popular ? 'ring-2 ring-blue-500 scale-105 shadow-blue-500/20' : ''} bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-0 shadow-lg hover:-translate-y-1`}>
              {plan.popular && (
                <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 text-sm font-semibold">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className="flex items-center justify-center mb-4">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  {plan.github && <Github className="w-5 h-5 ml-2 text-gray-600 dark:text-gray-400" />}
                </div>
                <div className="mt-4">
                  <span className="text-5xl font-black">{plan.price}</span>
                  {plan.price !== "Free" && <span className="text-gray-600 dark:text-gray-400 ml-2 text-lg">/{plan.period}</span>}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">{plan.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full text-lg py-3 font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl' 
                      : 'bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900 hover:shadow-xl'
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            All paid plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};
