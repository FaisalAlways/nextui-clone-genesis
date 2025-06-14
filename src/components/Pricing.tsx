
import { Check, Star, Github, Zap, Crown, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Open Source",
    price: "Free",
    period: "forever",
    description: "Perfect for personal projects and learning",
    icon: Github,
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
    gradient: "from-slate-600 to-slate-800",
    glowColor: "slate"
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "Best for professional developers and teams",
    icon: Zap,
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
    gradient: "from-blue-600 to-indigo-600",
    glowColor: "blue"
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "per month",
    description: "For large teams and organizations",
    icon: Crown,
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
    gradient: "from-purple-600 to-pink-600",
    glowColor: "purple"
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      {/* Futuristic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,0.05)_50%,transparent_65%)] animate-pulse" />
      
      <div className="relative max-w-[1440px] mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Rocket className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-white">Pricing Plans</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-black mb-6 text-white">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Future
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Unlock the power of modern UI development with our comprehensive component library
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={index} 
                className={`group relative hover:shadow-2xl transition-all duration-700 border-0 overflow-hidden ${
                  plan.popular 
                    ? 'scale-110 shadow-blue-500/25' 
                    : 'hover:scale-105'
                } bg-white/10 backdrop-blur-xl hover:-translate-y-2`}
              >
                {/* Animated border gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                <div className="absolute inset-[1px] bg-gray-900/90 backdrop-blur-xl rounded-lg" />
                
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 text-sm font-bold border-0 shadow-lg">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="relative z-10 text-center pb-8 pt-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-white mb-2">{plan.name}</CardTitle>
                  
                  <div className="mt-4">
                    <span className="text-5xl font-black text-white">{plan.price}</span>
                    {plan.price !== "Free" && (
                      <span className="text-gray-400 ml-2 text-lg">/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-300 mt-4 text-lg leading-relaxed">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="relative z-10 px-8 pb-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-white font-bold" />
                        </div>
                        <span className="text-gray-200 ml-3 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full text-lg py-6 font-bold transition-all duration-500 hover:scale-105 border-0 ${
                      plan.popular 
                        ? `bg-gradient-to-r ${plan.gradient} hover:shadow-2xl hover:shadow-blue-500/25 text-white` 
                        : `bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 backdrop-blur-sm`
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="text-gray-300 text-lg">✨ All paid plans include a 14-day free trial</span>
          </div>
        </div>
      </div>
    </section>
  );
};
