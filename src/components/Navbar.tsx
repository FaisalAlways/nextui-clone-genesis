
import { useState } from "react";
import { Menu, X, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                NextUI
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Docs</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Components</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Templates</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Examples</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <Twitter className="w-5 h-5" />
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-gray-200">
            <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Docs</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Components</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Templates</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Examples</a>
            <div className="pt-2">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
