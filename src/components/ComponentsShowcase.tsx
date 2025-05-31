
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share, ChevronRight } from "lucide-react";

export const ComponentsShowcase = () => {
  const [liked, setLiked] = useState(false);
  const [progress, setProgress] = useState(33);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-gray-900 to-blue-900 dark:from-gray-100 dark:to-blue-100 bg-clip-text text-transparent">
              Components Preview
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in delay-200">
            Explore our beautiful component library with interactive examples.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card Example */}
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:-translate-y-1 animate-fade-in delay-300 group">
            <div className="h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 group-hover:scale-105 transition-transform duration-500"></div>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="hover:scale-110 transition-transform duration-200">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg dark:text-gray-100">John Doe</CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400">@johndoe</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                "NextUI has completely transformed how I build interfaces. The components are beautiful and the developer experience is amazing!"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setLiked(!liked)}
                    className={`${liked ? "text-red-500" : "text-gray-500 dark:text-gray-400"} hover:scale-110 transition-all duration-200`}
                  >
                    <Heart className={`w-4 h-4 mr-1 transition-all duration-300 ${liked ? "fill-current scale-110" : ""}`} />
                    {liked ? "Liked" : "Like"}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-500 dark:text-gray-400 hover:scale-110 transition-all duration-200">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Comment
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-500 dark:text-gray-400 hover:scale-110 transition-all duration-200">
                    <Share className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                </div>
                <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 animate-pulse">
                  Featured
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Components */}
          <Card className="hover:shadow-xl transition-all duration-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:-translate-y-1 animate-fade-in delay-500">
            <CardHeader>
              <CardTitle className="dark:text-gray-100">Interactive Controls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium dark:text-gray-200">Theme Toggle</label>
                <div className="flex items-center space-x-2">
                  <span className="text-sm dark:text-gray-300">Light</span>
                  <Switch className="hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm dark:text-gray-300">Dark</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium dark:text-gray-200">Volume Control</label>
                <Slider defaultValue={[50]} max={100} step={1} className="py-4 hover:scale-105 transition-transform duration-200" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium dark:text-gray-200">Progress ({progress}%)</label>
                <Progress value={progress} className="h-2 hover:scale-105 transition-transform duration-200" />
                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    onClick={() => setProgress(Math.max(0, progress - 10))}
                    className="hover:scale-105 transition-all duration-200"
                  >
                    -10%
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={() => setProgress(Math.min(100, progress + 10))}
                    className="hover:scale-105 transition-all duration-200"
                  >
                    +10%
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button variant="default" size="sm" className="hover:scale-105 transition-all duration-200">Primary</Button>
                <Button variant="secondary" size="sm" className="hover:scale-105 transition-all duration-200">Secondary</Button>
                <Button variant="outline" size="sm" className="hover:scale-105 transition-all duration-200">Outline</Button>
                <Button variant="ghost" size="sm" className="hover:scale-105 transition-all duration-200">Ghost</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center animate-fade-in delay-700">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-105 transition-all duration-200 hover:shadow-lg">
            View All Components
            <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
