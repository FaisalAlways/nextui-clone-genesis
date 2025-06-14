
import { Zap, Palette, Shield, Code, Smartphone, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for performance with minimal bundle size and zero unnecessary dependencies.",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: Palette,
    title: "Beautiful Design",
    description: "Carefully crafted components with modern aesthetics and attention to detail.",
    gradient: "from-pink-400 to-purple-500"
  },
  {
    icon: Shield,
    title: "Type Safe",
    description: "Built with TypeScript from the ground up for better developer experience.",
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    icon: Code,
    title: "Developer First",
    description: "Clean APIs, comprehensive documentation, and extensive customization options.",
    gradient: "from-green-400 to-teal-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Responsive design that works flawlessly across all devices and screen sizes.",
    gradient: "from-purple-400 to-pink-500"
  },
  {
    icon: Globe,
    title: "Accessible",
    description: "WCAG 2.1 compliant components with full keyboard navigation support.",
    gradient: "from-indigo-400 to-blue-500"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Futuristic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
      
      <div className="relative max-w-[1440px] mx-auto px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl sm:text-6xl font-black mb-8 animate-fade-in">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Why Future DevOps?
            </span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto animate-fade-in delay-200 leading-relaxed">
            Built by developers, for developers. Every component is engineered with production-ready applications in mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-700 border-0 bg-white/5 backdrop-blur-xl hover:-translate-y-3 animate-fade-in overflow-hidden relative hover:shadow-blue-500/20"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-[1px] bg-gray-900/90 backdrop-blur-xl rounded-lg" />
                
                <CardContent className="p-10 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-blue-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
