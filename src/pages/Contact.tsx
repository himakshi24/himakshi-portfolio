import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Github, Linkedin, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <SEOHead title="Contact" description="Get in touch with me for collaboration, job opportunities, or project inquiries." path="/contact" />

      <section className="section-padding pt-32">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Get in Touch</h1>
            <div className="w-16 h-1 bg-primary rounded-full mb-12" />
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <AnimatedSection delay={0.1}>
              <div className="bg-card rounded-2xl p-8 card-shadow">
                <h2 className="text-xl font-display font-semibold text-foreground mb-6">Send a Message</h2>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <CheckCircle size={48} className="text-primary mb-4" />
                      <h3 className="text-lg font-display font-semibold text-foreground mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                        <Input
                          id="name"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Your name"
                          className="rounded-xl"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="your@email.com"
                          className="rounded-xl"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                        <Textarea
                          id="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Your message..."
                          className="rounded-xl resize-none"
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full rounded-xl">
                        <Send size={18} className="mr-2" /> Send Message
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-xl font-display font-semibold text-foreground mb-6">Connect With Me</h2>

                {[
                  { icon: Mail, label: "Email", value: "himakshimanmode24@gmail.com", href: "mailto:himakshimanmode24@gmail.com", color: "bg-teal-light text-teal" },
                  { icon: Github, label: "GitHub", value: "github.com/himakshi24", href: "https://github.com/himakshi24", color: "bg-orange-light text-orange" },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/himakshi-manmode-180303285", href: "https://www.linkedin.com/in/himakshi-manmode-180303285/", color: "bg-cyan-light text-cyan" },
                ].map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-5 p-5 bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-shadow"
                  >
                    <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                      <item.icon size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </motion.a>
                ))}

                {/* 3D element placeholder */}
                <div className="mt-8 bg-teal-light rounded-2xl p-12 flex items-center justify-center text-6xl">
                  💬
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
