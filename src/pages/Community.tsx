
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Github, MessageCircle, Users, Heart, Star, GitFork, ExternalLink, Award, Calendar } from "lucide-react";

const communityStats = [
  { icon: Users, value: "2,000+", label: "Contributors", color: "blue" },
  { icon: Star, value: "15.2k", label: "GitHub Stars", color: "yellow" },
  { icon: GitFork, value: "1,847", label: "Forks", color: "green" },
  { icon: MessageCircle, value: "500+", label: "Discord Members", color: "purple" }
];

const topContributors = [
  { name: "Alex Chen", avatar: "AC", contributions: 247, role: "Core Maintainer" },
  { name: "Sarah Davis", avatar: "SD", contributions: 189, role: "Lead Designer" },
  { name: "Jordan Kim", avatar: "JK", contributions: 156, role: "Documentation" },
  { name: "Maya Patel", avatar: "MP", contributions: 134, role: "Community Manager" },
  { name: "Chris Wilson", avatar: "CW", contributions: 98, role: "Testing Lead" },
  { name: "Riley Johnson", avatar: "RJ", contributions: 87, role: "Accessibility" }
];

const communityChannels = [
  {
    name: "GitHub Discussions",
    description: "Ask questions, share ideas, and collaborate with the community.",
    icon: Github,
    members: "2,000+",
    activity: "Very Active",
    link: "#"
  },
  {
    name: "Discord Server",
    description: "Real-time chat with developers, get help, and join events.",
    icon: MessageCircle,
    members: "500+",
    activity: "Active",
    link: "#"
  },
  {
    name: "Twitter Community",
    description: "Stay updated with latest news, releases, and community highlights.",
    icon: Users,
    members: "1,200+",
    activity: "Daily",
    link: "#"
  }
];

const upcomingEvents = [
  {
    title: "Component Design Workshop",
    date: "Dec 15, 2024",
    time: "2:00 PM UTC",
    type: "Workshop",
    description: "Learn best practices for designing accessible UI components."
  },
  {
    title: "Community Call #12",
    date: "Dec 22, 2024",
    time: "3:00 PM UTC",
    type: "Meeting",
    description: "Monthly community call to discuss roadmap and Q&A session."
  },
  {
    title: "Hacktoberfest Planning",
    date: "Jan 10, 2025",
    time: "4:00 PM UTC",
    type: "Planning",
    description: "Planning session for next year's Hacktoberfest participation."
  }
];

const Community = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-green-900 to-blue-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(34,197,94,0.3),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-8 text-center">
          <Badge className="mb-8 bg-white/10 backdrop-blur-sm text-white border-white/20 animate-fade-in shadow-lg hover:scale-105 transition-transform duration-300">
            <Heart className="w-4 h-4 mr-1 text-red-400 animate-pulse" />
            Open Source Community
          </Badge>
          
          <h1 className="text-5xl sm:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-white via-green-100 to-blue-100 bg-clip-text text-transparent">
              Join Our Community
            </span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Connect with thousands of developers building the future of React UI components. Contribute, learn, and grow together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-12 py-6 text-xl font-bold transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border-0 group">
              <Github className="w-6 h-6 mr-3" />
              Join on GitHub
              <ExternalLink className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="px-12 py-6 text-xl font-bold border-2 border-white/20 hover:border-white/40 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 group">
              <MessageCircle className="w-6 h-6 mr-3" />
              Discord Server
            </Button>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900" />
        
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {communityStats.map((stat, index) => {
              const Icon = stat.icon;
              const colorClasses = {
                blue: "from-blue-500 to-indigo-500",
                yellow: "from-yellow-500 to-orange-500",
                green: "from-green-500 to-emerald-500",
                purple: "from-purple-500 to-pink-500"
              };
              
              return (
                <Card key={index} className="bg-white/5 backdrop-blur-xl border-0 hover:scale-105 transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${colorClasses[stat.color]} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Top Contributors */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Top Contributors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topContributors.map((contributor, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-xl border-0 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg">
                          {contributor.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg">{contributor.name}</h3>
                        <p className="text-gray-400 text-sm">{contributor.role}</p>
                        <div className="flex items-center mt-2">
                          <Badge className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                            {contributor.contributions} contributions
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Community Channels */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Community Channels</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {communityChannels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <Card key={index} className="group bg-white/5 backdrop-blur-xl border-0 hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-[1px] bg-gray-900/90 backdrop-blur-xl rounded-lg" />
                    
                    <CardHeader className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-white text-xl group-hover:text-blue-300 transition-colors duration-300">
                        {channel.name}
                      </CardTitle>
                      <p className="text-gray-300 leading-relaxed">{channel.description}</p>
                    </CardHeader>
                    
                    <CardContent className="relative z-10">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-white font-semibold">{channel.members}</div>
                          <div className="text-gray-400 text-sm">Members</div>
                        </div>
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                          {channel.activity}
                        </Badge>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group-hover:scale-105 transition-all duration-300">
                        Join Channel
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Upcoming Events</h2>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-xl border-0 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <Calendar className="w-5 h-5 text-blue-400" />
                          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                            {event.type}
                          </Badge>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">{event.description}</p>
                        <div className="flex items-center space-x-6 text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {event.date}
                          </div>
                          <div>{event.time}</div>
                        </div>
                      </div>
                      <div className="mt-6 md:mt-0 md:ml-8">
                        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:scale-105 transition-all duration-300">
                          Join Event
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;
