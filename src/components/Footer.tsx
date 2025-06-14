
import { Github, Twitter, MessageCircle, Heart, Code, BookOpen, Globe, Users, Mail, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const footerLinks = {
  Product: ["Documentation", "Components", "Templates", "Examples", "Playground"],
  Resources: ["Blog", "Changelog", "Roadmap", "Brand Kit", "Contributing"],
  Community: ["GitHub", "Discord", "Twitter", "Stack Overflow", "Discussions"],
  Company: ["About", "Careers", "Contact", "Privacy", "Terms"]
};

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Futuristic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950 to-indigo-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.1),transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-8 py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-40" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Future DevOps</span>
                <span className="text-sm text-gray-400 font-medium">UI Component Library</span>
              </div>
            </div>
            <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
              A modern open-source UI component library for React. Built by developers, for developers, with accessibility and performance at the core.
            </p>
            
            {/* License Badge */}
            <div className="mb-8">
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30 px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                MIT Licensed
              </Badge>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10">
                <MessageCircle className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold mb-8 text-xl text-white">{category}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline text-lg hover:translate-x-1 transform transition-transform">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">Get notified about new components, features, and updates.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-lg">
            © 2024 Future DevOps. All rights reserved.
          </p>
          <div className="flex items-center text-gray-400 text-lg mt-6 md:mt-0">
            <span>Made with</span>
            <Heart className="w-5 h-5 mx-2 text-red-400 fill-current animate-pulse" />
            <span>for the open source community</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
