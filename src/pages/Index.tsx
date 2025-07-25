import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add dark theme class to body
    document.documentElement.classList.add('dark');
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative">
      {/* Background grain texture */}
      <div className="fixed inset-0 opacity-20 pointer-events-none bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ContactSection />
      </main>
      
      {/* Ambient glow effects */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default Index;
