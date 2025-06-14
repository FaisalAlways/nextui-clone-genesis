
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
    <section id="features" className="py-24 bg-gradient-to-br from-gray-50/50 to-blue-50/50 dark:from-gray-950/50 dark:to-blue-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-gray-900 to-blue-900 dark:from-gray-100 dark:to-blue-100 bg-clip-text text-transparent">
              Why Future DevOps?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto animate-fade-in delay-200 leading-relaxed">
            Built by developers, for developers. Every component is crafted with production-ready applications in mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:-translate-y-3 animate-fade-in overflow-hidden relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-8 relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
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
