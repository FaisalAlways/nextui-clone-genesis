
import { Zap, Palette, Shield, Code, Smartphone, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Optimized for speed with minimal bundle size and maximum performance.",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: Palette,
    title: "Beautiful Design",
    description: "Carefully crafted components with attention to detail and modern aesthetics.",
    gradient: "from-pink-400 to-purple-500"
  },
  {
    icon: Shield,
    title: "Type Safe",
    description: "Built with TypeScript for better developer experience and fewer bugs.",
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Simple API with extensive documentation and examples.",
    gradient: "from-green-400 to-teal-500"
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Responsive design that works perfectly on all devices and screen sizes.",
    gradient: "from-purple-400 to-pink-500"
  },
  {
    icon: Globe,
    title: "Accessible",
    description: "Built with accessibility in mind, following WAI-ARIA guidelines.",
    gradient: "from-indigo-400 to-blue-500"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-white/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-gray-900 to-blue-900 dark:from-gray-100 dark:to-blue-100 bg-clip-text text-transparent">
              Why choose NextUI?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in delay-200">
            Everything you need to build modern web applications, with the developer experience you deserve.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
