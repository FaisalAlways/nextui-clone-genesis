
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, Eye, Code2 } from "lucide-react";

const examples = [
  {
    title: "Dashboard Template",
    description: "A complete admin dashboard with charts, tables, and responsive layout.",
    image: "bg-gradient-to-br from-blue-500 to-purple-600",
    tags: ["Dashboard", "Charts", "Tables"],
    difficulty: "Advanced",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Landing Page",
    description: "Modern landing page with hero section, features, and pricing.",
    image: "bg-gradient-to-br from-green-500 to-teal-600",
    tags: ["Marketing", "Landing", "SaaS"],
    difficulty: "Intermediate",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "E-commerce Shop",
    description: "Product catalog with shopping cart and checkout flow.",
    image: "bg-gradient-to-br from-purple-500 to-pink-600",
    tags: ["E-commerce", "Shopping", "Payment"],
    difficulty: "Advanced",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Blog Platform",
    description: "Clean blog layout with article pages and author profiles.",
    image: "bg-gradient-to-br from-orange-500 to-red-600",
    tags: ["Blog", "Content", "CMS"],
    difficulty: "Beginner",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Chat Application",
    description: "Real-time messaging interface with user presence indicators.",
    image: "bg-gradient-to-br from-cyan-500 to-blue-600",
    tags: ["Chat", "Real-time", "WebSocket"],
    difficulty: "Advanced",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio with project showcase and contact form.",
    image: "bg-gradient-to-br from-indigo-500 to-purple-600",
    tags: ["Portfolio", "Personal", "Showcase"],
    difficulty: "Beginner",
    liveUrl: "#",
    githubUrl: "#"
  }
];

const Examples = () => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Intermediate": return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "Advanced": return "bg-red-500/20 text-red-300 border-red-500/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(168,85,247,0.3),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl sm:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent">
              Examples & Templates
            </span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Real-world examples and templates built with Future DevOps components to kickstart your next project.
          </p>
        </div>
      </section>

      {/* Examples Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900" />
        
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examples.map((example, index) => (
              <Card key={index} className="group bg-white/5 backdrop-blur-xl border-0 hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-[1px] bg-gray-900/90 backdrop-blur-xl rounded-lg" />
                
                <div className="relative z-10">
                  {/* Preview Image */}
                  <div className={`h-48 ${example.image} relative group-hover:scale-105 transition-transform duration-700 overflow-hidden flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="relative z-10 flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button variant="ghost" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                      <Button variant="ghost" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                        <Code2 className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-white text-xl group-hover:text-purple-300 transition-colors duration-300">
                        {example.title}
                      </CardTitle>
                      <Badge className={getDifficultyColor(example.difficulty)}>
                        {example.difficulty}
                      </Badge>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {example.description}
                    </p>
                  </CardHeader>

                  <CardContent>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {example.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-3">
                      <Button 
                        variant="outline" 
                        className="flex-1 border-white/20 text-white hover:bg-white/10 group-hover:scale-105 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button 
                        variant="ghost" 
                        className="border border-white/20 text-white hover:bg-white/10 group-hover:scale-105 transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <Card className="bg-white/5 backdrop-blur-xl border-0 max-w-2xl mx-auto">
              <CardContent className="p-12 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Want to Contribute an Example?
                </h3>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Share your amazing projects built with Future DevOps and help other developers learn.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:scale-105 transition-all duration-300 px-8 py-3 font-bold">
                    <Github className="w-5 h-5 mr-3" />
                    Submit Example
                  </Button>
                  <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-3 font-bold hover:scale-105 transition-all duration-300">
                    <Star className="w-5 h-5 mr-3" />
                    Browse GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Examples;
