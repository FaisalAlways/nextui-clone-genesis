
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share, ChevronRight, Sparkles } from "lucide-react";

export const ComponentsShowcase = () => {
  const [liked, setLiked] = useState(false);
  const [progress, setProgress] = useState(42);
  const [switchEnabled, setSwitchEnabled] = useState(false);

  return (
    <section id="components" className="py-24 bg-gradient-to-br from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-gray-900 to-blue-900 dark:from-gray-100 dark:to-blue-100 bg-clip-text text-transparent">
              Component Preview
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto animate-fade-in delay-200 leading-relaxed">
            Explore our comprehensive component library with live interactive examples.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Enhanced Card Example */}
          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:-translate-y-2 animate-fade-in delay-300 group border-0 shadow-lg">
            <div className="h-56 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 relative group-hover:scale-105 transition-transform duration-700 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute top-4 right-4">
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Premium
                </Badge>
              </div>
            </div>
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <Avatar className="hover:scale-110 transition-transform duration-300 w-12 h-12 border-2 border-white shadow-lg">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold">
                    FD
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-xl dark:text-gray-100">Future DevOps</CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">@futuredevops</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                "Building the future of React UI components. Clean, accessible, and beautifully designed for modern applications."
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setLiked(!liked)}
                    className={`${liked ? "text-red-500" : "text-gray-500 dark:text-gray-400"} hover:scale-110 transition-all duration-300 font-medium`}
                  >
                    <Heart className={`w-5 h-5 mr-2 transition-all duration-300 ${liked ? "fill-current scale-110" : ""}`} />
                    {liked ? "Liked" : "Like"}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-500 dark:text-gray-400 hover:scale-110 transition-all duration-300 font-medium">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Comment
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-500 dark:text-gray-400 hover:scale-110 transition-all duration-300 font-medium">
                    <Share className="w-5 h-5 mr-2" />
                    Share
                  </Button>
                </div>
                <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 text-blue-700 dark:text-blue-300 animate-pulse font-medium">
                  Featured
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Interactive Components */}
          <Card className="hover:shadow-2xl transition-all duration-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:-translate-y-2 animate-fade-in delay-500 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="dark:text-gray-100 text-2xl font-bold">Interactive Controls</CardTitle>
              <p className="text-gray-600 dark:text-gray-400">Experience our component interactions</p>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-3">
                <label className="text-sm font-semibold dark:text-gray-200 flex items-center justify-between">
                  Theme Toggle
                  <Badge variant="outline" className="text-xs">
                    {switchEnabled ? 'Dark' : 'Light'}
                  </Badge>
                </label>
                <div className="flex items-center space-x-3">
                  <span className="text-sm dark:text-gray-300 font-medium">Light</span>
                  <Switch 
                    checked={switchEnabled}
                    onCheckedChange={setSwitchEnabled}
                    className="hover:scale-110 transition-transform duration-300" 
                  />
                  <span className="text-sm dark:text-gray-300 font-medium">Dark</span>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-semibold dark:text-gray-200">Volume Control</label>
                <Slider 
                  defaultValue={[65]} 
                  max={100} 
                  step={1} 
                  className="py-4 hover:scale-105 transition-transform duration-300" 
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-semibold dark:text-gray-200 flex items-center justify-between">
                  Loading Progress
                  <Badge className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                    {progress}%
                  </Badge>
                </label>
                <Progress value={progress} className="h-3 hover:scale-105 transition-transform duration-300" />
                <div className="flex space-x-3">
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => setProgress(Math.max(0, progress - 15))}
                    className="hover:scale-105 transition-all duration-300 font-medium"
                  >
                    -15%
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={() => setProgress(Math.min(100, progress + 15))}
                    className="hover:scale-105 transition-all duration-300 font-medium"
                  >
                    +15%
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-semibold dark:text-gray-200">Button Variants</label>
                <div className="flex flex-wrap gap-3">
                  <Button variant="default" size="sm" className="hover:scale-105 transition-all duration-300 font-medium">Primary</Button>
                  <Button variant="secondary" size="sm" className="hover:scale-105 transition-all duration-300 font-medium">Secondary</Button>
                  <Button variant="outline" size="sm" className="hover:scale-105 transition-all duration-300 font-medium">Outline</Button>
                  <Button variant="ghost" size="sm" className="hover:scale-105 transition-all duration-300 font-medium">Ghost</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center animate-fade-in delay-700">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-105 transition-all duration-300 hover:shadow-xl px-8 py-4 text-lg font-semibold">
            Explore All Components
            <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
