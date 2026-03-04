import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";

const categories = ["All", "ML/AI", "Software"];

const projects = [
  {
    title: "Basic CRM Web Application",
    description: "Customer relationship management web app for tracking contacts, leads, and interactions.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    category: "Software",
    github: "https://github.com/himakshi24/project1",
    demo: "",
    image: "📋",
    color: "bg-teal-light",
  },
  {
    title: "FaceAttendApp",
    description: "Face-detection based attendance system built with React Native Expo.",
    tech: ["React Native", "Expo", "Face Detection"],
    category: "Software",
    github: "https://github.com/himakshi24/project2",
    demo: "",
    image: "📱",
    color: "bg-cyan-light",
  },
  {
    title: "File Upload Management System",
    description: "Full-stack system for uploading, organizing, and managing files.",
    tech: ["MERN", "React", "Node.js", "MongoDB"],
    category: "Software",
    github: "https://github.com/himakshi24/project3",
    demo: "",
    image: "📁",
    color: "bg-orange-light",
  },
  {
    title: "Finance Management Application Suite",
    description: "Application suite for personal or business finance tracking and management.",
    tech: ["React", "Node.js", "Express", "Database"],
    category: "Software",
    github: "https://github.com/himakshi24/project4",
    demo: "",
    image: "💰",
    color: "bg-emerald-light",
  },
  {
    title: "Mapping Urban Expansion - Building Growth Dashboard",
    description: "Data visualization dashboard for mapping urban expansion and building growth using geospatial data.",
    tech: ["Streamlit", "Matplotlib", "Pandas", "Python"],
    category: "ML/AI",
    github: "https://github.com/himakshi24/project5",
    demo: "",
    image: "🗺️",
    color: "bg-purple-light",
  },
  {
    title: "PoseNet Demo",
    description: "Real-time pose estimation demo using TensorFlow.js wrapped with ml5.js.",
    tech: ["TensorFlow.js", "ml5.js", "Pose Estimation"],
    category: "ML/AI",
    github: "https://github.com/himakshi24/project6",
    demo: "",
    image: "🧍",
    color: "bg-teal-light",
  },
  {
    title: "Simple User Authentication API (Swagger)",
    description: "RESTful API for user authentication with Swagger documentation.",
    tech: ["Node.js", "Express", "Swagger", "JWT"],
    category: "Software",
    github: "https://github.com/himakshi24/project7",
    demo: "",
    image: "🔐",
    color: "bg-cyan-light",
  },
  {
    title: "Next.js static build (v0)",
    description: "Static site built with Next.js for fast, scalable web delivery.",
    tech: ["Next.js", "React", "Vercel"],
    category: "Software",
    github: "https://github.com/himakshi24/project8",
    demo: "",
    image: "⚡",
    color: "bg-orange-light",
  },
  {
    title: "WanderLust",
    description: "Travel and exploration app built with the MERN stack.",
    tech: ["MERN", "React", "MongoDB", "Express"],
    category: "Software",
    github: "https://github.com/himakshi24/project9",
    demo: "",
    image: "✈️",
    color: "bg-emerald-light",
  },
  {
    title: "Chatting App - Real-Time Group Chat",
    description: "Real-time group chat application with instant messaging.",
    tech: ["React", "Node.js", "WebSockets", "Real-time"],
    category: "Software",
    github: "https://github.com/himakshi24/project10",
    demo: "",
    image: "💬",
    color: "bg-purple-light",
  },
];

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <SEOHead title="Projects" description="Browse my portfolio of AI, machine learning, web development, and data engineering projects." path="/projects" />

      <section className="section-padding pt-32">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Projects</h1>
            <div className="w-16 h-1 bg-primary rounded-full mb-12" />
          </AnimatedSection>

          {/* Filters */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    active === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.article
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-shadow"
                >
                  <div className={`${project.color} h-40 flex items-center justify-center text-5xl`}>
                    {project.image}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-display font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 flex-wrap">
                      <Button asChild variant="outline" size="sm" className="rounded-full">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={14} className="mr-1.5" /> Code
                        </a>
                      </Button>
                      {project.demo && (
                        <Button asChild size="sm" className="rounded-full">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={14} className="mr-1.5" /> Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
