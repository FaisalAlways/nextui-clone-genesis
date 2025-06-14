
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share, ChevronRight, Sparkles, Zap } from "lucide-react";

export const ComponentsShowcase = () => {
  const [liked, setLiked] = useState(false);
  const [progress, setProgress] = useState(42);
  const [switchEnabled, setSwitchEnabled] = useState(false);

  return (
    <section id="components" className="py-32 relative overflow-hidden">
      {/* Futuristic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_30%,rgba(255,255,255,0.02)_50%,transparent_70%)] animate-pulse" />

      <div className="relative max-w-[1440px] mx-auto px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-white">Live Components</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-black mb-8 animate-fade-in">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Component Preview
            </span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto animate-fade-in delay-200 leading-relaxed">
            Explore our comprehensive component library with live interactive examples.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Enhanced Card Example */}
          <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-700 bg-white/5 backdrop-blur-xl hover:-translate-y-3 animate-fade-in delay-300 border-0 shadow-blue-500/20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-[1px] bg-gray-900/90 backdrop-blur-xl rounded-lg" />
            
            <div className="relative z-10">
              <div className="h-64 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 relative group-hover:scale-105 transition-transform duration-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-6 right-6">
                  <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm shadow-lg">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Premium
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="hover:scale-110 transition-transform duration-300 w-14 h-14 border-2 border-white/20 shadow-xl">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold text-lg">
                      FD
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-2xl text-white">Future DevOps</CardTitle>
                    <p className="text-sm text-gray-400 font-medium">@futuredevops</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  "Building the future of React UI components. Clean, accessible, and beautifully designed for next-generation applications."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-8">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setLiked(!liked)}
                      className={`${liked ? "text-red-400" : "text-gray-400"} hover:scale-110 transition-all duration-300 font-medium hover:bg-white/10`}
                    >
                      <Heart className={`w-5 h-5 mr-2 transition-all duration-300 ${liked ? "fill-current scale-110" : ""}`} />
                      {liked ? "Liked" : "Like"}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:scale-110 transition-all duration-300 font-medium hover:bg-white/10">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Comment
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:scale-110 transition-all duration-300 font-medium hover:bg-white/10">
                      <Share className="w-5 h-5 mr-2" />
                      Share
                    </Button>
                  </div>
                  <Badge className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-300 animate-pulse font-medium backdrop-blur-sm border border-blue-500/30">
                    Featured
                  </Badge>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Enhanced Interactive Components */}
          <Card className="hover:shadow-2xl transition-all duration-700 bg-white/5 backdrop-blur-xl hover:-translate-y-3 animate-fade-in delay-500 border-0 shadow-purple-500/20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-[1px] bg-gray-900/90 backdrop-blur-xl rounded-lg" />
            
            <CardHeader className="relative z-10">
              <CardTitle className="text-white text-2xl font-bold">Interactive Controls</CardTitle>
              <p className="text-gray-400 text-lg">Experience our component interactions</p>
            </CardHeader>
            <CardContent className="space-y-10 relative z-10">
              <div className="space-y-4">
                <label className="text-sm font-semibold text-gray-200 flex items-center justify-between">
                  Theme Toggle
                  <Badge variant="outline" className="text-xs bg-white/10 text-blue-300 border-blue-500/30">
                    {switchEnabled ? 'Dark' : 'Light'}
                  </Badge>
                </label>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-300 font-medium">Light</span>
                  <Switch 
                    checked={switchEnabled}
                    onCheckedChange={setSwitchEnabled}
                    className="hover:scale-110 transition-transform duration-300" 
                  />
                  <span className="text-sm text-gray-300 font-medium">Dark</span>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-semibold text-gray-200">Volume Control</label>
                <Slider 
                  defaultValue={[65]} 
                  max={100} 
                  step={1} 
                  className="py-4 hover:scale-105 transition-transform duration-300" 
                />
              </div>

              <div className="space-y-4">
                <label className="text-sm font-semibold text-gray-200 flex items-center justify-between">
                  Loading Progress
                  <Badge className="text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30 backdrop-blur-sm">
                    {progress}%
                  </Badge>
                </label>
                <Progress value={progress} className="h-3 hover:scale-105 transition-transform duration-300" />
                <div className="flex space-x-4">
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => setProgress(Math.max(0, progress - 15))}
                    className="hover:scale-105 transition-all duration-300 font-medium bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    -15%
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={() => setProgress(Math.min(100, progress + 15))}
                    className="hover:scale-105 transition-all duration-300 font-medium bg-gradient-to-r from-blue-600 to-purple-600"
                  >
                    +15%
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-semibold text-gray-200">Button Variants</label>
                <div className="flex flex-wrap gap-4">
                  <Button variant="default" size="sm" className="hover:scale-105 transition-all duration-300 font-medium bg-gradient-to-r from-blue-600 to-indigo-600">Primary</Button>
                  <Button variant="secondary" size="sm" className="hover:scale-105 transition-all duration-300 font-medium bg-white/10 text-white">Secondary</Button>
                  <Button variant="outline" size="sm" className="hover:scale-105 transition-all duration-300 font-medium border-white/20 text-white hover:bg-white/10">Outline</Button>
                  <Button variant="ghost" size="sm" className="hover:scale-105 transition-all duration-300 font-medium text-white hover:bg-white/10">Ghost</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center animate-fade-in delay-700">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 hover:shadow-2xl px-10 py-6 text-xl font-bold border-0">
            Explore All Components
            <ChevronRight className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
