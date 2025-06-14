
import { ArrowRight, Play, Star, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      {/* Futuristic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,0.05)_50%,transparent_65%)] animate-pulse" />
      
      {/* Floating particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-700" />
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse delay-1000" />
      
      <div className="relative max-w-[1440px] mx-auto px-8 text-center">
        <Badge className="mb-8 bg-white/10 backdrop-blur-sm text-white border-white/20 animate-fade-in shadow-lg hover:scale-105 transition-transform duration-300">
          <Sparkles className="w-4 h-4 mr-1 animate-spin-slow" />
          Open Source • MIT License
        </Badge>
        
        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black mb-8 animate-fade-in delay-200">
          <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
            Future DevOps
          </span>
        </h1>
        
        <p className="text-3xl sm:text-4xl font-light text-gray-300 mb-6 animate-fade-in delay-300">
          Professional React UI Components
        </p>
        
        <p className="text-xl text-gray-400 mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-400">
          Build next-generation applications with our cutting-edge library of beautiful, accessible, and fully customizable React components. Engineered for developers who demand perfection.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in delay-500">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-12 py-6 text-xl font-bold transform hover:scale-105 transition-all duration-300 hover:shadow-2xl shadow-blue-500/25 border-0">
            Get Started
            <ArrowRight className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg" className="px-12 py-6 text-xl font-bold border-2 border-white/20 hover:border-white/40 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl bg-white/10 backdrop-blur-sm text-white hover:bg-white/20">
            <Play className="w-6 h-6 mr-3 transition-transform group-hover:scale-110" />
            View Components
          </Button>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-16 text-lg text-gray-300 animate-fade-in delay-700">
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i} 
                  className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-3 border-gray-900 transform hover:scale-110 transition-transform duration-300 shadow-lg animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                />
              ))}
            </div>
            <span className="font-bold">2000+ developers</span>
          </div>
          <div className="flex items-center space-x-3">
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 animate-pulse" />
            <span className="font-bold">MIT Licensed</span>
          </div>
          <div className="flex items-center space-x-3">
            <Github className="w-6 h-6" />
            <span className="font-bold">Open Source</span>
          </div>
        </div>
      </div>
    </section>
  );
};
