import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, Award, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";

const experience = [
  { period: "Dec '25 – June '26", role: "MERN Stack Intern", company: "Mytecsys Pvt. Ltd, Nagpur", desc: "Worked with React Native (Expo) UI, implementing UX plans with 100% accuracy. Gained hands-on experience with MongoDB, Next.js, Node.js, React & Express." },
  { period: "April '25 – Oct '25", role: "Data Science Intern", company: "MRSAC, Nagpur", desc: "85% data collection & preparation, 95–99% preprocessing with scikit-learn, 100% modeling and visualization using Streamlit and Matplotlib." },
  { period: "June '24 – July '24", role: "Machine Learning Intern", company: "Technohacks Solutions (Virtual)", desc: "Built ML models using NumPy, Pandas, scikit-learn, Matplotlib, and Seaborn with Linear Regression, Logistic Regression, Decision Trees, and Random Forest." },
  { period: "May '24 – June '24", role: "Data Science Intern", company: "Technohacks Solutions (Virtual)", desc: "Performed end-to-end data collection, cleaning, analysis, visualization, and trend identification using NumPy, Pandas, scikit-learn, Seaborn, and Matplotlib." },
];

const education = [
  { period: "June '22 – June '26", degree: "B.Tech - Data Science", school: "G. H. Raisoni College of Engineering & Technology, Nagpur", desc: "CGPA: 7.54" },
];

const technicalSkills = [
  { category: "Programming", items: "Python, C (Advanced), C++ (Intermediate)" },
  { category: "Web", items: "HTML, CSS, JS (Advanced); React, Bootstrap, Tailwind CSS (1yr); Next (Basic)" },
  { category: "Backend", items: "Node, Express (1yr)" },
  { category: "Mobile", items: "React Native Expo (Intermediate)" },
  { category: "Databases", items: "MongoDB, SQLite (Basic)" },
  { category: "Tools", items: "GitHub, Git (Intermediate); ML (1yr+); Vercel" },
];

const achievements = [
  "MERN Stack course completion — Apna College (Sigma 6.0 Batch)",
  "NPTEL Entrepreneurship — 75%+ Silver Elite Batch",
  "Cyber Security — Deloitte Virtual Internship",
];

export default function Resume() {
  return (
    <>
      <SEOHead title="Resume" description="View my professional resume including experience, education, and skills. MERN Stack & Data Science — 1.3 years experience, 10+ projects." path="/resume" />

      <section className="section-padding pt-32">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-3">Resume</h1>
                <div className="w-16 h-1 bg-primary rounded-full" />
              </div>
              <Button asChild size="lg" className="rounded-full">
                <a href="/HIMAKSHI-MANMODE_RESUME.pdf" download="HIMAKSHI-MANMODE_RESUME.pdf">
                  <Download size={18} className="mr-2" /> Download Resume
                </a>
              </Button>
            </div>
          </AnimatedSection>

          {/* Experience */}
          <AnimatedSection delay={0.1}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-teal-light text-teal flex items-center justify-center">
                <Briefcase size={24} />
              </div>
              <h2 className="text-2xl font-display font-semibold text-foreground">Experience</h2>
            </div>
          </AnimatedSection>

          <div className="relative ml-6 border-l-2 border-border pl-8 space-y-8 mb-16">
            {experience.map((exp, i) => (
              <AnimatedSection key={i} delay={0.15 + i * 0.1}>
                <motion.div whileHover={{ x: 4 }} className="relative">
                  <div className="absolute -left-[2.6rem] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <span className="text-sm font-medium text-primary">{exp.period}</span>
                  <h3 className="text-lg font-display font-semibold text-foreground mt-1">{exp.role}</h3>
                  <p className="text-sm text-accent font-medium">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mt-2">{exp.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Education */}
          <AnimatedSection delay={0.2}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-orange-light text-orange flex items-center justify-center">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-2xl font-display font-semibold text-foreground">Education</h2>
            </div>
          </AnimatedSection>

          <div className="relative ml-6 border-l-2 border-border pl-8 space-y-8 mb-16">
            {education.map((edu, i) => (
              <AnimatedSection key={i} delay={0.25 + i * 0.1}>
                <motion.div whileHover={{ x: 4 }} className="relative">
                  <div className="absolute -left-[2.6rem] top-1 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                  <span className="text-sm font-medium text-accent">{edu.period}</span>
                  <h3 className="text-lg font-display font-semibold text-foreground mt-1">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">{edu.school}</p>
                  <p className="text-muted-foreground text-sm mt-1">{edu.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Technical Skills */}
          <AnimatedSection delay={0.3}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-teal-light text-teal flex items-center justify-center">
                <Code2 size={24} />
              </div>
              <h2 className="text-2xl font-display font-semibold text-foreground">Technical Skills</h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.35}>
            <div className="grid gap-4 sm:grid-cols-2 mb-16">
              {technicalSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 4 }}
                  className="rounded-xl border border-border bg-card/50 p-4"
                >
                  <p className="text-sm font-semibold text-primary mb-1">{skill.category}</p>
                  <p className="text-sm text-muted-foreground">{skill.items}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Achievements */}
          <AnimatedSection delay={0.4}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-orange-light text-orange flex items-center justify-center">
                <Award size={24} />
              </div>
              <h2 className="text-2xl font-display font-semibold text-foreground">Achievements</h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.45}>
            <ul className="space-y-3">
              {achievements.map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
