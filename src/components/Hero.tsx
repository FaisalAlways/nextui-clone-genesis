
import { ArrowRight, Play, Star, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
  return (
    <section className="relative py-24 lg:py-40 overflow-hidden">
      {/* Enhanced background with more sophisticated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse delay-500" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/50 dark:to-indigo-900/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 animate-fade-in shadow-lg">
          <Github className="w-4 h-4 mr-1 animate-spin-slow" />
          Open Source • MIT License
        </Badge>
        
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-8 animate-fade-in delay-200">
          <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 dark:from-gray-100 dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent leading-tight">
            Future DevOps
          </span>
        </h1>
        
        <p className="text-2xl sm:text-3xl font-light text-gray-700 dark:text-gray-300 mb-4 animate-fade-in delay-300">
          Professional React UI Components
        </p>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-400">
          Build modern applications with our comprehensive library of beautiful, accessible, and fully customizable React components. Designed for developers who demand excellence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in delay-500">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-10 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-xl shadow-blue-500/25">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg" className="px-10 py-4 text-lg font-semibold border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <Play className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
            View Components
          </Button>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12 text-sm text-gray-500 dark:text-gray-400 animate-fade-in delay-700">
          <div className="flex items-center space-x-3">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i} 
                  className="w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full border-3 border-white dark:border-gray-900 transform hover:scale-110 transition-transform duration-300 shadow-lg"
                  style={{ animationDelay: `${i * 100}ms` }}
                />
              ))}
            </div>
            <span className="font-medium">2000+ developers</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-pulse" />
            <span className="font-medium">MIT Licensed</span>
          </div>
          <div className="flex items-center space-x-2">
            <Github className="w-5 h-5" />
            <span className="font-medium">Open Source</span>
          </div>
        </div>
      </div>
    </section>
  );
};
