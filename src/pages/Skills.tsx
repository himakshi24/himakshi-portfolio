import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    color: "bg-teal-light text-teal border-teal/20",
    skills: ["Machine Learning (ML)", "Large Language Models (LLM)", "Retrieval Augmented Generation (RAG)", "Reinforcement Learning"],
  },
  {
    title: "Deep Learning",
    color: "bg-cyan-light text-cyan border-cyan/20",
    skills: ["Neural Networks", "Natural Language Processing (NLP)"],
  },
  {
    title: "Development Tools",
    color: "bg-orange-light text-orange border-orange/20",
    skills: ["Git", "GitHub"],
  },
  {
    title: "Software Engineering",
    color: "bg-purple-light text-purple border-purple/20",
    skills: ["Software Development"],
  },
];

export default function Skills() {
  return (
    <>
      <SEOHead title="Skills" description="Explore my technical skills in AI, machine learning, deep learning, NLP, and software development." path="/skills" />

      <section className="section-padding pt-32">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Skills</h1>
            <div className="w-16 h-1 bg-primary rounded-full mb-16" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((cat, ci) => (
              <AnimatedSection key={cat.title} delay={ci * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-shadow h-full"
                >
                  <h2 className="text-xl font-display font-semibold text-foreground mb-6 flex items-center gap-3">
                    <span className="text-lg">✔</span> {cat.title}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {cat.skills.map((skill, si) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: ci * 0.1 + si * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className={`px-4 py-2 rounded-full text-sm font-medium border ${cat.color} cursor-default`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
