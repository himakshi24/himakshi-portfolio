import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";

const HeroScene = lazy(() => import("@/components/HeroScene"));

const Index = () => {
  return (
    <>
      <SEOHead
        title="Home"
        description="AI/ML Engineer & Software Developer portfolio. Explore projects, skills, and experience in machine learning, deep learning, and software development."
        path="/"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-medium text-primary">Available for opportunities</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-foreground leading-tight mb-6 text-balance">
              AI/ML Engineer &<br />
              <span className="text-primary">Software Developer</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="text-lg md:text-xl text-muted-foreground mb-8 h-8">
              <TypeAnimation
                sequence={[
                  "Building intelligent systems with ML & AI",
                  2000,
                  "Crafting robust software solutions",
                  2000,
                  "Exploring cutting-edge NLP & LLMs",
                  2000,
                  "Turning data into actionable insights",
                  2000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <Button asChild size="lg" className="rounded-full text-base px-8">
                <Link to="/projects">
                  View Projects <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full text-base px-8">
                <a href="/HIMAKSHI-MANMODE_RESUME.pdf" download="HIMAKSHI-MANMODE_RESUME.pdf">
                  <Download className="mr-2" size={18} /> Download Resume
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full text-base px-8">
                <Link to="/contact">
                  <Mail className="mr-2" size={18} /> Contact Me
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="flex items-center justify-center gap-6">
              <a href="https://github.com/himakshi24" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub Profile">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/himakshi-manmode-180303285/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn Profile">
                <Linkedin size={24} />
              </a>
              <a href="mailto:himakshimanmode24@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </div>
        </motion.div>
      </section>

      {/* Quick Highlights */}
      <section className="section-padding section-alt">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-16">
              What I Do
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Machine Learning",
                desc: "Building predictive models and intelligent systems using cutting-edge ML algorithms.",
                color: "bg-teal-light text-teal",
                icon: "🧠",
              },
              {
                title: "Software Development",
                desc: "Creating robust, scalable applications with modern frameworks and best practices.",
                color: "bg-orange-light text-orange",
                icon: "💻",
              },
              {
                title: "NLP & LLMs",
                desc: "Developing natural language solutions with large language models and RAG systems.",
                color: "bg-cyan-light text-cyan",
                icon: "🗣️",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <motion.article
                  whileHover={{ y: -4 }}
                  className="bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-shadow"
                >
                  <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center text-2xl mb-6`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
