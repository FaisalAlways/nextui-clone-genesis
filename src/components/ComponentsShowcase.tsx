
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
              Components Preview
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our beautiful component library with interactive examples.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card Example */}
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <div className="h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500"></div>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">John Doe</CardTitle>
                  <p className="text-sm text-gray-600">@johndoe</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                "NextUI has completely transformed how I build interfaces. The components are beautiful and the developer experience is amazing!"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setLiked(!liked)}
                    className={liked ? "text-red-500" : "text-gray-500"}
                  >
                    <Heart className={`w-4 h-4 mr-1 ${liked ? "fill-current" : ""}`} />
                    {liked ? "Liked" : "Like"}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-500">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Comment
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-500">
                    <Share className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                </div>
                <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700">
                  Featured
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Components */}
          <Card className="hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Interactive Controls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Theme Toggle</label>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Light</span>
                  <Switch />
                  <span className="text-sm">Dark</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Volume Control</label>
                <Slider defaultValue={[50]} max={100} step={1} className="py-4" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Progress ({progress}%)</label>
                <Progress value={progress} className="h-2" />
                <div className="flex space-x-2">
                  <Button size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>
                    -10%
                  </Button>
                  <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
                    +10%
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button variant="default" size="sm">Primary</Button>
                <Button variant="secondary" size="sm">Secondary</Button>
                <Button variant="outline" size="sm">Outline</Button>
                <Button variant="ghost" size="sm">Ghost</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            View All Components
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
