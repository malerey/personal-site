import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const text = "Olá!";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 transition-opacity duration-2000"
        style={{ backgroundImage: `url(/assets/main.jpg)` }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-2 h-32 bg-accent/20 transform -rotate-12 animate-fade-in" />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-24 bg-accent/10 transform rotate-45 animate-fade-in delay-1500" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl">
        <h1
          className={`text-mega font-black tracking-tight flex justify-center items-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {text}
        </h1>

        <div
          className={`mt-8 transition-all duration-1000 delay-1500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-lg font-light text-muted-foreground tracking-wide">
            I'm Maria. Currently in Lisbon.
          </p>

          <p className="text-lg font-light text-muted-foreground tracking-wide">
            I'm here to help you build something amazing.
          </p>
        </div>

        {/* Accent Element */}
        <div
          className={`mt-16 w-32 h-px bg-accent mx-auto transition-all duration-1000 delay-2000 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-2500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent animate-pulse" />
        <p className="text-xs text-muted-foreground mt-2 tracking-widest">
          SCROLL
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
