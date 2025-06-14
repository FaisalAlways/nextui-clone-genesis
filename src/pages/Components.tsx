
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Filter, Code, Eye } from "lucide-react";

const componentCategories = [
  {
    name: "Form Elements",
    count: 12,
    components: ["Button", "Input", "Textarea", "Switch", "Checkbox", "Radio"]
  },
  {
    name: "Data Display",
    count: 8,
    components: ["Card", "Badge", "Avatar", "Progress", "Table", "List"]
  },
  {
    name: "Navigation",
    count: 6,
    components: ["Tabs", "Breadcrumb", "Pagination", "Menu", "Navbar", "Sidebar"]
  },
  {
    name: "Feedback",
    count: 5,
    components: ["Alert", "Toast", "Modal", "Tooltip", "Loading"]
  }
];

const Components = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl sm:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Component Library
            </span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Explore our comprehensive collection of React components designed for modern applications.
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input 
                placeholder="Search components..." 
                className="pl-12 pr-4 py-4 text-lg bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900" />
        
        <div className="relative max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Component Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {componentCategories.map((category, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-xl border-0 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-xl">{category.name}</CardTitle>
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      {category.count}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.components.map((component, idx) => (
                      <div key={idx} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                        {component}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Component Showcase */}
          <Tabs defaultValue="buttons" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-white/10 mb-12">
              <TabsTrigger value="buttons" className="text-white data-[state=active]:bg-white/20">Buttons</TabsTrigger>
              <TabsTrigger value="forms" className="text-white data-[state=active]:bg-white/20">Forms</TabsTrigger>
              <TabsTrigger value="data" className="text-white data-[state=active]:bg-white/20">Data Display</TabsTrigger>
              <TabsTrigger value="navigation" className="text-white data-[state=active]:bg-white/20">Navigation</TabsTrigger>
            </TabsList>
            
            <TabsContent value="buttons" className="space-y-8">
              <Card className="bg-white/5 backdrop-blur-xl border-0">
                <CardHeader>
                  <CardTitle className="text-white flex items-center justify-between">
                    Button Variants
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                        <Code className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <h4 className="text-white font-semibold">Primary</h4>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600">Primary Button</Button>
                      <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600">Large Primary</Button>
                      <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600">Small Primary</Button>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-white font-semibold">Secondary</h4>
                      <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">Outline Button</Button>
                      <Button variant="secondary" className="w-full bg-white/10 text-white">Secondary Button</Button>
                      <Button variant="ghost" className="w-full text-white hover:bg-white/10">Ghost Button</Button>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-white font-semibold">States</h4>
                      <Button disabled className="w-full">Disabled Button</Button>
                      <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600">Success Button</Button>
                      <Button className="w-full bg-gradient-to-r from-red-600 to-pink-600">Danger Button</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="forms" className="space-y-8">
              <Card className="bg-white/5 backdrop-blur-xl border-0">
                <CardHeader>
                  <CardTitle className="text-white">Form Components</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <label className="text-white text-sm font-medium mb-2 block">Email Input</label>
                        <Input placeholder="Enter your email" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                      </div>
                      <div>
                        <label className="text-white text-sm font-medium mb-2 block">Message</label>
                        <Textarea placeholder="Your message..." className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 resize-none" />
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <label className="text-white text-sm font-medium">Dark Mode</label>
                        <Switch />
                      </div>
                      <div className="space-y-2">
                        <label className="text-white text-sm font-medium">Upload Progress</label>
                        <Progress value={65} className="h-2" />
                      </div>
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                            FD
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-white font-medium">Future DevOps</div>
                          <div className="text-gray-400 text-sm">UI Library</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="data" className="space-y-8">
              <Card className="bg-white/5 backdrop-blur-xl border-0">
                <CardHeader>
                  <CardTitle className="text-white">Data Display Components</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-white/10 border-white/20">
                      <CardHeader>
                        <CardTitle className="text-white text-lg">Feature Card</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300">Beautiful card components with various layouts and styles.</p>
                      </CardContent>
                    </Card>
                    <div className="space-y-4">
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Primary Badge</Badge>
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Success Badge</Badge>
                      <Badge className="bg-red-500/20 text-red-300 border-red-500/30">Error Badge</Badge>
                    </div>
                    <div className="space-y-4">
                      <div className="text-white">Progress Indicators</div>
                      <Progress value={25} className="h-2" />
                      <Progress value={50} className="h-2" />
                      <Progress value={75} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="navigation" className="space-y-8">
              <Card className="bg-white/5 backdrop-blur-xl border-0">
                <CardHeader>
                  <CardTitle className="text-white">Navigation Components</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-white font-semibold mb-4">Tab Navigation</h4>
                      <Tabs defaultValue="tab1" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 bg-white/10">
                          <TabsTrigger value="tab1" className="text-white data-[state=active]:bg-white/20">Tab One</TabsTrigger>
                          <TabsTrigger value="tab2" className="text-white data-[state=active]:bg-white/20">Tab Two</TabsTrigger>
                          <TabsTrigger value="tab3" className="text-white data-[state=active]:bg-white/20">Tab Three</TabsTrigger>
                        </TabsList>
                        <TabsContent value="tab1" className="mt-4">
                          <p className="text-gray-300">Content for the first tab goes here.</p>
                        </TabsContent>
                        <TabsContent value="tab2" className="mt-4">
                          <p className="text-gray-300">Content for the second tab goes here.</p>
                        </TabsContent>
                        <TabsContent value="tab3" className="mt-4">
                          <p className="text-gray-300">Content for the third tab goes here.</p>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Components;
