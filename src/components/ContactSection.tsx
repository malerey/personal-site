import { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [elementsVisible, setElementsVisible] = useState({
    title: false,
    links: [false, false, false],
    footer: false,
  });
  const sectionRef = useRef<HTMLElement>(null);
  const animationTriggeredRef = useRef(false); // Track if animation has run

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only run animation once when section comes into view
        if (entry.isIntersecting && !animationTriggeredRef.current) {
          setIsVisible(true);
          animationTriggeredRef.current = true; // Mark as triggered

          // Schedule animations
          setTimeout(
            () => setElementsVisible((prev) => ({ ...prev, title: true })),
            300
          );

          setTimeout(
            () =>
              setElementsVisible((prev) => ({
                ...prev,
                links: [true, false, false],
              })),
            800
          );

          setTimeout(
            () =>
              setElementsVisible((prev) => ({
                ...prev,
                links: [true, true, false],
              })),
            1200
          );

          setTimeout(
            () =>
              setElementsVisible((prev) => ({
                ...prev,
                links: [true, true, true],
              })),
            1600
          );

          setTimeout(
            () => setElementsVisible((prev) => ({ ...prev, footer: true })),
            2200
          );

          // Disconnect observer after animation starts
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactLinks = [
    {
      label: "EMAIL",
      value: "ola@mariarey.pt",
      icon: Mail,
      href: "mailto:mariareydev@gmail.com",
    },
    {
      label: "GITHUB",
      value: "github.com/malerey",
      icon: Github,
      href: "https://github.com/malerey",
    },
    {
      label: "LINKEDIN",
      value: "linkedin.com/in/malerey",
      icon: Linkedin,
      href: "https://linkedin.com/in/malerey",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center pr-6 pl-10 md:px-6 py-32 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/4 left-1/5 w-2 h-48 bg-accent/10 transform -rotate-12 transition-all duration-1500 ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-75"
          }`}
          style={{ transitionDelay: "1000ms" }}
        />
        <div
          className={`absolute bottom-1/4 right-1/5 w-1 h-32 bg-accent/5 transform rotate-45 transition-all duration-1500 ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-12 scale-75"
          }`}
          style={{ transitionDelay: "1400ms" }}
        />
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <div>
          <h2
            className={`text-hero font-black mb-8 relative transition-all duration-1000 ease-out ${
              elementsVisible.title
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Want to connect?
            <div
              className={`absolute -top-4 -right-4 w-4 h-4 bg-accent rounded-full transition-all duration-1000 ease-out ${
                elementsVisible.title ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            />
          </h2>

          <div
            className="w-24 h-px bg-accent mb-16 transform origin-left transition-all duration-1000 delay-500"
            style={{
              transform: elementsVisible.title ? "scaleX(1)" : "scaleX(0)",
              filter: elementsVisible.title
                ? "drop-shadow(0 0 8px hsl(var(--accent)))"
                : "none",
            }}
          />
        </div>

        <div className="space-y-8">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            const isLinkVisible = elementsVisible.links[index];

            return (
              <div
                key={link.label}
                className={`transition-all duration-1000 ease-out transform ${
                  isLinkVisible
                    ? "opacity-100 translate-x-0 blur-0 scale-100"
                    : "opacity-0 translate-x-16 blur-sm scale-95"
                }`}
              >
                <a
                  href={link.href}
                  className="group flex items-center justify-between p-6 bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card/80 hover:border-accent/30 transition-all duration-500 transform hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-4">
                    <Icon className="w-6 h-6 text-accent group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-1 group-hover:text-accent/80 transition-colors duration-300">
                        {link.label}
                      </div>
                      <div className="text-lg font-light group-hover:text-foreground transition-colors duration-300">
                        {link.value}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:rotate-45 transition-all duration-500" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div
          className={`mt-32 text-center transition-all duration-1000 ease-out ${
            elementsVisible.footer
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="w-16 h-px bg-accent/50 mx-auto mb-8 animate-pulse" />
          <p className="text-sm text-muted-foreground/60">
            © 2024 — Crafted with intention
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
