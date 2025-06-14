
import { Github, GitFork, Star, Users, Code, Heart, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const contributionTypes = [
  {
    icon: Code,
    title: "Code Contributions",
    description: "Help us build new components, fix bugs, and improve existing features.",
    action: "Browse Issues",
    badge: "Good First Issue",
    color: "blue"
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Improve our docs, write tutorials, and help other developers learn.",
    action: "Edit Docs",
    badge: "Documentation",
    color: "green"
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Answer questions, help with troubleshooting, and mentor new contributors.",
    action: "Join Discord",
    badge: "Help Wanted",
    color: "purple"
  }
];

const stats = [
  { icon: Star, value: "2.3k", label: "GitHub Stars" },
  { icon: GitFork, value: "456", label: "Forks" },
  { icon: Users, value: "2k+", label: "Contributors" },
  { icon: Code, value: "150+", label: "Components" }
];

export const Contribution = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-green-900 to-blue-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(34,197,94,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span className="text-sm font-medium text-white">Open Source</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-black mb-8 animate-fade-in">
            <span className="bg-gradient-to-r from-white via-green-100 to-blue-100 bg-clip-text text-transparent">
              Join Our Community
            </span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto animate-fade-in delay-200 leading-relaxed">
            Future DevOps is built by developers, for developers. Your contributions make this project better for everyone.
          </p>
        </div>

        {/* GitHub Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-white/5 backdrop-blur-xl border-0 hover:scale-105 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main GitHub CTA */}
        <Card className="bg-white/5 backdrop-blur-xl border-0 hover:shadow-2xl transition-all duration-500 mb-16 group">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
          
          <CardContent className="p-12 text-center relative z-10">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
              <Github className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Contribute to Future DevOps
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Help us build the future of React UI components. Every contribution, no matter how small, makes a difference in the developer community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-bold group">
                <Github className="w-5 h-5 mr-3" />
                View on GitHub
                <ExternalLink className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg font-bold backdrop-blur-sm hover:scale-105 transition-all duration-300">
                <Star className="w-5 h-5 mr-3" />
                Star Repository
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contribution Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contributionTypes.map((type, index) => {
            const Icon = type.icon;
            const colorClasses = {
              blue: "from-blue-500 to-indigo-500",
              green: "from-green-500 to-emerald-500",
              purple: "from-purple-500 to-pink-500"
            };
            
            return (
              <Card 
                key={index}
                className="group bg-white/5 backdrop-blur-xl border-0 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${colorClasses[type.color]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <Badge className={`bg-${type.color}-500/20 text-${type.color}-300 border-${type.color}-500/30`}>
                      {type.badge}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{type.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-white/20 text-white hover:bg-white/10 group-hover:scale-105 transition-all duration-300"
                  >
                    {type.action}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* License Info */}
        <Card className="bg-white/5 backdrop-blur-xl border-0">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30 text-lg px-4 py-2">
                MIT Licensed
              </Badge>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Future DevOps is released under the MIT License, which means you can use it in your personal and commercial projects. 
              We believe in open source and the power of community-driven development.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
