
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ComponentsShowcase } from "@/components/ComponentsShowcase";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 transition-colors duration-300">
      <Navbar />
      <div className="animate-fade-in">
        <Hero />
        <Features />
        <ComponentsShowcase />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
