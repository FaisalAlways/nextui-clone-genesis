
import { ArrowRight, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/30 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border-blue-200">
          <Star className="w-4 h-4 mr-1 fill-current" />
          New in v2.4.0
        </Badge>
        
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
            Beautiful, fast and
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            modern React UI
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Make beautiful websites regardless of your design experience. NextUI provides a simple, modular and accessible component library that gives you the building blocks you need.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-3 text-lg">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-gray-300 hover:border-blue-300">
            <Play className="w-5 h-5 mr-2" />
            Watch Demo
          </Button>
        </div>
        
        <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full border-2 border-white" />
              ))}
            </div>
            <span>1000+ developers</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>4.9/5 rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};
