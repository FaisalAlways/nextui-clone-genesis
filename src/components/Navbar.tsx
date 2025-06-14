
import { useState } from "react";
import { Menu, X, Github, BookOpen, Sun, Moon, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTheme } from "@/components/ThemeProvider";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 transition-all duration-300 shadow-2xl bg-gray-900/80">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-10">
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  Future DevOps
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  UI Components
                </span>
              </div>
            </Link>
            
            <div className="hidden md:flex space-x-10">
              <Link to="/docs" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative font-medium text-lg after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-400 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                Documentation
              </Link>
              <a href="#components" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative font-medium text-lg after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-400 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                Components
              </a>
              <a href="#examples" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative font-medium text-lg after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-400 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                Examples
              </a>
              <a href="#community" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative font-medium text-lg after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-400 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                Community
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" size="sm" onClick={toggleTheme} className="hover:scale-110 transition-all duration-300 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 backdrop-blur-sm">
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>
            <Button variant="ghost" size="sm" className="hover:scale-110 transition-all duration-300 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 backdrop-blur-sm">
              <BookOpen className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:scale-110 transition-all duration-300 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 backdrop-blur-sm">
              <Github className="w-5 h-5" />
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 hover:shadow-2xl font-bold text-lg px-8 py-3 border-0">
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:scale-110 transition-all duration-300 text-white hover:bg-white/10"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-8 space-y-6 border-t border-white/10 animate-fade-in backdrop-blur-xl">
            <Link to="/docs" className="block py-4 text-gray-300 hover:text-white transition-colors duration-300 font-medium text-lg">Documentation</Link>
            <a href="#components" className="block py-4 text-gray-300 hover:text-white transition-colors duration-300 font-medium text-lg">Components</a>
            <a href="#examples" className="block py-4 text-gray-300 hover:text-white transition-colors duration-300 font-medium text-lg">Examples</a>
            <a href="#community" className="block py-4 text-gray-300 hover:text-white transition-colors duration-300 font-medium text-lg">Community</a>
            <div className="pt-6 flex flex-col space-y-4">
              <Button variant="ghost" size="sm" onClick={toggleTheme} className="justify-start hover:scale-105 transition-all duration-300 text-gray-300 hover:text-white hover:bg-white/10">
                {theme === 'light' ? <Moon className="w-5 h-5 mr-3" /> : <Sun className="w-5 h-5 mr-3" />}
                Toggle Theme
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition-all duration-300 font-bold text-lg py-3">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
