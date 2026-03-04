import { motion } from "framer-motion";
import { GraduationCap, MapPin, Target, User } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";

const education = [
  { year: "2022 – 2026", title: "B.Tech - Data Science", institution: "G.H. Raisoni College of Engineering and Technology, Nagpur", desc: "CGPA: 7.54" },
];

export default function About() {
  return (
    <>
      <SEOHead title="About" description="Learn about my background, education, and career objectives as an AI/ML Engineer and Software Developer." path="/about" />

      <section className="section-padding pt-32">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">About Me</h1>
            <div className="w-16 h-1 bg-primary rounded-full mb-12" />
          </AnimatedSection>

          {/* Profile: Photo, Name, Location */}
          <AnimatedSection delay={0.05}>
            <motion.div whileHover={{ y: -2 }} className="bg-card rounded-2xl p-8 card-shadow mb-12 flex flex-col sm:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src="/HIMAKSHI.png"
                  alt="Himakshi Rajesh Manmode"
                  className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl object-cover border-4 border-primary/20 shadow-lg"
                />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">Himakshi Rajesh Manmode</h2>
                <p className="flex items-center justify-center sm:justify-start gap-2 text-muted-foreground">
                  <MapPin size={18} className="flex-shrink-0" />
                  Nagpur, Maharashtra, India
                </p>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Intro */}
          <AnimatedSection delay={0.1}>
            <motion.div whileHover={{ y: -2 }} className="bg-card rounded-2xl p-8 card-shadow mb-12 flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-teal-light text-teal flex items-center justify-center flex-shrink-0">
                <User size={24} />
              </div>
              <div>
                <h2 className="text-xl font-display font-semibold text-foreground mb-3">Professional Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate AI/ML Engineer and Software Developer with expertise in building intelligent systems. I specialize in machine learning, natural language processing, and large language models. I love turning complex problems into elegant, user-friendly solutions.
                </p>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Career Objective */}
          <AnimatedSection delay={0.15}>
            <motion.div whileHover={{ y: -2 }} className="bg-card rounded-2xl p-8 card-shadow mb-12 flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-orange-light text-orange flex items-center justify-center flex-shrink-0">
                <Target size={24} />
              </div>
              <div>
                <h2 className="text-xl font-display font-semibold text-foreground mb-3">Career Objective</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Seeking to leverage my expertise in AI, machine learning, and software engineering to contribute to innovative projects that drive meaningful impact. I aim to work in environments that challenge me to grow and push the boundaries of what's possible with technology.
                </p>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Education Timeline */}
          <AnimatedSection delay={0.2}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-cyan-light text-cyan flex items-center justify-center flex-shrink-0">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-2xl font-display font-semibold text-foreground">Education</h2>
            </div>
          </AnimatedSection>

          <div className="relative ml-6 border-l-2 border-border pl-8 space-y-8">
            {education.map((edu, i) => (
              <AnimatedSection key={i} delay={0.25 + i * 0.1}>
                <motion.div whileHover={{ x: 4 }} className="relative">
                  <div className="absolute -left-[2.6rem] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <span className="text-sm font-medium text-primary">{edu.year}</span>
                  <h3 className="text-lg font-display font-semibold text-foreground mt-1">{edu.title}</h3>
                  <p className="text-muted-foreground text-sm">{edu.institution}</p>
                  <p className="text-muted-foreground text-sm mt-1">{edu.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
