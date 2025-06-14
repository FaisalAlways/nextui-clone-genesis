
import { Github, Twitter, MessageCircle, Heart, Code, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Product: ["Documentation", "Components", "Templates", "Examples", "Playground"],
  Resources: ["Blog", "Changelog", "Roadmap", "Brand Kit", "Contributing"],
  Community: ["GitHub", "Discord", "Twitter", "Stack Overflow", "Discussions"],
  Company: ["About", "Careers", "Contact", "Privacy", "Terms"]
};

export const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-30" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">Future DevOps</span>
                <span className="text-xs text-gray-400 font-medium">UI Components</span>
              </div>
            </div>
            <p className="text-gray-400 mb-8 max-w-md text-lg leading-relaxed">
              Professional React UI components for modern applications. Built with accessibility, performance, and developer experience in mind.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300 hover:scale-110">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300 hover:scale-110">
                <MessageCircle className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300 hover:scale-110">
                <BookOpen className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold mb-6 text-lg">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Future DevOps. All rights reserved.
          </p>
          <div className="flex items-center text-gray-400 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-500 fill-current animate-pulse" />
            <span>for the open source community</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
