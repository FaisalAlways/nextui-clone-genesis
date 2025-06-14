
import { Github, Twitter, MessageCircle, Heart, Code, BookOpen, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      
      <div className="relative max-w-[1440px] mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
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
                <span className="text-sm text-gray-400 font-medium">UI Components</span>
              </div>
            </div>
            <p className="text-gray-300 mb-10 max-w-md text-lg leading-relaxed">
              Next-generation React UI components for modern applications. Built with accessibility, performance, and developer experience at the core.
            </p>
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
                <BookOpen className="w-5 h-5" />
              </Button>
            </div>
          </div>

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

        <div className="border-t border-white/10 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center">
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
