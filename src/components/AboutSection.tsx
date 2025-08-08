import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [elementsVisible, setElementsVisible] = useState({
    title: false,
    leftContent: false,
    rightContent: false,
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          setTimeout(
            () => setElementsVisible((prev) => ({ ...prev, title: true })),
            200
          );
          setTimeout(
            () =>
              setElementsVisible((prev) => ({ ...prev, leftContent: true })),
            600
          );
          setTimeout(
            () =>
              setElementsVisible((prev) => ({ ...prev, rightContent: true })),
            1000
          );
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center pr-6 pl-10 md:px-6 py-32 relative"
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/4 right-1/3 w-1 h-40 bg-accent/10 transform rotate-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
          style={{ transitionDelay: "800ms" }}
        />
        <div
          className={`absolute bottom-1/3 left-1/4 w-1 h-24 bg-accent/5 transform -rotate-45 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
          style={{ transitionDelay: "1200ms" }}
        />
      </div>

      <div className="max-w-4xl relative z-10">
        <div
          className={`transition-all duration-1000 ease-out ${
            elementsVisible.title
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-hero font-black mb-16 relative">
            How?
            <div
              className="absolute -bottom-4 left-0 w-16 h-1 bg-accent transform origin-left transition-transform duration-1000 delay-500 scale-x-0"
              style={{
                transform: elementsVisible.title ? "scaleX(1)" : "scaleX(0)",
              }}
            />
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 ease-out ${
              elementsVisible.leftContent
                ? "opacity-100 translate-x-0 blur-0"
                : "opacity-0 -translate-x-12 blur-sm"
            }`}
          >
            <p className="text-xl font-light leading-relaxed text-muted-foreground mb-8 relative">
              I'm a web developer that likes to build smooth, thoughtful
              products.
              <div
                className="absolute -left-4 top-0 w-1 h-full bg-accent transform scale-y-0 origin-top transition-transform duration-800 delay-300"
                style={{
                  transform: elementsVisible.leftContent
                    ? "scaleY(1)"
                    : "scaleY(0)",
                }}
              />
            </p>

            <p className="text-xl font-light leading-relaxed text-muted-foreground mb-8 relative">
              I move fast, but I don't break things. 
              <div
                className="absolute -left-4 top-0 w-1 h-full bg-accent transform scale-y-0 origin-top transition-transform duration-800 delay-300"
                style={{
                  transform: elementsVisible.leftContent
                    ? "scaleY(1)"
                    : "scaleY(0)",
                }}
              />
            </p>

            <p className="text-xl font-light leading-relaxed text-muted-foreground mb-8 relative">
              I build with care. I’m a team player who keeps code clean and
              communication positive.
              <div
                className="absolute -left-4 top-0 w-1 h-full bg-accent transform scale-y-0 origin-top transition-transform duration-800 delay-300"
                style={{
                  transform: elementsVisible.leftContent
                    ? "scaleY(1)"
                    : "scaleY(0)",
                }}
              />
            </p>
          </div>

          <div
            className={`transition-all duration-1000 ease-out ${
              elementsVisible.rightContent
                ? "opacity-100 translate-x-0 blur-0"
                : "opacity-0 translate-x-12 blur-sm"
            }`}
          >
            <div className="space-y-6">
              <div className="group p-6 bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card/80 hover:border-accent/30 transition-all duration-500 transform hover:-translate-y-1">
                <h3 className="text-accent font-semibold mb-3 group-hover:text-accent/80 transition-colors duration-300">
                  STACK
                </h3>
                <p className="text-sm text-muted-foreground">
                  Mostly React, Next.js, and TypeScript <br /> But I’m flexible.
                  I use what works best for the product and the team.
                </p>
              </div>

              <div
                className="group p-6 bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card/80 hover:border-accent/30 transition-all duration-500 transform hover:-translate-y-1"
                style={{ transitionDelay: "200ms" }}
              >
                <h3 className="text-accent font-semibold mb-3 group-hover:text-accent/80 transition-colors duration-300">
                  PHILOSOPHY
                </h3>
                <p className="text-sm text-muted-foreground">
                  Product first, always. <br /> I focus on what truly matters:
                  building something great, together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
