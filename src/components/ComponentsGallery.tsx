
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, Eye, Code, Sparkles } from "lucide-react";

export const ComponentsGallery = () => {
  return (
    <section id="gallery" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.1),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-white">Components Gallery</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-black mb-8 animate-fade-in">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Live Component Previews
            </span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto animate-fade-in delay-200 leading-relaxed">
            Explore our comprehensive component library with interactive examples.
          </p>
        </div>

        {/* Component Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Buttons */}
          <Card className="bg-white/5 backdrop-blur-xl border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Buttons</h3>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  Interactive
                </Badge>
              </div>
              <div className="space-y-4">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition-transform">
                  Primary Button
                </Button>
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                  Outline Button
                </Button>
                <Button variant="ghost" className="w-full text-white hover:bg-white/10">
                  Ghost Button
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Form Elements */}
          <Card className="bg-white/5 backdrop-blur-xl border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Form Elements</h3>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  Functional
                </Badge>
              </div>
              <div className="space-y-4">
                <Input placeholder="Enter your email" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                <Textarea placeholder="Your message..." className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 resize-none" />
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Dark Mode</span>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Progress & Status */}
          <Card className="bg-white/5 backdrop-blur-xl border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Progress</h3>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  Animated
                </Badge>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Loading</span>
                    <span className="text-gray-300">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      FD
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-white font-medium">Future DevOps</div>
                    <div className="text-gray-400 text-sm">Component Library</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Card className="bg-white/5 backdrop-blur-xl border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group lg:col-span-2">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Navigation Tabs</h3>
                <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                  Responsive
                </Badge>
              </div>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-white/10">
                  <TabsTrigger value="overview" className="text-white data-[state=active]:bg-white/20">Overview</TabsTrigger>
                  <TabsTrigger value="features" className="text-white data-[state=active]:bg-white/20">Features</TabsTrigger>
                  <TabsTrigger value="docs" className="text-white data-[state=active]:bg-white/20">Docs</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-4">
                  <p className="text-gray-300">Comprehensive component library for modern web applications.</p>
                </TabsContent>
                <TabsContent value="features" className="mt-4">
                  <p className="text-gray-300">Accessible, customizable, and developer-friendly components.</p>
                </TabsContent>
                <TabsContent value="docs" className="mt-4">
                  <p className="text-gray-300">Complete documentation with examples and best practices.</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Cards */}
          <Card className="bg-white/5 backdrop-blur-xl border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Cards</h3>
                <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                  Flexible
                </Badge>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Feature Card</h4>
                  <p className="text-gray-300 text-sm">Beautiful card components with hover effects.</p>
                </div>
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4 border border-white/10">
                  <h4 className="text-white font-semibold mb-2">Gradient Card</h4>
                  <p className="text-gray-300 text-sm">Cards with stunning gradient backgrounds.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 hover:shadow-2xl px-12 py-6 text-xl font-bold border-0 group">
            <Eye className="w-6 h-6 mr-3" />
            Explore All Components
            <ChevronRight className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
