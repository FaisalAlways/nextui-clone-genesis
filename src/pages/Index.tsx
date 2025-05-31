
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ComponentsShowcase } from "@/components/ComponentsShowcase";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <Hero />
      <Features />
      <ComponentsShowcase />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
