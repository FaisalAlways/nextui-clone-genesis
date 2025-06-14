
import { Shield, Zap, Heart, Users, Award, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const reasons = [
  {
    icon: Shield,
    title: "Production Ready",
    description: "Battle-tested in real-world applications with comprehensive testing and quality assurance.",
    stats: "99.9% Uptime"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for performance with tree-shaking, lazy loading, and minimal bundle impact.",
    stats: "< 50kb Bundle"
  },
  {
    icon: Heart,
    title: "Developer Experience",
    description: "Intuitive APIs, excellent TypeScript support, and comprehensive documentation.",
    stats: "5★ Developer Rating"
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Active community of contributors, regular updates, and responsive support.",
    stats: "2000+ Contributors"
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Frontend Developer",
    company: "TechCorp",
    avatar: "SC",
    quote: "Future DevOps has transformed our development workflow. The components are reliable and beautifully designed."
  },
  {
    name: "Alex Rodriguez",
    role: "Lead Developer",
    company: "StartupXYZ",
    avatar: "AR",
    quote: "The best UI library I've used. Clean code, great documentation, and amazing community support."
  },
  {
    name: "Jordan Kim",
    role: "Full Stack Developer",
    company: "InnovateLab",
    avatar: "JK",
    quote: "Saved us months of development time. The components are accessible, customizable, and production-ready."
  }
];

export const WhyFutureDevOps = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(168,85,247,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Award className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-white">Why Choose Us</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-black mb-8 animate-fade-in">
            <span className="bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent">
              Why Future DevOps?
            </span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto animate-fade-in delay-200 leading-relaxed">
            Trusted by thousands of developers worldwide for building exceptional user interfaces.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card 
                key={index}
                className="group bg-white/5 backdrop-blur-xl border-0 hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-[1px] bg-gray-900/90 backdrop-blur-xl rounded-lg" />
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                      {reason.stats}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-white mb-8">
            What Developers Say
          </h3>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of satisfied developers building with Future DevOps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-white/5 backdrop-blur-xl border-0 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
              
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    <div className="text-purple-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
                <blockquote className="text-gray-300 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
